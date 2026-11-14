export const modulos = [
  { id: 'textual', titulo: 'Análise textual', icone: '✍', descricao: 'Idiomas originais, termos e traduções' },
  { id: 'historico', titulo: 'Contexto histórico', icone: '⌛', descricao: 'Mundo antigo, cultura e literatura' },
  { id: 'conexoes', titulo: 'Conexões bíblicas', icone: '◇', descricao: 'Passagens relacionadas e explicadas' },
  { id: 'interpretacoes', titulo: 'Interpretações', icone: '⚖', descricao: 'Leituras e debates teológicos' },
  { id: 'arqueologia', titulo: 'Arqueologia e ciência', icone: '⌕', descricao: 'Pesquisas, evidências e limites' },
  { id: 'revisao', titulo: 'Reflexão e revisão', icone: '✓', descricao: 'Síntese e compreensão' },
];

export const livros = [
  ['Gênesis',50,'Pentateuco'],['Êxodo',40,'Pentateuco'],['Levítico',27,'Pentateuco'],['Números',36,'Pentateuco'],['Deuteronômio',34,'Pentateuco'],
  ['Josué',24,'Históricos'],['Juízes',21,'Históricos'],['Rute',4,'Históricos'],['1 Samuel',31,'Históricos'],['2 Samuel',24,'Históricos'],['1 Reis',22,'Históricos'],['2 Reis',25,'Históricos'],['1 Crônicas',29,'Históricos'],['2 Crônicas',36,'Históricos'],['Esdras',10,'Históricos'],['Neemias',13,'Históricos'],['Ester',10,'Históricos'],
  ['Jó',42,'Poéticos e sapienciais'],['Salmos',150,'Poéticos e sapienciais'],['Provérbios',31,'Poéticos e sapienciais'],['Eclesiastes',12,'Poéticos e sapienciais'],['Cânticos',8,'Poéticos e sapienciais'],
  ['Isaías',66,'Profetas maiores'],['Jeremias',52,'Profetas maiores'],['Lamentações',5,'Profetas maiores'],['Ezequiel',48,'Profetas maiores'],['Daniel',12,'Profetas maiores'],
  ['Oséias',14,'Profetas menores'],['Joel',3,'Profetas menores'],['Amós',9,'Profetas menores'],['Obadias',1,'Profetas menores'],['Jonas',4,'Profetas menores'],['Miqueias',7,'Profetas menores'],['Naum',3,'Profetas menores'],['Habacuque',3,'Profetas menores'],['Sofonias',3,'Profetas menores'],['Ageu',2,'Profetas menores'],['Zacarias',14,'Profetas menores'],['Malaquias',4,'Profetas menores'],
  ['Mateus',28,'Evangelhos'],['Marcos',16,'Evangelhos'],['Lucas',24,'Evangelhos'],['João',21,'Evangelhos'],['Atos',28,'História'],
  ['Romanos',16,'Cartas paulinas'],['1 Coríntios',16,'Cartas paulinas'],['2 Coríntios',13,'Cartas paulinas'],['Gálatas',6,'Cartas paulinas'],['Efésios',6,'Cartas paulinas'],['Filipenses',4,'Cartas paulinas'],['Colossenses',4,'Cartas paulinas'],['1 Tessalonicenses',5,'Cartas paulinas'],['2 Tessalonicenses',3,'Cartas paulinas'],['1 Timóteo',6,'Cartas paulinas'],['2 Timóteo',4,'Cartas paulinas'],['Tito',3,'Cartas paulinas'],['Filemom',1,'Cartas paulinas'],
  ['Hebreus',13,'Cartas gerais'],['Tiago',5,'Cartas gerais'],['1 Pedro',5,'Cartas gerais'],['2 Pedro',3,'Cartas gerais'],['1 João',5,'Cartas gerais'],['2 João',1,'Cartas gerais'],['3 João',1,'Cartas gerais'],['Judas',1,'Cartas gerais'],['Apocalipse',22,'Literatura apocalíptica'],
].map(([nome, capitulos, categoria], indice) => ({ nome, capitulos, categoria, indice, testamento: indice < 39 ? 'AT' : 'NT' }));

