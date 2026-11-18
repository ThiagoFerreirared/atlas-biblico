# Auditoria de fidelidade do Atlas Bíblico

**Fonte confrontada:** `Atlas_Biblico_Aulas_1_a_24.pdf`, edição consolidada de 14/11/2026, **42 páginas**.

**Escopo:** comparação entre o conteúdo escrito na fonte e `src/data/aulas.js`, seguida da verificação da curadoria `src/data/mapa-editorial.js`, dos estudos por versículo e da apresentação nos módulos. Esta auditoria **não** declara identidade palavra por palavra com todo o histórico da conversa de estudo: o próprio documento de origem se apresenta como edição consolidada, não transcrição integral do chat.

## 1. Resultado da comparação textual PDF × dados do GitHub

Comparação feita em todas as 42 páginas com normalização de quebras de linha, espaços, pontuação e acentos, sem alterar o conteúdo editorial. Os textos normalizados foram comparados **integralmente**, não apenas pelo título ou palavras-chave.

| Elemento da fonte | Comparados | Preservados |
| --- | ---: | ---: |
| Aulas | 24 | 24 |
| Explicações de tópicos (`secoes[].texto`) | 77 | 77 |
| Paráfrases de referências (`referencias[].texto`) | 124 | 124 |
| Perguntas originais (`perguntas[]`) | 48 | 48 |
| Registros e temas em aberto (`registro`) | 24 | 24 |
| **Total de campos textuais** | **273** | **273** |
| Títulos de aulas e tópicos, rótulos e explicações das conexões | 349 | 349 |
| Códigos de debate DB-003 a DB-033 | 31 | 31 |

**Resultado:** nenhum campo textual do acervo estruturado apresentou divergência na comparação normalizada com as 42 páginas. As 124 descrições `conexao` também foram encontradas na fonte.

Os dados comparados ficam preservados integralmente em `src/data/aulas.js`. O teste `scripts/validar-fidelidade-pdf.mjs` mantém um identificador de integridade do instantâneo auditado para sinalizar alterações futuras, além de testar a ligação dos assuntos aos versículos.

## 2. Como o leitor encontra o conteúdo

- **Aulas 01–05:** os fundamentos ficam disponíveis na coleção `/estudos/`, com os tópicos completos de cada aula.
- **Aulas 06–24:** os tópicos originais continuam disponíveis em `/estudos/6/` até `/estudos/24/`. As notas relacionadas ao versículo também aparecem dentro dos módulos, em *Ver também as notas da aula*. Os títulos da própria aula e o contexto completo são consultáveis pelo acervo.
- **Versículos com aprofundamento:** Gênesis 1:1–31, 2:1–25 e 3:1–13, totalizando **69**. Os seis módulos apresentam explicações editoriais, leituras comparadas, conexões e sínteses; essas ampliações não são cópias literais dos parágrafos do documento.
- **Conexões:** as 124 ocorrências e suas descrições permanecem no acervo. As referências aos textos centrais da própria aula são apresentadas como contexto da lição; as demais conexões foram atribuídas editorialmente a versículos relevantes. Há **116 referências distintas** acessíveis por páginas de passagem.
- **Debates:** os 31 assuntos DB estão no caderno `/estudos/debates/`.
- **Perguntas de revisão:** as 48 perguntas foram preservadas **nos dados de origem**, mas não são exibidas como questionários, conforme decisão do produto de retirar provas/questões obrigatórias.
- **Gênesis 3:14–24:** o texto bíblico está disponível, mas ainda **não** tem estudo aprofundado proveniente das aulas 01–24.

## 3. O que significa 100% — e o que não significa

**Validado:** 100% dos 273 campos textuais do conteúdo das aulas foram preservados em `aulas.js`; os títulos, conexões e códigos de debate também correspondem à fonte. Testes automáticos verificam o mapeamento editorial dos tópicos, a existência das páginas dos versículos e as fontes preservadas.

**Não validado como identidade literal:** o texto dos 69 aprofundamentos é uma elaboração adicional estruturada a partir dos assuntos do documento. Ele não pode ser rotulado como transcrição fiel, palavra por palavra, das aulas originalmente apresentadas no chat. O PDF declara que resume aquele histórico. O conteúdo foi pensado para aprofundar a leitura, mas sua interpretação e suas escolhas didáticas devem receber revisão editorial contínua.

**Diferenças intencionais:** a versão do site utiliza Bíblia Livre (BLIVRE), em vez de reproduzir indiscriminadamente as paráfrases da fonte como se fossem versículos literais; as perguntas da fonte não aparecem como exames; o progresso é registrado individualmente no navegador.

**Limites dos testes:** eles comprovam integridade estrutural e existência dos campos/páginas; não equivalem a validação acadêmica de todas as interpretações teológicas, traduções hebraicas ou comparações arqueológicas nem substituem a revisão visual no computador.

## 4. Segurança editorial para futuras alterações

A ação do GitHub executa `scripts/validar-fidelidade-pdf.mjs`, que confere:

1. Integridade do instantâneo textual das 24 aulas e 31 debates.
2. Existência dos 77 tópicos, 124 textos de referências/conexões, 48 perguntas e 24 registros.
3. Todos os tópicos das Aulas 08–24 atribuídos a ao menos um versículo pertinente, preservados textualmente nas notas do módulo.
4. Todas as referências **não centrais** das Aulas 08–24 atribuídas ao módulo Conexões de ao menos um versículo pertinente.
5. A presença da curadoria específica de Gênesis 1:1–3.
6. A manutenção do caderno dos 31 debates e da cobertura de 69 versículos.

Essa auditoria é parte do **código do GitHub**; a hospedagem e a publicação externa não são acionadas.

## 5. Ampliação posterior sem alteração do instantâneo auditado

A Aula 25 (Gênesis 3:14–15) foi adicionada em arquivos separados. O hash e os 273 campos do acervo de 24 aulas originais em `src/data/aulas.js` permanecem intactos. O teste de auditoria continua verificando somente os 69 versículos e os 31 debates da fonte histórica, enquanto a curadoria geral passa a conferir 71 versículos e o caderno expandido reúne 37 debates. A Aula 25 utiliza traduções de estudo identificadas; os 116 textos BLIVRE anteriores continuam priorizados em referências repetidas. A ampliação não é uma nova auditoria do PDF original. GitHub Actions executa os validadores e o build; não publica na Vercel.

## 6. Continuidade com a Aula 26 (16/11/2026)

A Aula 26 foi acrescentada ao acervo suplementar, sem modificar os 24 registros históricos de `src/data/aulas.js`. A auditoria de fidelidade do PDF mantém seu escopo original de 24 aulas, 69 versículos e 31 debates. As verificações editoriais gerais passam a cobrir 26 aulas e 75 versículos em seis módulos. O caderno adicional passa de seis a doze temas, totalizando 43 debates sem avaliações obrigatórias. Não é reauditoria retroativa do PDF original.

## 7. Encerramento de Gênesis 3 com Aula 27 (18/11/2026)

Aula 27 (Gênesis 3:20–24) adicionada à extensão editorial das Aulas 25–26. O instantâneo auditado das Aulas 1–24 não foi modificado; a auditoria das 42 páginas continua limitada ao acervo histórico. A curadoria geral cobre agora 27 aulas, 80 versículos de Gênesis 1–3, 480 módulos e 50 questões abertas. Gênesis 3 está concluído quanto à cobertura inicial, não quanto à resolução de todos os debates. As traduções de estudo adicionais são rotuladas e a Vercel permanece sob controle do mantenedor.
