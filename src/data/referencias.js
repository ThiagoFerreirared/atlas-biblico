import p1 from './refs-parte1.js';
import p2 from './refs-parte2.js';
import p3 from './refs-parte3.js';
import p4 from './refs-parte4.js';
import p5 from './refs-parte5.js';

// 116 referências distintas do PDF, com texto integral da Bíblia Livre.
export const textosDasReferencias={...p1,...p2,...p3,...p4,...p5};
export function textoDaReferencia(referencia){return textosDasReferencias[referencia]||null;}
