import assert from 'node:assert/strict';
import { aulas, debates } from '../src/data/aulas.js';
import { coberturaGenesis } from '../src/data/cobertura.js';
import { mapaEditorial } from '../src/data/mapa-editorial.js';
import { estudoGenesisInicial } from '../src/data/curadoria-genesis-1.js';
import { gerarConteudoDoVersiculo, possuiEstudo } from '../src/data/estudo.js';
import { questoesAbertas } from '../src/data/questoes-abertas.js';

// Instantâneo de integridade do acervo comparado com as 42 páginas da edição
// consolidada em 14/11/2026. O hash cobre títulos, textos, referências,
// explicações de conexão, questões, registros e os 31 debates.
function hashIntegridade(v){
  let h=0xcbf29ce484222325n;
  const s=JSON.stringify(v);
  for(let i=0;i<s.length;i++){
    h^=BigInt(s.charCodeAt(i));
    h=(h*0x100000001b3n)&0xffffffffffffffffn;
  }
  return h.toString(16).padStart(16,'0');
}
assert.equal(hashIntegridade({aulas,debates}),'cd0b54813642c1c9','O acervo original foi modificado desde a auditoria integral do PDF; conferir diferenças na fonte antes de aprovar.');
const stats={aulas:0,topicos:0,referencias:0,conexoes:0,perguntas:0,registros:0,debates:0,versiculos:0};
const cobertas=new Set();
for(const aula of aulas){
  assert.equal(aula.numero,stats.aulas+1,'Numeração das aulas fora de ordem');
  assert(aula.titulo&&aula.categoria);
  stats.aulas++;
  for(const sec of aula.secoes){
    assert(sec.titulo?.trim()&&sec.texto?.trim(),'Tópico sem conteúdo na aula '+aula.numero);
    stats.topicos++;
  }
  for(const ref of aula.referencias){
    assert(ref.referencia?.trim()&&ref.texto?.trim()&&ref.conexao?.trim(),'Referência ou explicação ausente na aula '+aula.numero);
    stats.referencias++;stats.conexoes++;
  }
  for(const pergunta of aula.perguntas){
    assert(pergunta?.trim(),'Pergunta perdida na fonte da aula '+aula.numero);
    stats.perguntas++;
  }
  assert(aula.registro?.trim(),'Registro ausente na aula '+aula.numero);stats.registros++;
  if(aula.numero>=8){
    const meta=mapaEditorial[aula.numero];
    const cobertura=coberturaGenesis.find(b=>b.aula===aula.numero);
    assert(meta&&cobertura,'Falta curadoria da aula '+aula.numero);
    for(const campo of ['secoes','referencias','perguntas']){
      const indices=meta[campo].map(l=>l[0]).sort((a,b)=>a-b);
      const esperado=Array.from({length:campo==='referencias'?aula.referencias.length-1:aula[campo].length},(_,i)=>campo==='referencias'?i+1:i);
      assert.deepEqual(indices,esperado,'Curadoria incompleta de '+campo+' na aula '+aula.numero);
      for(const [indice,versos,modulo] of meta[campo]){
        assert(aula[campo][indice],'Índice inválido na aula '+aula.numero);
        if(campo==='secoes')assert(['textual','historico','interpretacoes','arqueologia'].includes(modulo),'Módulo inválido '+modulo);
        assert(versos.length,'Tema sem versículo na aula '+aula.numero);
        for(const versiculo of versos){
          assert(versiculo>=cobertura.de&&versiculo<=cobertura.ate,'Tema ligado a versículo fora da faixa: Aula '+aula.numero);
          const conteudo=gerarConteudoDoVersiculo(cobertura.capitulo,versiculo);
          assert(conteudo,'Estudo não gerado em '+cobertura.capitulo+':'+versiculo);
          if(campo==='secoes')assert(conteudo[modulo].some(s=>s.texto===aula.secoes[indice].texto),'Texto integral do tópico não chega às notas do versículo '+cobertura.capitulo+':'+versiculo);
          if(campo==='referencias')assert(conteudo.referencias.some(r=>r.referencia===aula.referencias[indice].referencia&&r.conexao===aula.referencias[indice].conexao),'Referência não chega ao módulo Conexões em '+cobertura.capitulo+':'+versiculo);
        }
      }
    }
  }
}
for(const v of [1,2,3]){
 const estudo=estudoGenesisInicial(v,aulas);
 assert(estudo,'Curadoria inicial de Gênesis 1:'+v+' ausente');
 for(const campo of ['textual','historico','conexoes','interpretacoes','arqueologia','revisao','referencias'])
   assert(Array.isArray(estudo[campo])&&estudo[campo].length,'Módulo inicial vazio: '+campo);
}
assert.equal(aulas[5].secoes.length,3);
assert.equal(aulas[6].secoes.length,3);
for(const c of coberturaGenesis.filter(c=>c.aula<=24)){
 for(let v=c.de;v<=c.ate;v++)cobertas.add(c.capitulo+':'+v);
}
for(const key of cobertas){
 const [cap,vers]=key.split(':').map(Number);
 assert(possuiEstudo(cap,vers),'Versículo não possui estudo: '+key);
 stats.versiculos++;
}
assert(questoesAbertas.length>=debates.length,'Caderno auditado incompleto');
const questoesAuditadas=questoesAbertas.slice(0,debates.length);
assert.deepEqual(questoesAuditadas.map(x=>x.id),debates.map(x=>x.id));
for(const debate of questoesAuditadas){
 assert(debate.titulo&&debate.estado,'Debate sem título ou situação: '+debate.id);
 stats.debates++;
}
assert.deepEqual(stats,{aulas:24,topicos:77,referencias:124,conexoes:124,perguntas:48,registros:24,debates:31,versiculos:69});
console.log('Auditoria estrutural e editorial aprovada:',stats);
console.log('Tópicos e conexões estão presentes em aula original e ligados aos módulos apropriados; perguntas estão preservadas como fonte, mas não são exibidas como provas.');
