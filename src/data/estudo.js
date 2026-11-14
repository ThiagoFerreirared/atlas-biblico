import { aulas } from './catalogo-aulas.js';
import { coberturaGenesis } from './cobertura.js';
import { textoGenesis } from './texto-genesis.js';
import { modulos } from './biblia.js';
import { estudoGenesisInicial } from './curadoria-genesis-1.js';
import { mapaEditorial } from './mapa-editorial.js';

export { modulos };
export const TOTAL_ESTUDADOS = 71; // Gn 1:1–31 (31), 2:1–25 (25), 3:1–13 (13).
export const TOTAL_LIDOS_DISPONIVEIS = 80; // Gênesis 1–3 em Bíblia Livre.
export const totalVersosPorCapitulo = { 1:31, 2:25, 3:24 };

export function trechoDoVersiculo(capitulo, versiculo) {
  return coberturaGenesis
    .filter(c=>c.capitulo===Number(capitulo)&&Number(versiculo)>=c.de&&Number(versiculo)<=c.ate);
}
export function aulasDoVersiculo(capitulo, versiculo) {
  return trechoDoVersiculo(capitulo, versiculo)
    .map(c=>({ ...c, aula:aulas.find(a=>a.numero===c.aula) }))
    .filter(c=>Boolean(c.aula));
}
export function possuiEstudo(capitulo,versiculo){return aulasDoVersiculo(capitulo,versiculo).length>0;}
export function textoVerso(capitulo,versiculo){return (textoGenesis[capitulo]||[]).find(v=>v.numero===Number(versiculo));}
export function urlVerso(capitulo,versiculo){return '/livros/genesis/'+capitulo+'/'+versiculo+'/';}
export function urlCapitulo(capitulo){return '/livros/genesis/'+capitulo+'/';}
export function ligaReferencia(referencia){
  const r=String(referencia).match(/^G[eê]nesis\s+(\d+):(\d+)/i);
  return r&&Number(r[1])<=3&&Number(r[1])>0&&textoVerso(Number(r[1]),Number(r[2]))
    ?urlVerso(Number(r[1]),Number(r[2])):null;
}

function entrada(titulo,texto,origem='',tipo='texto'){return {titulo,texto,origem,tipo};}
const semInformacao={
  textual:'O acervo ainda não apresenta uma observação lexical específica para este versículo. O texto integral está acima; nenhuma análise de hebraico foi inventada.',
  historico:'Não há um contexto histórico específico registrado para este versículo. Consulte a aula completa para o contexto do trecho.',
  interpretacoes:'Ainda não há interpretação específica registrada para este versículo isolado; o estudo relacionado abrange um trecho mais amplo.',
  arqueologia:'Ainda não há evidências arqueológicas ou científicas específicas registradas para este versículo. Ausência de estudo não significa confirmação ou refutação.'
};
const rotulos={textual:'Análise textual',historico:'Contexto histórico',interpretacoes:'Interpretações',arqueologia:'Arqueologia e ciência'};
function preencher(module,partes,origem){
  return partes.length?partes:[entrada('Sem explicação específica registrada',semInformacao[module],origem)];
}
export function gerarConteudoDoVersiculo(capitulo,versiculo){
  const blocos=aulasDoVersiculo(capitulo,versiculo);
  if(!blocos.length)return null;
  const verse=textoVerso(capitulo,versiculo);
  if(Number(capitulo)===1&&Number(versiculo)<=3){
    const c=estudoGenesisInicial(Number(versiculo),aulas,verse);
    return {...c,aulas:blocos};
  }
  const secoes={textual:[],historico:[],interpretacoes:[],arqueologia:[]};
  const refs=[],origens=[];
  for(const bloco of blocos){
    const aula=bloco.aula,meta=mapaEditorial[aula.numero];
    if(!meta)continue;
    const origem='Aula '+String(aula.numero).padStart(2,'0')+' · Gênesis '+bloco.faixa;
    origens.push(origem);
    for(const [idx,versos,modulo] of meta.secoes){
      if(!versos.includes(Number(versiculo)))continue;
      const sec=aula.secoes[idx];
      if(sec&&secoes[modulo])secoes[modulo].push(entrada(sec.titulo,sec.texto,origem));
    }
    for(const [idx,versos] of meta.referencias){
      if(!versos.includes(Number(versiculo)))continue;
      const ref=aula.referencias[idx];
      if(ref)refs.push({...ref,origem});
    }
  }
  const origem=origens.join(' · ');
  const conexoes=refs.map(r=>entrada(r.referencia,r.texto+'\n\nTipo de conexão registrado: '+r.conexao,r.origem,'referencia'));
  return {
    nota:'As informações foram selecionadas para este versículo a partir das aulas do trecho. Não se atribui a um versículo uma discussão pertencente a outro.',
    textual:preencher('textual',secoes.textual,origem),
    historico:preencher('historico',secoes.historico,origem),
    conexoes:conexoes.length?conexoes:[entrada('Sem referências específicas no PDF','A aula de origem não registra uma referência cruzada específica para este versículo; outras referências do mesmo trecho permanecem na página da aula.','Limite das fontes')],
    interpretacoes:preencher('interpretacoes',secoes.interpretacoes,origem),
    arqueologia:preencher('arqueologia',secoes.arqueologia,origem),
    // Síntese da explicação importada, não uma nova prova.
    revisao:[
      ...([secoes.textual[0],secoes.interpretacoes[0],secoes.historico[0],secoes.arqueologia[0]]
          .filter(Boolean).slice(0,2).map(s=>entrada(s.titulo,s.texto,s.origem))),
      ...(!secoes.textual.length&&!secoes.interpretacoes.length&&!secoes.historico.length&&!secoes.arqueologia.length
        ?[entrada('Leitura do trecho','Este versículo faz parte do trecho estudado em '+origem+'. Consulte os módulos anteriores e o texto bíblico para reunir as informações apresentadas.','Organização editorial')]
        :[])
    ],
    referencias:refs,aulas:blocos
  };
}
