// Curadoria dos três primeiros versículos: o PDF possui uma aula sobre 1:1
// e outra sobre o trecho 1:1–3. Não atribuir assuntos do v. 2 ao v. 1.
// As explicações são paráfrases fiéis ou trechos da edição consolidada,
// com indicação explícita de origem e de questões ainda em aberto.
export function estudoGenesisInicial(versiculo, aulas, verse) {
  const aula6=aulas.find(a=>a.numero===6);
  const aula7=aulas.find(a=>a.numero===7);
  const texto=(titulo,conteudo,origem,tipo='texto')=>({titulo,texto:conteudo,origem,tipo});
  const extrair=(aula,titulo)=>aula.secoes.find(s=>s.titulo===titulo);
  const bloco=(aula,titulo)=>{const s=extrair(aula,titulo);return texto(s.titulo,s.texto,'Aula '+String(aula.numero).padStart(2,'0'));};
  const refs=(versiculo===1
    ? [aula6.referencias[1],aula6.referencias[2],aula7.referencias[2]]
    : versiculo===2
      ? [aula7.referencias[3]]
      : [aula7.referencias[4]]
  ).map(r=>({...r,origem:r===aula7.referencias[2]||r===aula7.referencias[0]||r===aula7.referencias[1]||r===aula7.referencias[3]||r===aula7.referencias[4]?'Aula 07':'Aula 06'}));
  const semEvidencia=texto('O que o documento permite afirmar','As Aulas 6–7 não apresentam uma descoberta arqueológica específica que comprove este versículo. O texto é estudado como narrativa antiga; comparações científicas exigem evidências próprias.','Limite das fontes');
  const conexoes=refs.map(r=>texto(r.referencia,r.texto+'\n\nRelação registrada: '+r.conexao,r.origem,'referencia'));
  const encerramento=texto('Para continuar estudando','Consulte o texto bíblico, compare as passagens relacionadas e registre sua compreensão. As perguntas são abertas: não há correção automática de redação.','Orientação do Atlas');
  const comuns={referencias:refs,conexoes,arqueologia:[semEvidencia],aulas:versiculo===1?[aula6,aula7]:[aula7]};
  if(versiculo===1)return {
    ...comuns,
    nota:'Gênesis 1:1 possui uma análise própria na Aula 06. A Aula 07 trata principalmente dos versículos 2 e 3; esses assuntos aparecem nas respectivas páginas.',
    textual:[
      texto('A expressão hebraica bereshit','Bereshit é a palavra de abertura do relato, normalmente traduzida por “no princípio”. A Aula 06 registra que sua construção gramatical é discutida.','Aula 06 · O primeiro versículo')
    ],
    historico:[bloco(aula6,'Estrutura do livro')],
    conexoes:[bloco(aula6,'João e o princípio'),...conexoes],
    interpretacoes:[
      texto('Como entender a frase inicial?','A Aula 06 registra duas possibilidades discutidas: a frase como afirmação independente ou como oração temporal ligada ao relato seguinte. O documento não fecha a questão.','Aula 06 · O primeiro versículo'),
      texto('Criação a partir do nada','A edição consolidada alerta que a doutrina teológica da criação a partir do nada não deve ser atribuída de modo simplista a Gênesis 1:1 isoladamente.','Aula 06 · O primeiro versículo')
    ],
    revisao:[
      texto('Pergunta da aula',aula6.perguntas[1],'Aula 06'),
      texto('Debate em aberto','Que conclusões dependem do próprio versículo, da tradução e de desenvolvimentos teológicos posteriores?','Orientação editorial para revisão'),
      encerramento
    ]
  };
  if(versiculo===2)return {
    ...comuns,
    nota:'Os assuntos sobre a terra e o espírito/vento de Deus foram extraídos das seções específicas da Aula 07 sobre Gênesis 1:2.',
    textual:[
      texto('Tohu va-vohu','A Aula 07 descreve a terra como tohu va-vohu, “sem forma e vazia”, com trevas e águas profundas.','Aula 07 · A terra sem forma e vazia'),
      texto('Ruach Elohim','Ruach Elohim pode ser traduzido como “Espírito de Deus” ou “vento vindo de Deus”.','Aula 07 · Espírito ou vento de Deus')
    ],
    historico:[bloco(aula7,'A terra sem forma e vazia')],
    interpretacoes:[
      texto('Espírito ou vento?','A Aula 07 reconhece as duas possibilidades de tradução. A leitura cristã relaciona o texto ao Espírito Santo, mas o versículo não formula explicitamente a doutrina posterior da Trindade.','Aula 07 · Espírito ou vento de Deus'),
      texto('O que a descrição não pretende ser','A descrição de terra sem forma, trevas e águas profundas não deve ser tratada como uma explicação técnica da geologia terrestre.','Aula 07 · A terra sem forma e vazia')
    ],
    revisao:[
      texto('Pergunta da aula',aula7.perguntas[1],'Aula 07'),
      texto('Para comparar','Qual a diferença entre traduzir ruach como “espírito” e como “vento”? O texto especifica uma única leitura?','Orientação editorial para revisão'),
      encerramento
    ]
  };
  return {
    ...comuns,
    nota:'Os comentários sobre “Haja luz” foram separados da análise da terra e do espírito/vento, para evitar misturar Gênesis 1:2 com 1:3.',
    textual:[
      texto('A primeira ordem criadora descrita','A Aula 07 registra a ordem divina pela existência da luz e a resposta narrativa: a luz apareceu.','Aula 07 · Haja luz')
    ],
    historico:[
      texto('Sequência dentro do relato','No relato de Gênesis 1, a luz aparece antes dos luminares, apresentados somente no quarto dia.','Aula 07 · Haja luz')
    ],
    interpretacoes:[
      texto('Como entender a sequência?','A Aula 07 identifica o tema como assunto de debate entre leituras cronológicas, literárias e conciliatórias, sem impor uma solução única.','Aula 07 · Haja luz')
    ],
    revisao:[
      texto('Pergunta da aula',aula7.perguntas[0],'Aula 07'),
      texto('Para refletir','O que Gênesis 1:3 afirma diretamente, e o que já seria uma explicação interpretativa sobre a luz?','Orientação editorial para revisão'),
      encerramento
    ]
  };
}
