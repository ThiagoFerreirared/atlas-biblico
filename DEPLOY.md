# Atlas Bíblico — implantação

Primeira versão funcional em **Astro (saída estática)**. O repositório contém a biblioteca de 66 livros, a navegação de Gênesis e demonstrações de estudos em Gênesis 1:1–3.

## Desenvolvimento

Requisitos: Node.js LTS atual e npm.

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview
```

## Vercel

1. Entre em https://vercel.com/new e escolha **Import Git Repository**.
2. Selecione `ThiagoFerreirared/atlas-biblico`.
3. Framework: **Astro** (detecção automática).
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Clique em Deploy.

Alterações na branch `main` gerarão novas publicações depois que o projeto Vercel estiver conectado.

## Conteúdo

- `src/data/biblia.js`: livros canônicos da organização protestante, amostra de Gênesis, módulos, textos e conexões.
- `src/pages/`: páginas e navegação.
- `src/layouts/Base.astro`: design compartilhado.

**Atenção:** todo comentário enciclopédico apresentado nesta fase é material de demonstração e exige conferência. Antes de publicar textos completos de traduções bíblicas, verificar direitos de uso e condições de licença.

## Progresso

Os checks dos módulos são armazenados em `localStorage` no dispositivo do visitante. Sem login, o progresso não sincroniza automaticamente entre aparelhos e pode ser apagado quando os dados do navegador são limpos.

## Situação dos testes

Os arquivos foram enviados pelo conector do GitHub. O build local ainda precisa ser executado em um ambiente com acesso à internet e Node.js; não afirmar que a implantação está validada antes disso.
