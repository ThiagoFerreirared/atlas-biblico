import assert from 'node:assert/strict';
import { aprofundamentoGenesis1, fontesGenesis1 } from '../src/data/genesis1-profundo.js';
import { textoGenesis } from '../src/data/texto-genesis.js';
import { gerarConteudoDoVersiculo } from '../src/data/estudo.js';
import { coberturaGenesis } from '../src/data/cobertura.js';

const ids=Object.keys(aprofundamentoGenesis1).map(Number).sort((a,b)=>a-b);
assert.deepEqual(ids,Array.from({length:31},(_,i)=>i+1),'O capítulo 1 precisa ter 31 aprofundamentos distintos');
assert.equal(textoGenesis[1].length,31);
for(const versiculo of ids){
  const a=aprofundamentoGenesis1[versiculo],origem=gerarConteudoDoVersiculo(1,versiculo);
  assert(origem,'Estudo original ausente em Gênesis 1:'+versiculo);
  assert(a.tema&&a.tema.length>=12,'Tema genérico no versículo '+versiculo);
  for(const [campo,min] of [['passos',2],['historico',1],['leituras',1],['limites',1],['sintese',2]]){
    assert(Array.isArray(a[campo])&&a[campo].length>=min,'Campo incompleto: '+campo+' no versículo '+versiculo);
  }
  for(const passo of a.passos)assert(Array.isArray(passo)&&passo.length===2&&passo[0].length>=5&&passo[1].length>=25,'Passo incompleto: '+versiculo);
  for(const leitura of a.leituras)assert(Array.isArray(leitura)&&leitura.length===3&&leitura[0].length>=5&&leitura[1].length>12&&leitura[2].length>12,'Falta contraste ou limite numa interpretação: '+versiculo);
  for(const termo of a.termos||[])assert(termo.length===3&&/[\u0590-\u05ff]/.test(termo[0]),'Termo sem grafia hebraica: '+versiculo);
  if(a.quadro){assert(a.quadro.colunas.length>=2&&a.quadro.linhas.length>=1,'Quadro incompleto: '+versiculo);}
  assert(coberturaGenesis.some(r=>r.capitulo===1&&versiculo>=r.de&&versiculo<=r.ate),'Sem origem no PDF: '+versiculo);
}
assert(fontesGenesis1.some(f=>f.url?.includes('mechon-mamre.org')));
console.log('Aprofundamento de Gênesis 1 validado: 31 versículos; passos, contextos, interpretações, quadros, termos hebraicos e sínteses.');
