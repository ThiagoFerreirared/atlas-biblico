import { aulas } from './aulas.js';
import { coberturaGenesis } from './cobertura.js';
import { textoGenesis } from './texto-genesis.js';
import { modulos } from './biblia.js';

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

function entry(titulo,texto,origem='',tipo='texto'){
  return {titulo,texto,origem,tipo};
}
const textoOriginal=`Texto bíblico: Bíblia Livre (BLIVRE, 2018), CC BY 3.0 Brasil. Análises: Atlas Bíblico, Aulas 1–24, edição consolidada (14/11/2026).`;
const lingual=/hebraic|aramaic|greg|termo|palavra|verbo|expressão|vocábul|significa|traduz|linguagem|plural|vocabulário|raiz|sentido|nome|pron[uú]ncia|etimolog|narrativa/i;
const historico=/hist[oó]r|mesopot|cana[aã]|egip|antig|costume|context|orient|sociedade|cultura|patriarc|arqueolog|ambiente|autoria|composi|tradi[cç][aã]o/i;
const empirico=/arqueolog|cient[ií]f|geolog|astronom|evid[eê]nc|comprov|geograf|cronolog|dil[uú]v|f[ií]sic|taxonomia|biolog|cidade|inscri[cç][aã]o/i;

export function gerarConteudoDoVersiculo(capitulo,versiculo){
  const blocos=aulasDoVersiculo(capitulo,versiculo);
  if(!blocos.length)return null;
  const verse=textoVerso(capitulo,versiculo);
  const secoes=blocos.flatMap(b=>b.aula.secoes.map(s=>({...s,origem:'Aula '+String(b.aula.numero).padStart(2,'0')+' · Gênesis '+b.faixa})));
  const refs=blocos.flatMap(b=>b.aula.referencias.map(r=>({...r,origem:'Aula '+String(b.aula.numero).padStart(2,'0')})));
  const questions=blocos.flatMap(b=>b.aula.perguntas.map(q=>entry('Pergunta da aula',q,'Aula '+String(b.aula.numero).padStart(2,'0'))));
  const records=blocos.filter(b=>b.aula.registro).map(b=>entry('Registro e debates',b.aula.registro,'Aula '+String(b.aula.numero).padStart(2,'0')));
  const lexical=secoes.filter(s=>lingual.test(s.titulo+' '+s.texto));
  const context=secoes.filter(s=>historico.test(s.titulo+' '+s.texto));
  const evidence=secoes.filter(s=>empirico.test(s.titulo+' '+s.texto));
  const rangeInfo='Os comentários abaixo foram originalmente escritos para o trecho da aula, e não como uma análise exclusiva deste versículo.';
  return {
    nota:rangeInfo,
    textual:[
      entry('Gênesis '+capitulo+':'+versiculo+' · texto integral',verse?.texto||'',textoOriginal),
      ...(lexical.length?lexical.map(s=>entry(s.titulo,s.texto,s.origem)):
        [entry('Análise lexical na fonte','O PDF consolidado não registra uma análise específica das palavras deste versículo. A consulta ao texto bíblico integral continua disponível acima.','Estado da fonte')])
    ],
    historico: (context.length?context:secoes.slice(0,1)).map(s=>entry(s.titulo,s.texto,s.origem)),
    conexoes: refs.map(r=>entry(r.referencia,r.texto+'\n\nPor que está conectado? '+r.conexao,r.origem,'referencia')),
    interpretacoes: [
      entry('Abordagem da aula','As explicações a seguir pertencem à análise consolidada do trecho. O PDF pode apresentar perspectivas em debate sem chegar a uma conclusão única.','Nota editorial'),
      ...secoes.map(s=>entry(s.titulo,s.texto,s.origem))
    ],
    arqueologia: evidence.length
      ? evidence.map(s=>entry(s.titulo,s.texto,s.origem))
      : [entry('Limites das evidências','Esta aula não apresenta evidência arqueológica ou científica específica para este versículo. O Atlas não tratará a ausência de material como comprovação nem inventará achados.','Estado da fonte')],
    revisao:[
      ...questions,
      ...records,
      entry('Como revisar','Responda às perguntas usando o texto bíblico e as explicações da aula. Questões abertas não recebem correção automática; você pode registrar e avaliar sua compreensão.','Método Atlas')
    ],
    referencias:refs,
    aulas:blocos
  };
}
