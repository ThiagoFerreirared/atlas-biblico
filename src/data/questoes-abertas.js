// Questões de investigação registradas no Apêndice B do PDF consolidado.
// Estes temas NÃO são testes. Permanecem em aberto mesmo quando parcialmente
// abordados em aulas já publicadas; nenhuma conclusão é inventada pelo site.
import { debates, aulas } from './aulas.js';

const referencias={
  'DB-003':[[1,24],[1,25],[2,18],[2,19],[2,20],[2,21],[2,22]],
  'DB-004':[[1,26],[2,7],[3,8]],
  'DB-005':[[1,26]],
  'DB-006':[[1,26],[1,27],[3,6],[3,7]],
  'DB-007':[[1,20],[1,21],[1,24],[1,25]],
  'DB-008':[[1,29],[1,30]],
  'DB-009':[[1,4],[1,5],[1,14],[1,15],[1,16],[1,17],[1,18],[1,19]],
  'DB-010':[[2,1],[2,2],[2,3]],
  'DB-011':[[2,7]],
  'DB-012':[[1,20],[1,21],[2,7]],
  'DB-013':[[2,7]],
  'DB-014':[[2,8],[2,9],[2,10],[2,11],[2,12],[2,13],[2,14]],
  'DB-015':[[2,8],[2,9],[2,15]],
  'DB-016':[[2,16],[2,17],[3,5]],
  'DB-017':[[2,17],[3,4]],
  'DB-018':[[2,15],[2,16],[2,17]],
  'DB-019':[[2,18]],
  'DB-020':[[2,19],[2,20]],
  'DB-021':[[2,18],[2,21],[2,22],[2,23],[2,24],[2,25]],
  'DB-022':[[2,21],[2,22]],
  'DB-023':[[2,24]],
  'DB-024':[[2,25],[3,7],[3,10]],
  'DB-025':[[3,1]],
  'DB-026':[[3,1]],
  'DB-027':[[3,2],[3,3]],
  'DB-028':[[3,6]],
  'DB-029':[[3,6],[3,7]],
  'DB-030':[[3,1],[3,2],[3,3],[3,4],[3,5]],
  'DB-031':[[3,9],[3,11]],
  'DB-032':[[3,12],[3,13]],
  'DB-033':[[3,8]]
};

// Situações adicionais informadas pelo estudante ao revisar o projeto.
// Não significam que o debate foi resolvido ou que exista nova aula publicada.
const andamento={
  'DB-003':{estado:'Comparação inicial realizada; aprofundamento aberto'},
  'DB-016':{estado:'Aprofundamento iniciado'},
  'DB-017':{estado:'Retomada registrada',nota:'Discussão retomada com uma interpretação de Rodrigo Silva; o debate permanece aberto.'},
  'DB-024':{estado:'Aprofundamento iniciado'},
  'DB-028':{estado:'Em aberto',nota:'Os motivos pessoais de Adão não são explicitados pelo narrador bíblico.'},
  'DB-029':{estado:'A aprofundar',nota:'Comparar as tradições católica, protestante e ortodoxa sem atribuir a todas a mesma formulação.'},
  'DB-030':{estado:'Aprofundamento iniciado'}
};

export const questoesAbertas=debates.map(d=>{
  const passagens=referencias[d.id]||[];
  const origem=aulas.filter(a=>a.registro.includes(d.id)).map(a=>a.numero);
  return {...d,passagens,origem,estado:andamento[d.id]?.estado||'Em aberto',nota:andamento[d.id]?.nota||null};
});
export function questoesDoVersiculo(capitulo,versiculo){
  return questoesAbertas.filter(q=>q.passagens.some(([c,v])=>c===Number(capitulo)&&v===Number(versiculo)));
}
export function questoesDoCapitulo(capitulo){
  return questoesAbertas.filter(q=>q.passagens.some(([c])=>c===Number(capitulo)));
}
export function capituloPrincipal(q){return q.passagens[0]?.[0]||null;}
export function urlQuestao(id){return '/estudos/debates/#'+id;}
export function urlPassagemPrincipal(q){const p=q.passagens[0];return p?'/livros/genesis/'+p[0]+'/'+p[1]+'/':null;}
