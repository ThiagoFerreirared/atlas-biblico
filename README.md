# Atlas Bíblico

Site público de estudo bíblico enciclopédico — **https://atlas-biblico-beryl.vercel.app/**.

## Estado do acervo (14 de novembro de 2026)

A edição consolidada do PDF **Atlas Bíblico — Aulas 1 a 24** está importada como conteúdo estruturado do site, sem necessidade de consultar o PDF para ler as aulas.

- 24 aulas (5 de fundamentos e 19 sobre Gênesis);
- 77 blocos temáticos, 124 ocorrências de referências cruzadas e 48 perguntas abertas;
- 116 referências bíblicas distintas, com os textos completos da Bíblia Livre (além das paráfrases do PDF);
- 31 temas de debates registrados;
- texto bíblico integral de Gênesis 1 (31 versículos), 2 (25) e 3 (24) — **80 versículos**;
- **69 versículos com cobertura inicial dos estudos:** Gênesis 1:1–31, 2:1–25 e 3:1–13;
- seis módulos de explicações em cada um desses 69 versículos (414 módulos possíveis), contextualizados pelos trechos originais das aulas; o sexto módulo é **Síntese do estudo**;
- **Gênesis 1:1–31, Gênesis 2:1–25 e Gênesis 3:1–13 possuem aprofundamento editorial individual** com explicações passo a passo, termos hebraicos quando relevantes, interpretações comparadas, limites das evidências e sínteses. Os 24 estudos originais seguem preservados no acervo sem provas obrigatórias;
- versículos 3:14–24 disponíveis **para leitura**, sem atribuição indevida de comentário que o PDF não possui. Gênesis 4–50 permanece em preparação.

### Estado do repositório

A branch `main` contém as 24 aulas, 69 estudos aprofundados e os roteiros dos capítulos 1, 2 e 3. GitHub Actions valida o conteúdo e compila o site. A publicação externa é administrada exclusivamente pelo mantenedor, fora deste fluxo de edição.

### Precisão da fonte

O PDF consolidado não é a transcrição literal do chat de estudo. Em várias aulas, uma análise abrange **mais de um versículo**. Gênesis 2 e 3 continuam respeitando os tópicos que o PDF contém. Em **Gênesis 1–3 até 3:13**, o Atlas inclui uma ampliação editorial dos temas presentes nas Aulas 06–24, sem alegar que ela seja transcrição literal da conversa anterior. Ela aprofunda a lógica, limites e exemplos já presentes na fonte. A escrita hebraica usada nesses estudos foi confrontada com o [texto hebraico de Gênesis 1 no Mechon-Mamre](https://mechon-mamre.org/p/pt/pt0101.htm). Se uma informação não puder ser sustentada por essas fontes, não deve aparecer como fato verificado.

**Discrepância identificada no PDF:** o apêndice afirma que o estudo terminou em Gênesis 3:13, mas também conta 12 versículos do capítulo 3 e 68 versículos ao todo. A contagem inclusiva de 3:1–13 é 13, e 31 + 25 + 13 = **69**. O site adota os limites de passagens descritos nas aulas, sem ocultar a divergência.

Não são atribuídas automaticamente pontuações de exercícios anteriores: apenas a Aula 1 tinha resultado histórico registrado 4/4. Os demais resultados não estavam integralmente disponíveis.

## Navegação

- `/` — Biblioteca dos 66 livros e filtros
- `/estudos/` — As 24 aulas consolidadas
- `/estudos/1/` a `/estudos/24/` — Texto integral consolidado da aula, referências com texto bíblico e perguntas
- `/estudos/debates/` — Índice de debates e acompanhamento documentado
- `/livros/genesis/` — Gênesis e capítulos com estudos disponíveis
- `/livros/genesis/1/` a `/livros/genesis/3/` — Leitura contínua ou por versículos, prévia e aulas ligadas
- `/livros/genesis/{capitulo}/{versiculo}/` — Versículo e seis módulos, conexões e retorno ao capítulo
- `/progresso/` — Indicadores de leitura, estudo e revisão espaçada
- `/busca/` — Pesquisa estática em livros, aulas, conexões e Gênesis 1–3

## Funcionalidade

Sem login ou banco de dados no MVP. O progresso individual (leitura, módulos abertos/concluídos e revisão em 1/7/30 dias) é registrado no `localStorage` do navegador. Isso **não sincroniza entre aparelhos** e será perdido se os dados locais forem apagados.

**Decisão editorial:** a experiência principal do Atlas não exibe questões, provas, simulados ou notas. Os seis módulos apresentam explicações e uma síntese final. Os questionários originais permanecem guardados no arquivo estruturado das aulas, sem aparecer na navegação ou interromper a leitura. A fonte integral de cada aula continua disponível em um link discreto, separado dos módulos.

## Fonte e licenciamento

**Estudos:** material consolidado fornecido pelo autor do Atlas, datado de 14/11/2026. Estruturado em `src/data/aulas.js` e associado a trechos em `src/data/cobertura.js`.

**Texto bíblico:** Bíblia Livre (BLIVRE), © 2018 Diego Santos, Mario Sérgio e Marco Teles. Licença [Creative Commons Attribution 3.0 Brasil](https://creativecommons.org/licenses/by/3.0/br/). Fonte original: [Bíblia Livre](https://github.com/blivre/BibliaLivre); distribuição consultada: [biblia.publica](https://github.com/Projeto-Euaggelion/biblia.publica). O texto publicado é o da versão 2018; paráfrases do PDF são indicadas separadamente.

## Desenvolvimento e publicação

Astro 5, exportação estática e conteúdo em JS versionado, sem CMS.

```bash
npm install
npm run dev
npm run build
```

O GitHub Actions valida a curadoria dos 69 versículos, os registros das 24 aulas, as análises aprofundadas, os roteiros de Gênesis 1–3, os 80 versículos de leitura, as 116 passagens cruzadas e a compilação completa. Os testes do repositório não substituem a verificação visual no computador. **Publicação e hospedagem ficam por conta do mantenedor; este projeto não executa nenhuma operação nelas.**

## Próximos estudos

Aula 25 — **Gênesis 3:14–15**. Os textos de leitura de Gênesis 3:14–24 já estão disponíveis, mas os comentários desse trecho somente serão criados a partir da nova aula real.

Esta versão foi concebida para que novas aulas possam ser adicionadas ao repositório sem recriar manualmente uma página para cada versículo.
