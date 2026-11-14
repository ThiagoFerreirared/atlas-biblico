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
