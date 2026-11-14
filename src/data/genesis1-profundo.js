import a from './genesis1-profundo-1.js';
import b from './genesis1-profundo-2.js';
import c from './genesis1-profundo-3.js';

// Conteúdo editorial novo, ampliado a partir das aulas 06–15 (PDF consolidado).
// A versão consolidada é um resumo do estudo original, não sua transcrição completa.
// Hebraico conferido com https://mechon-mamre.org/p/pt/pt0101.htm
// Não criar dados de novos versículos por inferência.
export const aprofundamentoGenesis1={...a,...b,...c};
export const fontesGenesis1=[
  {nome:'Aulas 06–15 — Atlas Bíblico (PDF consolidado)',descricao:'Fonte de temas, limites, interpretações e referências cruzadas; conteúdo do usuário.'},
  {nome:'Texto hebraico de Gênesis 1 — Mechon-Mamre',url:'https://mechon-mamre.org/p/pt/pt0101.htm',descricao:'Conferência da escrita hebraica das expressões apresentadas.'},
  {nome:'Texto bíblico português — Bíblia Livre (BLIVRE, 2018)',url:'https://github.com/blivre/BibliaLivre',descricao:'Tradução publicada no site, CC BY 3.0 Brasil.'}
];
