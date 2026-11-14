// IDs estáveis de passagens bíblicas para URLs locais.
// Marcadores 'v' = capítulo:versículo, 'a' = intervalo e 'e' = lista.
export function slugReferencia(referencia) {
  return String(referencia)
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().replace(/:/g,' v ').replace(/-/g,' a ').replace(/,/g,' e ')
    .replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
}
export const urlReferencia=(referencia)=>'/passagens/'+slugReferencia(referencia)+'/';
