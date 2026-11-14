import { aulas } from './aulas.js';
import { coberturaGenesis } from './cobertura.js';
import { textoGenesis } from './texto-genesis.js';
import { modulos } from './biblia.js';
import { estudoGenesisInicial } from './curadoria-genesis-1.js';

export { modulos };
export const TOTAL_ESTUDADOS = 69; // Gn 1:1–31 (31), 2:1–25 (25), 3:1–13 (13).
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

function entry(titulo,texto,origem='',tipo='texto'){return {titulo,texto,origem,tipo};}
const lexica=/hebraic|aramaic|grego|palavr[ao]s? [a-zà-ú]* em hebraico|tradu[zç]|termo (?:hebraico|grego)|etimolog|vocábulo|sentido da express[aã]o|express[aã]o hebraic/i;
const contexto=/contexto hist[oó]rico|hist[oó]ria|antigo oriente|mesopot[aâ]m|cultural|costume|origem hist[oó]rica|localiza[cç][aã]o|autor[ií]a|composi[cç][aã]o/i;
const evidencia=/arqueolog|ci[eê]nci[ai]|evid[eê]ncia (?:hist[oó]rica|arqueol[oó]gica)|astronom[ií]a|geologia/i;

export function gerarConteudoDoVersiculo(capitulo,versiculo){
  const blocos=aulasDoVersiculo(capitulo,versiculo);
  if(!blocos.length)return null;
  const verse=textoVerso(capitulo,versiculo);
  if(Number(capitulo)===1&&Number(versiculo)<=3){
    const c=estudoGenesisInicial(Number(versiculo),aulas,verse);
    return {...c,aulas:blocos};
  }
  const secoes=blocos.flatMap(b=>b.aula.secoes.map(s=>({...s,origem:'Aula '+String(b.aula.numero).padStart(2,'0')+' · Gênesis '+b.faixa})));
  const refs=blocos.flatMap(b=>b.aula.referencias.map(r=>({...r,origem:'Aula '+String(b.aula.numero).padStart(2,'0')})));
  const questions=blocos.flatMap(b=>b.aula.perguntas.map((q,i)=>entry('Pergunta '+(i+1)+' da aula',q,'Aula '+String(b.aula.numero).padStart(2,'0'))));
  const records=blocos.filter(b=>b.aula.registro).map(b=>entry('Questões em aberto',b.aula.registro,'Aula '+String(b.aula.numero).padStart(2,'0')));
  const lexical=secoes.filter(s=>lexica.test(s.titulo+' '+s.texto));
  const historical=secoes.filter(s=>contexto.test(s.titulo));
  const evidence=secoes.filter(s=>evidencia.test(s.titulo));
  const used=new Set([...lexical,...historical,...evidence].map(s=>s.origem+'|'+s.titulo));
  const other=secoes.filter(s=>!used.has(s.origem+'|'+s.titulo));
  const section=(s)=>entry(s.titulo,s.texto,s.origem);
  const note='Esta aula original analisa o trecho Gênesis '+blocos.map(b=>b.faixa).join(' e Gênesis ')+'. Algumas explicações são compartilhadas pelos versículos desse trecho, não comentários individuais.';
  return {
    nota:note,
    textual:[
      entry('O versículo na Bíblia Livre',verse?.texto||'','Bíblia Livre (2018) · CC BY 3.0 Brasil'),
      ...(lexical.length?lexical.map(section):[
        entry('Palavras e tradução','A edição consolidada não traz uma análise linguística isolada para este versículo. Consulte as explicações gerais do trecho no módulo Interpretações e na página da aula.','Limite do PDF')
      ])
    ],
    historico: historical.length?historical.map(section):[
      entry('Contexto da aula','O PDF consolidado não separou um comentário de contexto histórico específico para este versículo. A análise do trecho está reunida nas outras seções e na aula original.','Limite do PDF')
    ],
    conexoes:[
      entry('Como ler estas relações','As referências foram registradas pela aula que abrange o trecho completo, não necessariamente como conexão exclusiva deste versículo.','Nota editorial'),
      ...refs.map(r=>entry(r.referencia,r.texto+'\n\nRelação registrada: '+r.conexao,r.origem,'referencia'))
    ],
    interpretacoes:[
      entry('Explicações da aula sobre este trecho','As seções abaixo pertencem à análise consolidada de um conjunto de versículos. Leia-as em conjunto com o texto do capítulo para não confundir o assunto de cada frase.','Como usar'),
      ...((other.length?other:secoes).map(section))
    ],
    arqueologia: evidence.length?evidence.map(section):[
      entry('O que foi documentado','Não há um estudo arqueológico ou científico específico e verificável neste trecho da edição consolidada. Não apresentamos hipótese como se fosse achado comprovado.','Limite do PDF')
    ],
    revisao:[
      ...questions,...records,
      entry('Revise o que aprendeu','Você pode responder às perguntas da aula e registrar suas anotações. Questões abertas exigem reflexão própria e não têm correção automática.','Método Atlas')
    ],
    referencias:refs,aulas:blocos
  };
}
