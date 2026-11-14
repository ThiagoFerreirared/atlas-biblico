import assert from 'node:assert/strict';
import { estudosAprofundados, obterAprofundamento } from '../src/data/estudos-aprofundados.js';
import { textoGenesis } from '../src/data/texto-genesis.js';
import { aulas } from '../src/data/aulas.js';
import { gerarConteudoDoVersiculo, possuiEstudo } from '../src/data/estudo.js';

assert.equal(aulas.length,24,'Acervo deve manter todas as 24 aulas');
let count=0;
for(const [c,n] of [[1,31],[2,25],[3,13]]){
  assert.equal(Object.keys(estudosAprofundados[c]).length,n,'Quantidade de estudos errada em Gênesis '+c);
  for(let v=1;v<=n;v++){
    const d=obterAprofundamento(c,v);
    assert(d,'Falta estudo aprofundado em Gênesis '+c+':'+v);
    assert(possuiEstudo(c,v),'Cobertura não reconhecida em '+c+':'+v);
    assert(textoGenesis[c].some(item=>item.numero===v),'Texto bíblico ausente em '+c+':'+v);
    const base=gerarConteudoDoVersiculo(c,v);
    assert(base,'Material de origem ausente em '+c+':'+v);
    for(const prop of ['passos','historico','leituras','limites','sintese'])
      assert(Array.isArray(d[prop])&&d[prop].length>0,prop+' incompleto em '+c+':'+v);
    for(const p of d.passos) assert(p.length===2&&p.every(x=>typeof x==='string'&&x.length>5),'Passo vazio em '+c+':'+v);
    for(const p of d.leituras) assert(p.length===3&&p.every(x=>typeof x==='string'&&x.length>5),'Leitura sem contraste em '+c+':'+v);
    for(const t of d.termos||[])assert(t.length===3&&/[\u0590-\u05FF]/.test(t[0]),'Hebraico inválido em '+c+':'+v);
    count++;
  }
}
for(let v=14;v<=24;v++)assert.equal(obterAprofundamento(3,v),null,'Não criar estudo fora da fonte: Gênesis 3:'+v);
assert.equal(count,69);
console.log('OK: 24 aulas preservadas, 69 estudos aprofundados, 69 textos de origem e 80 versículos para leitura.');
