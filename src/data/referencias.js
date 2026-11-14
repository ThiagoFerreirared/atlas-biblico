import p1 from './refs-parte1.js';
import p2 from './refs-parte2.js';
import p3 from './refs-parte3.js';
import p4 from './refs-parte4.js';
import p5 from './refs-parte5.js';
import novas from './refs-novas.js';

// Preservar os 116 textos originais BLIVRE; novos textos são traduções de estudo rotuladas.
// O acervo antigo prevalece se a mesma referência reaparecer na Aula 25.
export const textosDasReferencias={...novas,...p1,...p2,...p3,...p4,...p5};
export function textoDaReferencia(referencia){return textosDasReferencias[referencia]||null;}
