import { aprofundamentoGenesis1 } from './genesis1-profundo.js';
import genesis2a from './genesis2-profundo-1.js';
import genesis2b from './genesis2-profundo-2.js';
import genesis3 from './genesis3-profundo.js';
import novos from './genesis3-profundo-novo.js';
import genesis4 from './genesis4-profundo.js';

// Índice central de estudo profundo. Apenas capítulos com aulas registradas.
export const estudosAprofundados={
  1:aprofundamentoGenesis1,
  2:{...genesis2a,...genesis2b},
  3:{...genesis3,...novos},
  4:genesis4
};
export function obterAprofundamento(capitulo,versiculo){
  return estudosAprofundados[Number(capitulo)]?.[Number(versiculo)]||null;
}
