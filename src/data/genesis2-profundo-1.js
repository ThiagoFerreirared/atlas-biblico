// Estudos desenvolvidos a partir dos temas documentados nas aulas 16–18.
// Explicações editoriais: não representam transcrição literal da conversa anterior.
// Termos hebraicos relevantes conferidos no texto de Gênesis 2.
const make=(tema,passos,leituras,limites,sintese,termos=[],historico=[],quadro=null)=>({
 tema,passos:passos.map((p,i)=>['Etapa '+(i+1),p]),
 leituras:leituras.map(p=>[p[0],p[1],p[2]]),limites,sintese,termos,historico,quadro
});
export default {
1:make('O término dos céus, da terra e de seus elementos',[
'A abertura do capítulo 2 encerra a sequência dos seis dias, antes de narrar a cessação da obra. Leia este versículo como continuação de Gênesis 1, não como início de outro evento.',
'A expressão sobre tudo que compõe os céus e a terra apresenta o trabalho criador como um conjunto completo. Isso prepara a importância atribuída ao sétimo dia.'
],[['Conclusão narrativa','A criação descrita chegou ao seu encerramento dentro da sequência.','Não autoriza deduzir a data do surgimento do cosmos.'],['Leitura literária','A mudança de capítulo é posterior à composição dos textos; o enredo continua a cena anterior.','A numeração de capítulos não define fronteiras teológicas rígidas.']],
['A expressão “concluído” não oferece cronologia científica nem descreve a duração física da criação.'],
['O versículo resume a conclusão da obra descrita em Gênesis 1.','O sétimo dia se torna o foco da cena seguinte.'],[],['A Aula 16 estuda Gênesis 2:1–3 como unidade sobre conclusão, cessação e bênção do sétimo dia.']),
2:make('Deus cessa a obra no sétimo dia',[
'O narrador relaciona o sétimo dia ao fim da atividade criadora descrita. O destaque não é a exaustão de Deus, mas o cessar de uma tarefa considerada completa.',
'A distinção entre trabalho e descanso funciona como tema que será retomado em textos posteriores sobre o sábado; essas aplicações não são idênticas ao enunciado inicial.'
],[['Cessar, não esgotar-se','Shavat pode transmitir a ideia de cessação de uma atividade.','A palavra não obriga concluir que Deus estivesse fisicamente cansado.'],['Descanso como padrão religioso','Outros textos relacionam o sétimo dia ao descanso humano.','Não se deve inserir retroativamente todas as regras posteriores neste versículo.']],
['A formulação não resolve por si só debates modernos sobre sábado e domingo.'],
['O sétimo dia marca cessação de trabalho criador.','Cessação não é o mesmo que fadiga.'],[['שָׁבַת','shavat','cessar uma atividade; relacionado ao tema do descanso']],['A Aula 16 compara o sétimo dia com Isaías 40:28 e João 5:17, distinguindo fadiga de continuação da atuação divina.']),
3:make('A bênção e a santificação do sétimo dia',[
'O relato atribui ao sétimo dia uma característica que não é destacada da mesma forma nos anteriores: ele é abençoado e santificado.',
'A fórmula “tarde e manhã” não reaparece de forma explícita para o sétimo dia. Essa ausência tem gerado leituras distintas, mas não constitui por si só uma interpretação obrigatória da duração desse dia.'
],[['Sétimo dia separado','Santificar marca a distinção especial do dia no relato.','Não fornece uma regulamentação completa de culto.'],['Interpretações de duração','A omissão de tarde e manhã é considerada significativa por alguns leitores.','O texto não explica diretamente o motivo da omissão.'],['Sábado e domingo','Tradições cristãs diferem sobre a relação com o primeiro dia da semana.','A Aula 16 não identifica mandamento explícito de troca do sábado pelo domingo.']],
['Este versículo não determina sozinho todas as práticas cristãs contemporâneas sobre dias de culto.'],
['O sétimo dia recebe bênção e santificação.','A discussão sobre sua observância exige comparar outras passagens.'],[],['A Aula 16 registra a fundamentação do sábado em Êxodo e Deuteronômio, debates de Jesus sobre o sábado e a importância do primeiro dia nos relatos da ressurreição.']),
4:make('Toledot: uma nova seção do relato',[
'O versículo introduz uma mudança de foco. Depois da sequência ampla da criação, os versículos seguintes tratam do solo, do homem e do jardim.',
'A expressão toledot pode marcar origens ou gerações. Ao mesmo tempo, o uso do nome Senhor Deus destaca uma mudança de linguagem em relação ao predomínio de Elohim no capítulo anterior.'
],[['Relatos complementares','Uma leitura entende o capítulo 2 como aproximação de temas apresentados de modo abrangente no capítulo 1.','Não apaga dificuldades de ordem e estilo entre os capítulos.'],['Abordagem histórico-literária','Diferenças de vocabulário e perspectiva são estudadas como possíveis sinais de tradições ou processos de composição.','Uma diferença de nome divino não prova, isoladamente, uma hipótese completa de autoria.']],
['O versículo não fornece uma explicação explícita de todos os estágios de composição literária do livro.'],
['Toledot marca uma abertura de seção.','As relações entre Gênesis 1 e 2 devem ser comparadas sem pressupor a conclusão.'],[['תּוֹלְדוֹת','toledot','origens ou gerações; termo organizador do relato']],['A Aula 17 compara leituras complementares e histórico-literárias, reconhecendo que a ligação entre as narrativas merece investigação.']),
5:make('O solo antes do cultivo',[
'A narrativa observa que determinadas plantas do campo ainda não apareciam, situando a cena antes de chuva e de alguém que cultivasse o solo.',
'A ausência mencionada é específica ao contexto narrativo. Não é necessário concluir que nenhuma planta existia em qualquer lugar, sobretudo ao comparar com Gênesis 1.'
],[['Descrição de condições agrícolas','A falta de chuva e de cultivador é apresentada como parte do cenário.','Não equivale a uma tese sobre toda a vegetação da Terra.'],['Comparação com o capítulo 1','O leitor pode perguntar como a vegetação já mencionada se relaciona a essas plantas do campo.','A comparação exige atenção às categorias e ao foco distinto de cada trecho.']],
['O texto não apresenta uma teoria científica das primeiras culturas agrícolas.'],
['O cenário destaca condições do solo e ausência de cultivador.','A expressão plantas do campo requer leitura contextual.'],[],['A Aula 17 trata esse cenário como preparação para a formação do homem e seu trabalho no jardim.']),
6:make('A água que umedece o solo',[
'O relato descreve água surgindo ou subindo para irrigar a terra. O termo traduzido em português é discutido por suas possibilidades de sentido.',
'Entre as leituras registradas estão névoa, vapor e outra forma de água que irriga. A escolha interfere na imagem que o leitor constrói, mas não altera o ponto narrativo de haver água disponível para o solo.'
],[['Névoa ou vapor','O termo é compreendido como umidade que sobe ou se apresenta no ambiente.','Não identifica por si só um processo meteorológico preciso.'],['Forma de irrigação','A ênfase está em uma fonte que umedece a terra.','Não é descrição técnica de um sistema hídrico comprovado.']],
['Não se pode usar o versículo para reconstituir com certeza as condições climáticas de uma época específica.'],
['O solo é descrito como irrigado.','A forma exata da água permanece questão de tradução.'],[],['A Aula 17 documenta alternativas de tradução para a fonte de água em Gênesis 2:6.']),
7:make('Pó, fôlego e ser vivente',[
'O ser humano é formado do pó do solo. A proximidade sonora entre adam, humano, e adamah, solo, reforça a ligação do homem com a terra.',
'Deus comunica fôlego de vida ao homem, que passa a ser chamado nefesh chayyah, ser vivente. A mesma expressão aparece para animais em Gênesis 1.',
'A leitura da formação humana pode ser aproximada da ressurreição em 1 Coríntios 15, mas essa passagem paulina é desenvolvimento posterior, não definição literal de cada palavra hebraica de Gênesis 2:7.'
],[['Abordagem holística','O ser humano é estudado como unidade vivente.','O versículo não resolve toda a antropologia bíblica.'],['Visões dicotômicas ou tricotômicas','Tradições distinguem corpo, alma e espírito de maneiras diferentes.','As categorias sistemáticas não devem ser apresentadas como tradução direta de nefesh.']],
['Compartilhar nefesh chayyah com animais não resolve automaticamente os debates sobre alma imortal ou natureza espiritual animal.'],
['Adam e adamah vinculam homem e solo.','Nefesh chayyah significa ser vivente e também aparece para animais.','Debates sobre alma, corpo e espírito exigem outras passagens.'],[['אָדָם','adam','humano, homem'],['אֲדָמָה','adamah','solo, terra'],['נֶפֶשׁ חַיָּה','nefesh chayyah','ser vivente']],['A Aula 17 registra comparações com Eclesiastes 3 e 12 e 1 Coríntios 15, sem declarar resolvido o debate sobre imortalidade.']),
8:make('O jardim plantado no Éden',[
'Gênesis descreve Deus plantando um jardim na região do Éden e colocando ali o homem. A redação permite distinguir o jardim da região em que está situado.',
'A expressão geográfica não determina, por si só, coordenadas no mapa atual. A localização será discutida junto aos rios descritos nos versículos seguintes.'
],[['Éden como região e jardim como espaço','A expressão sugere uma área maior contendo um jardim.','Não garante limites geográficos reconstruíveis.'],['Leitura literária','O jardim funciona como cenário privilegiado da relação entre Deus e a humanidade.','Não significa que cada elemento geográfico seja necessariamente alegoria.']],
['Não há localização arqueológica comprovada do jardim na edição estudada.'],
['O jardim é apresentado dentro do Éden.','A localização permanece hipótese, não fato demonstrado.'],[],['A Aula 18 compara hipóteses de localização e registra explicitamente a incerteza sobre a geografia do Éden.']),
9:make('As árvores e o conhecimento do bem e do mal',[
'O texto apresenta árvores agradáveis à vista e úteis para alimentação, destacando duas árvores por seus nomes: vida e conhecimento do bem e do mal.',
'O fruto proibido não é identificado como maçã. Essa identificação popular não pertence à descrição do versículo.'
],[['Árvores no cenário narrativo','O texto destaca alimento e árvores de função especial no enredo.','Não informa a espécie botânica do fruto proibido.'],['Conhecimento do bem e do mal','A expressão abre um debate que será retomado quando Deus estabelece uma proibição.','O versículo isolado não define integralmente a natureza desse conhecimento.']],
['A identificação botânica da árvore ou do fruto não é comprovada no texto.'],
['Duas árvores recebem destaque narrativo.','O texto não chama o fruto de maçã.'],[],['A Aula 18 relaciona a árvore da vida a Gênesis 3:22 e Apocalipse 22, distinguindo narrativas diferentes.']),
10:make('O rio que sai do Éden',[
'A água é apresentada como um rio vindo do Éden para irrigar o jardim. Depois, esse curso se divide em quatro braços.',
'O número e a direção dos rios iniciam uma descrição geográfica cuja reconstrução atual permanece debatida.'
],[['Leitura geográfica','Os nomes de rios sugerem referências a lugares conhecidos ou preservados pela tradição.','Isso não fornece automaticamente a posição exata do jardim.'],['Leitura simbólica ou literária','O rio pode ser estudado como imagem de vida e provisão.','A dimensão simbólica não prova que todos os nomes geográficos sejam inventados.']],
['Não basta comparar um curso hídrico moderno para localizar com certeza o Éden.'],
['O rio irriga o jardim e se divide em quatro.','A geografia completa continua sem identificação comprovada.'],[],['A Aula 18 trata hipóteses do sul da Mesopotâmia, das nascentes e de geografia literária.']),
11:make('Pisom e a região de Havilá',[
'O primeiro dos rios nomeados é Pisom, associado à região de Havilá. A descrição dá ao leitor um referencial regional, mas não permite identificar com segurança o rio atualmente.',
'A tentativa de localizar Pisom precisa ser comparada com a lista completa dos quatro rios; um nome isolado não fornece prova suficiente.'
],[['Hipótese geográfica','Havilá é tratada como possível referência a uma região.','A identificação com uma localização moderna não é consensual.']],
['O PDF não apresenta descoberta arqueológica que identifique Pisom e Havilá de modo definitivo.'],
['Pisom é nomeado como primeiro rio.','A região e seu curso não foram identificados com certeza.'],[],['A Aula 18 considera Pisom e Giom incertos, mesmo ao reconhecer Tigre e Eufrates.']),
12:make('Ouro, bdélio e ônix',[
'A descrição associa Havilá a ouro e outros materiais. Esses elementos adicionam características à região dentro da narrativa.',
'A presença de minerais não funciona como identificação única de um território, porque recursos semelhantes podem ocorrer em diferentes locais e épocas.'
],[['Indicação descritiva','Os materiais ajudam a caracterizar a região mencionada.','Não fornecem coordenadas de um local arqueológico confirmado.']],
['A identificação dos minerais e de seu lugar de origem não comprova, por si só, a localização do Éden.'],
['A narrativa caracteriza uma região com minerais.','Recursos minerais não constituem prova geográfica exclusiva.'],[],['A Aula 18 registra esses materiais como parte da descrição, sem inferir localização comprovada.']),
13:make('Giom e a região de Cuxe',[
'O segundo rio é chamado Giom e aparece relacionado a Cuxe. A descrição amplia o problema de reconstrução geográfica apresentado nos versículos anteriores.',
'A identificação moderna de Giom permanece incerta. O texto deve ser lido com cautela antes de encaixar o nome em mapas contemporâneos.'
],[['Leitura geográfica','Giom é tratado como um dos quatro rios nomeados.','O curso concreto do rio não está estabelecido.'],['Interpretação de geografia literária','A descrição pode ser estudada dentro da função narrativa do Éden.','Não permite decidir, sozinha, que todos os rios sejam simbólicos.']],
['Não há comprovação arqueológica de que um rio moderno seja o Giom descrito.'],
['Giom figura como segundo rio.','A identificação permanece aberta.'],[],['A Aula 18 compara diferentes propostas geográficas sem validar qualquer uma como localização definitiva.'])
};
