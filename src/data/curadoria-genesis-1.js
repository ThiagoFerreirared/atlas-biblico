// Curadoria fiel das Aulas 06 e 07 — Gênesis 1:1–3.
// Os textos das seções vêm da edição consolidada do PDF, sem paráfrases
// adicionais. Quando uma seção trata de dois temas, divide-se no limite
// de uma frase, preservando integralmente sua redação original.
export function estudoGenesisInicial(versiculo, aulas) {
  const aula6=aulas.find(a=>a.numero===6);
  const aula7=aulas.find(a=>a.numero===7);
  const item=(titulo,texto,origem,tipo='texto')=>({titulo,texto,origem,tipo});
  const sec=(a,titulo)=>a.secoes.find(s=>s.titulo===titulo);
  const transcrever=(a,titulo)=>{const s=sec(a,titulo);if(!s)throw new Error('Tópico ausente na fonte: '+titulo);return item(s.titulo,s.texto,'Aula '+String(a.numero).padStart(2,'0')+' · PDF consolidado');};
  const dividir=(a,titulo,marcador)=>{
    const s=sec(a,titulo);
    if(!s)throw new Error('Tópico ausente: '+titulo);
    const pos=s.texto.indexOf(marcador);
    if(pos<0)throw new Error('Divisão de texto não encontrada: '+titulo);
    return [s.texto.slice(0,pos).trim(),s.texto.slice(pos).trim()];
  };
  const fonte='PDF consolidado · Aulas 06–07';
  const semEvidencias=item('Evidências e limites','As aulas 06–07 não apresentam descobertas arqueológicas específicas que comprovem este versículo. Para aprofundamento, consulte a Aula 05 sobre o antigo Oriente Próximo.','Limite da fonte');
  const revisao=(perguntas,registro)=>[
    ...perguntas.map((p,i)=>item('Pergunta '+(i+1)+' · PDF',p,fonte)),
    item('Registro e questões abertas',registro,fonte)
  ];
  const r6=(indices)=>indices.map(i=>({...aula6.referencias[i],origem:'Aula 06'}));
  const r7=(indices)=>indices.map(i=>({...aula7.referencias[i],origem:'Aula 07'}));
  const conexoes=(refs)=>refs.map(r=>item(r.referencia,r.texto+'\n\nConexão: '+r.conexao,r.origem,'referencia'));
  if(versiculo===1){
    const [textual,interpretacao]=dividir(aula6,'O primeiro versículo','A doutrina teológica de criação a partir do nada');
    const refs=[...r6([1,2]),...r7([2])];
    return {
      nota:'A análise textual e a discussão doutrinária foram separadas mantendo as frases da Aula 06. A referência a João está exclusivamente em Conexões bíblicas.',
      textual:[item('O primeiro versículo · texto e hebraico',textual,'Aula 06 · O primeiro versículo')],
      historico:[transcrever(aula6,'Estrutura do livro')],
      conexoes:[transcrever(aula6,'João e o princípio'),...conexoes(refs)],
      interpretacoes:[item('Criação a partir do nada · limite interpretativo',interpretacao,'Aula 06 · O primeiro versículo')],
      arqueologia:[semEvidencias],
      revisao:revisao(aula6.perguntas,aula6.registro),
      referencias:refs
    };
  }
  if(versiculo===2){
    const [terra,limiteGeologico]=dividir(aula7,'A terra sem forma e vazia','A expressão não deve ser confundida');
    const [ruach,leituraCrista]=dividir(aula7,'Espírito ou vento de Deus','A leitura cristã');
    const refs=r7([3]);
    return {
      nota:'Os temas tohu va-vohu e ruach Elohim pertencem a Gênesis 1:2, conforme as seções da Aula 07.',
      textual:[
        item('A terra sem forma e vazia',terra,'Aula 07 · A terra sem forma e vazia'),
        item('Espírito ou vento de Deus',ruach,'Aula 07 · Espírito ou vento de Deus')
      ],
      historico:[item('Contexto da narrativa','A análise deste versículo se concentra na condição inicial da terra e na expressão ruach Elohim; não há comentário histórico independente na Aula 07.','Organização da fonte')],
      conexoes:conexoes(refs),
      interpretacoes:[item('Leitura cristã e limites do texto',leituraCrista,'Aula 07 · Espírito ou vento de Deus')],
      arqueologia:[item('Limites de comparação científica',limiteGeologico,'Aula 07 · A terra sem forma e vazia')],
      revisao:revisao([aula7.perguntas[1]],aula7.registro),
      referencias:refs
    };
  }
  if(versiculo===3){
    const [hajaLuz,debate]=dividir(aula7,'Haja luz','Os luminares aparecem');
    const refs=r7([4]);
    return {
      nota:'Os tópicos de Gênesis 1:3 foram extraídos da seção “Haja luz” da Aula 07, sem misturar as explicações sobre Gênesis 1:2.',
      textual:[item('Haja luz',hajaLuz,'Aula 07 · Haja luz')],
      historico:[item('Contexto dentro do relato','A Aula 07 não apresenta um estudo histórico isolado da ordem “Haja luz”. O contexto da sequência é discutido no módulo Interpretações.','Organização da fonte')],
      conexoes:conexoes(refs),
      interpretacoes:[item('Luz e luminares',debate,'Aula 07 · Haja luz')],
      arqueologia:[semEvidencias],
      revisao:revisao([aula7.perguntas[0]],aula7.registro),
      referencias:refs
    };
  }
  return null;
}
