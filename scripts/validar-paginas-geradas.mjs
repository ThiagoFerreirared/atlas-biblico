import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { textosDasReferencias } from '../src/data/referencias.js';
import { slugReferencia } from '../src/data/rotas-referencias.js';
import { estudosAprofundados } from '../src/data/estudos-aprofundados.js';

let pages=0,rich=0;
for(const [cap,total] of [[1,31],[2,25],[3,24]]){
  const chapterPath='dist/livros/genesis/'+cap+'/index.html';
  assert(existsSync(chapterPath),'Capítulo ausente: '+chapterPath);
  const chapterHtml=readFileSync(chapterPath,'utf8');
  assert(chapterHtml.includes('Roteiro aprofundado de Gênesis '+cap),'Roteiro ausente: '+cap);
  for(let verse=1;verse<=total;verse++){
    const path='dist/livros/genesis/'+cap+'/'+verse+'/index.html';
    assert(existsSync(path),'Versículo sem página: '+cap+':'+verse);
    const html=readFileSync(path,'utf8');
    assert(html.includes('Gênesis '+cap+':'+verse),'Referência não apresentada: '+cap+':'+verse);
    const hasStudy=cap!==3||verse<=19;
    if(hasStudy){
      assert(estudosAprofundados[cap][verse], 'Estudo sem conteúdo aprofundado: '+cap+':'+verse);
      assert(html.includes('data-expanded="1"'),'Aprofundamento não conectado: '+cap+':'+verse);
      for(const id of ['textual','historico','conexoes','interpretacoes','arqueologia','revisao'])
        assert(html.includes('id="template-'+id+'"'),'Módulo ausente: '+id+' em '+cap+':'+verse);
      assert(html.includes('Leitura explicada, passo a passo'),'Explicação profunda indisponível: '+cap+':'+verse);
      rich++;
    }else{
      assert(!html.includes('data-expanded="1"'),'Não publicar estudo fora da cobertura: '+cap+':'+verse);
    }
    pages++;
  }
}
let crossrefs=0;
for(const ref of Object.keys(textosDasReferencias)){
  const path='dist/passagens/'+slugReferencia(ref)+'/index.html';
  assert(existsSync(path),'Passagem cruzada ausente: '+ref);
  crossrefs++;
}
for(const essential of ['dist/estudos/1/index.html','dist/estudos/24/index.html','dist/estudos/25/index.html','dist/estudos/26/index.html','dist/estudos/debates/index.html','dist/progresso/index.html','dist/busca/index.html'])
  assert(existsSync(essential),'Página essencial ausente: '+essential);
assert.equal(pages,80);
assert.equal(rich,75);
assert.equal(crossrefs,Object.keys(textosDasReferencias).length);
console.log('Build verificado: 3 roteiros, 80 versículos, 75 estudos com 6 módulos e referências cruzadas verificadas.');
