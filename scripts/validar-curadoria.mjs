import assert from 'node:assert/strict';
import { aulas } from '../src/data/catalogo-aulas.js';
import { mapaEditorial } from '../src/data/mapa-editorial.js';
import { coberturaGenesis } from '../src/data/cobertura.js';
import { textoGenesis } from '../src/data/texto-genesis.js';
import { gerarConteudoDoVersiculo, possuiEstudo, modulos } from '../src/data/estudo.js';

let verificados=0;
let totalSecoes=0,totalRefs=0,totalPerguntas=0;
const ids=new Set(modulos.map(m=>m.id));
for(const faixa of coberturaGenesis.filter(f=>f.aula>=8)){
  const aula=aulas.find(a=>a.numero===faixa.aula);
  const mapa=mapaEditorial[faixa.aula];
  assert(aula&&mapa,'Aula sem mapeamento: '+faixa.aula);
  const expected=new Set(Array.from({length:faixa.ate-faixa.de+1},(_,i)=>i+faixa.de));
  for(const [key,items,count] of [
    ['secoes',mapa.secoes,aula.secoes.length],
    ['referencias',mapa.referencias,aula.referencias.length],
    ['perguntas',mapa.perguntas,aula.perguntas.length]
  ]){
    const seen=new Map();
    for(const item of items){
      const [index,versiculos,modulo]=item;
      assert(Number.isInteger(index)&&index>=0&&index<count,`Índice fora do intervalo: aula ${faixa.aula} ${key} ${index}`);
      assert(Array.isArray(versiculos)&&versiculos.length,`Sem versículos: aula ${faixa.aula} ${key}`);
      for(const v of versiculos) assert(expected.has(v),`Versículo fora do trecho: aula ${faixa.aula} ${key} ${v}`);
      if(key==='secoes') assert(['textual','historico','interpretacoes','arqueologia'].includes(modulo),'Módulo inválido');
      assert(!seen.has(index),`Índice duplicado: aula ${faixa.aula} ${key} ${index}`);
      seen.set(index,true);
    }
    const start=key==='referencias'?1:0; // Índice 0 é o próprio trecho, não referência cruzada.
    for(let i=start;i<count;i++)assert(seen.has(i),`Faltou mapear ${key} ${i} da aula ${faixa.aula}`);
  }
  totalSecoes+=aula.secoes.length;totalRefs+=aula.referencias.length;totalPerguntas+=aula.perguntas.length;
}
for(const [c,max] of [[1,31],[2,25],[3,24]]){
  assert.equal(textoGenesis[c].length,max,'Texto bíblico incompleto, capítulo '+c);
  for(let v=1;v<=max;v++){
    const analise=gerarConteudoDoVersiculo(c,v);
    const esperado=c<3||v<=15;
    assert.equal(Boolean(analise),esperado,`Cobertura incorreta Gênesis ${c}:${v}`);
    assert.equal(possuiEstudo(c,v),esperado);
    if(!analise)continue;
    for(const id of ids)assert(Array.isArray(analise[id])&&analise[id].length>0,`Faltou módulo ${id} em Gênesis ${c}:${v}`);
    const titulo=analise.textual.map(s=>s.titulo).join(' ');
    if(c===1&&v===1) {
      assert(!/João|terra sem forma|vento de Deus|Espírito ou vento/i.test(titulo),'Assunto de outro versículo em análise textual de Gênesis 1:1');
      assert(analise.conexoes.some(r=>r.titulo.startsWith('João')),'João precisa aparecer nas conexões, não no texto');
    }
    verificados++;
  }
}
assert.equal(verificados,71);
console.log('Curadoria validada: 69 versículos, '+totalSecoes+' seções, '+totalRefs+' referências e '+totalPerguntas+' perguntas em aulas 8–24.');
