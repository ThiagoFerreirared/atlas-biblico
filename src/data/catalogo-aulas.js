import { aulas as originais, debates, estadoDoPdf } from './aulas.js';
import { aulasNovas } from './aulas-novas.js';
export const aulas=[...originais,...aulasNovas];
export { debates, estadoDoPdf };