// Gênesis 1:1 tem estudo transposto das aulas 6 e 7 do PDF consolidado (14/11/2026).
// Os versículos 2 e 3 permanecem demonstrativos; traduções integrais aguardam verificação de licença.
export const amostra = {
  livro: 'Gênesis', capitulo: 1,
  versos: [
    { numero: 1, texto: 'No princípio, Deus criou os céus e a terra.' },
    { numero: 2, texto: 'E a terra era sem forma e vazia; e havia trevas sobre a face do abismo; e o Espírito de Deus se movia sobre a face das águas.' },
    { numero: 3, texto: 'E disse Deus: Haja luz. E houve luz.' }
  ],
  // Gênesis 1:1: transposição editorial da edição consolidada, aulas 6 e 7.
  // Estas passagens são paráfrases de estudo, não transcrições de uma tradução bíblica licenciada.
  conexoes: [
    { referencia: 'João 1:1–3', texto: 'No princípio já existia o Verbo; ele estava com Deus, era Deus, e todas as coisas vieram a existir por meio dele.', tipo: 'Retomada textual e teológica', explicacao: 'A abertura de João retoma deliberadamente a linguagem do princípio e relaciona o Verbo à criação. É uma retomada cristológica, não a mesma narrativa.' },
    { referencia: 'Salmos 33:6', texto: 'Pela palavra do Senhor foram feitos os céus; pelo sopro de sua boca, seus astros.', tipo: 'Paralelo temático', explicacao: 'O salmo relaciona a criação dos céus à palavra divina. O paralelo é temático; a aula não o identifica como citação de Gênesis 1:1.' },
    { referencia: 'Salmos 90:2', texto: 'Antes das montanhas e da terra existirem, Deus é apresentado como Deus de eternidade a eternidade.', tipo: 'Conexão temática', explicacao: 'A referência, registrada na Aula 7, relaciona a reflexão sobre as origens à eternidade divina. Não constitui uma explicação científica do começo.' }
  ],
  conteudos: {
    textual: [
      { titulo: 'O enunciado e a primeira palavra', texto: 'O versículo apresenta Deus criando os céus e a terra. Bereshit (בְּרֵאשִׁית), normalmente traduzido como “no princípio”, abre o texto hebraico.' },
      { titulo: 'Uma questão de sintaxe', texto: 'A edição consolidada registra um debate: a abertura é uma afirmação independente (“No princípio, Deus criou...”) ou uma oração temporal vinculada ao que segue (“Quando Deus começou a criar...”)? A aula apresenta a questão sem encerrá-la.' },
      { titulo: 'Limite do que o versículo diz', texto: 'A doutrina de criação a partir do nada não deve ser atribuída de maneira simplista ao versículo isolado. É necessário distinguir o texto, sua tradução e formulações teológicas posteriores.' }
    ],
    historico: [
      { titulo: 'Gênesis dentro do Pentateuco', texto: 'Gênesis contém 50 capítulos. Gênesis 1–11 trata das origens do mundo e da humanidade, enquanto Gênesis 12–50 se concentra em Abraão, Sara, Isaque, Rebeca, Jacó, Esaú, José e a família de Israel.' },
      { titulo: 'Temas estruturantes do livro', texto: 'A aula introdutória destaca criação, humanidade, bênção e aliança. O relato da criação dá início a essa trajetória narrativa e teológica.' },
      { titulo: 'Ambiente cultural para o estudo', texto: 'As aulas de fundamentos apresentam o antigo Oriente Próximo como contexto de comparação. O Enuma Elish contém conflitos entre divindades, enquanto Gênesis 1 apresenta um único Deus criando e ordenando o mundo. A comparação não comprova dependência textual por si só.' }
    ],
    conexoes: [
      { titulo: 'João 1:1–3 — retomada cristológica', texto: 'A linguagem do “princípio” reaparece na apresentação do Verbo. A conexão é literária e teológica forte, mas João desenvolve sua própria apresentação de Cristo.' },
      { titulo: 'Salmos 33:6 — palavra criadora', texto: 'A passagem associa os céus à palavra do Senhor. É um paralelo temático com a criação divina em Gênesis.' },
      { titulo: 'Salmos 90:2 — eternidade divina', texto: 'Na Aula 7, a reflexão sobre a eternidade de Deus é registrada como conexão temática com a criação. Consulte também os cartões de referências abaixo.' }
    ],
    interpretacoes: [
      { titulo: 'Abertura independente ou oração temporal?', texto: 'A expressão bereshit suscita uma discussão linguística sobre a relação de Gênesis 1:1 com os versículos seguintes. A edição consolidada registra as duas possibilidades sem fixar uma conclusão definitiva.' },
      { titulo: 'Criação a partir do nada', texto: 'A criação ex nihilo é uma formulação teológica importante, mas o estudo adverte que não se deve extraí-la de modo simplista deste único versículo.' },
      { titulo: 'Leituras da sequência criadora', texto: 'A Aula 7 aponta que questões cronológicas, literárias e conciliatórias reaparecem no relato, especialmente quando a luz é mencionada antes dos luminares. Esses debates não são resolvidos por Gênesis 1:1 isoladamente.' }
    ],
    arqueologia: [
      { titulo: 'O que o estudo histórico pode investigar', texto: 'O PDF propõe comparar relatos bíblicos, documentos antigos e arqueologia, distinguindo evidência independente, hipóteses e interpretações teológicas.' },
      { titulo: 'Criação no antigo Oriente Próximo', texto: 'Na Aula 5, o Enuma Elish é apresentado como um relato com conflitos entre divindades, em contraste com o Deus único que cria e ordena em Gênesis 1. Semelhança de contexto cultural não é demonstração automática de cópia.' },
      { titulo: 'Limites da investigação científica', texto: 'O versículo não fornece uma descrição técnica de processos geológicos ou cosmológicos. A Aula 7 adverte, em relação aos versículos seguintes, contra tratar a linguagem narrativa como explicação científica moderna.' }
    ],
    revisao: [
      { titulo: 'Síntese do versículo', texto: 'Gênesis 1:1 abre o relato da criação apresentando Deus como criador dos céus e da terra. A discussão sobre bereshit e sobre o alcance teológico do enunciado deve permanecer visível.' },
      { titulo: 'Pergunta 1 — composição de Gênesis', texto: 'Por que o livro dedica tantos capítulos a uma família? Relacione a divisão entre Gênesis 1–11 e Gênesis 12–50 aos temas de criação, bênção e aliança.' },
      { titulo: 'Pergunta 2 — conexão literária', texto: 'Qual é a conexão literária entre Gênesis 1 e João 1? Explique o que significa “retomada cristológica” sem confundir as duas narrativas.' },
      { titulo: 'Pergunta 3 — texto e doutrina', texto: 'O que o estudo permite afirmar diretamente sobre Gênesis 1:1? Por que uma doutrina teológica posterior não deve ser simplesmente atribuída ao versículo isolado?' }
    ]
  }
};
