# E-book: Inteligência Artificial para a Psicologia — Guia Prático para a Clínica

E-book interativo **"Inteligência Artificial para a Psicologia: Guia Prático para a Clínica"** — aplicações práticas, ética profissional e limites da Inteligência Artificial na Psicologia Clínica.

🔗 **Versão publicada (online):** https://fabiohmedeiros.github.io/e-book_IA/
📦 **Repositório:** https://github.com/fabiohmedeiros/e-book_IA · branch `main`

**Obra autoral · 1ª edição · Brasília · 2026**
Autoria: Fabio Hernandez de Medeiros (CRP 01/17465) e coautores · ISBN a definir.

> *A Inteligência Artificial é uma ferramenta de apoio à prática psicológica, nunca substitui o psicólogo, o vínculo terapêutico ou o julgamento clínico.*

> Obra produzida com auxílio de Inteligência Artificial (Claude Opus 4.8, da Anthropic), sob revisão humana integral. Uso educacional — não substitui a prática clínica, a supervisão profissional nem a assessoria jurídica/ética formal.

---

## 📖 Sobre o projeto

E-book didático para **psicólogos formados e estudantes** (nível iniciante → intermediário em IA), com rigor acadêmico nas fontes. Equivalente a ~60–80 páginas. Entregue como **um único arquivo HTML** (premium, responsivo, com dark mode, busca, índice lateral e exportação para PDF via impressão do navegador).

### Estrutura dos capítulos
1. **O que é IA e o que não é** — Machine Learning, Deep Learning, LLMs; mitos comuns.
2. **Ética e limites profissionais** — cinco pilares (sigilo, viés, responsabilização, transparência, cuidado autêntico).
3. **O que o CFP e a legislação dizem** — Código de Ética, Resolução CFP 9/2024 (TDICs), LGPD, publicações CFP 2025.
4. **Uso seguro da IA** — protocolos de anonimização e proteção de dados.
5. **Prompts para psicólogos** — 7 prompts prontos para tarefas de apoio (documentação, supervisão, psicoeducação), com botão "copiar".
6. **Ferramentas de IA** — tabela filtrável/ordenável (ChatGPT, Claude, Gemini, NotebookLM, Perplexity, Copilot) com selos de privacidade.
7. **Futuro da Psicologia com IA** — cenários emergentes.
- **Referências** (APA 7).

---

## 👁️ Para revisores

O conteúdo está **redigido e aguardando revisão de cada capítulo** (autor + coautores). Como participar:

1. **Leia o e-book publicado:** https://fabiohmedeiros.github.io/e-book_IA/ (ou abra `docs/index.html` localmente).
2. **A fonte editorial de cada capítulo está em `capitulos/*.md`** (Markdown, mais fácil de revisar/comentar que o HTML).
3. **Marcadores `[A VALIDAR]`** = dado que ainda depende de conferência em fonte oficial (ex.: artigo exato da LGPD, custo/política de dados de uma ferramenta, paginação de um artigo). Ao revisar, **substitua o `[A VALIDAR]` pela informação confirmada e cite a fonte**, ou comente o que falta.
4. **Como enviar correções:** edite o `.md` do capítulo e abra um Pull Request, **ou** registre suas observações (issue / documento à parte / mensagem ao autor). Não é preciso saber programar para revisar — o que importa é o conteúdo nos `capitulos/*.md`.

### Regras de conteúdo inegociáveis (valem para humanos e IA)
- **Não inventar** referências nem DOIs. Usar apenas as 20 referências reais já mapeadas (`capitulos/referencias.md`) + textos normativos oficiais (`fontes/`).
- Toda afirmação normativa deve estar **ancorada em fonte oficial**.
- **Nenhum prompt ou recomendação** que faça diagnóstico, psicoterapia, parecer automático ou manejo de crise sem supervisão humana.
- Dado faltante → manter o marcador **`[A VALIDAR]`** (não preencher com suposição).

---

## 🗂️ Estrutura do repositório

| Caminho | O que é | Versionado? |
|---|---|---|
| `capitulos/` | **Fonte editorial** dos 7 capítulos + `referencias.md` (Markdown). É a fonte da verdade do *texto* para revisão. | ✅ |
| `fontes/` | Textos normativos oficiais de apoio (Código de Ética 2005; Resolução CFP 9/2024 — TDICs) para citação. | ✅ |
| `index.html` | **Página-fonte do build** — contém todo o conteúdo dos capítulos já em HTML (inline). É o que o Vite empacota. | ✅ |
| `src/main.js` | Interatividade: dark mode, drawer mobile, barra de progresso, scroll-spy, botões "copiar", tabela filtrável, busca interna. | ✅ |
| `src/style.css` | Design system (Tailwind v4 + estilos), incluindo regras `@media print`. | ✅ |
| `vite.config.js` | Config do build. `outDir: 'docs'` + `vite-plugin-singlefile` (gera 1 HTML único). | ✅ |
| `docs/index.html` | **Saída do build = o que o GitHub Pages publica.** Gerado por `npm run build`; é commitado. | ✅ |
| `.github/workflows/deploy.yml` | Workflow opcional de build+deploy automático (inativo — ver abaixo). | ⚠️ untracked |
| `_interno/` | Material de trabalho (projeto editorial, briefing, planilha Elicit, progresso). | ❌ local-only (`.gitignore`) |
| `dist/` | Saída antiga de build. | ❌ ignorada |
| `node_modules/` | Dependências. | ❌ ignorada |

> ⚠️ **Atenção a quem edita o conteúdo:** o texto existe em **dois lugares** — `capitulos/*.md` (fonte editorial de revisão) e `index.html` (fonte do build publicado). **Não há geração automática de um para o outro.** Ao fechar uma revisão, atualize o `index.html` (é ele que vira o site) e, idealmente, mantenha o `.md` correspondente em sincronia.

---

## 🛠️ Tecnologias

- **Vite 8** — servidor de desenvolvimento com hot-reload e empacotador de build.
- **Tailwind CSS v4** — design system responsivo, dark mode e animações.
- **vite-plugin-singlefile** — no `build`, unifica HTML + CSS + JS em **um único arquivo HTML independente**.
- **HTML/CSS/JS Vanilla** — sem React/Vue; saída enxuta, leve e portátil.

---

## 💻 Como executar localmente

Pré-requisito: **Node.js 20+**.

```bash
npm install      # instala dependências (1ª vez)
npm run dev      # servidor local em http://localhost:5173 com hot-reload
```

Qualquer alteração em `index.html` / `src/` reflete na hora no navegador.

---

## 📦 Como gerar a versão final (build)

```bash
npm run build
```

Gera `docs/index.html` (definido por `outDir` em `vite.config.js`), com CSS e JS injetados inline. Esse arquivo é autossuficiente: abre em qualquer navegador, vai por e-mail ou é hospedado sem depender de outras pastas.

---

## 🚀 Publicação (GitHub Pages)

O e-book é servido pelo GitHub Pages a partir do branch `main`, pasta **`/docs`**
(Settings → Pages → Source: *Deploy from a branch* → `main` / `/docs`).
URL pública: **https://fabiohmedeiros.github.io/e-book_IA/**

> **A pasta `/docs` não tem rebuild automático.** Sempre que o conteúdo mudar (fechar `[A VALIDAR]`, ajustes de revisão etc.), regenere e publique manualmente:

```bash
npm run build                                       # regenera docs/index.html
git add docs && git commit -m "Atualiza e-book"     # versiona o HTML gerado
git push                                             # Pages republica em ~1 min
```

> **🤖 Nota para a IA (assistente):** a publicação é **manual e por decisão do mantenedor** — **não** ativar o deploy automático. **É a IA quem executa o ciclo de build + commit + push** (os 3 comandos acima) sempre que o conteúdo for alterado. O arquivo `.github/workflows/deploy.yml` existe no disco mas **deve permanecer não commitado** (committá-lo exigiria token com escopo `workflow`); ignore-o.

---

## 🖨️ Geração de PDF

O arquivo principal possui diretivas `@media print`. Para gerar o e-book em PDF:
1. Abra a versão de desenvolvimento ou `docs/index.html` no navegador.
2. Pressione `Ctrl + P` (ou `Cmd + P` no Mac).
3. O design ignora o tema escuro, oculta elementos com a classe `.no-print` e aplica quebras de página automáticas por capítulo, gerando uma versão limpa para PDF/impressão.

---

## ✅ Status atual

- **Etapa 1 (Projeto Editorial):** concluída.
- **Etapa 2 (e-book HTML):** concluída e **publicada** no GitHub Pages.
- **Revisão de conteúdo (autor + coautores):** em andamento, capítulo a capítulo.
- **Pontos `[A VALIDAR]` em aberto** (dependem de fonte externa):
  - **Cap. 3:** citações literais das 3 publicações do CFP 2025 (Nota 03/07/2025 + 2 cartilhas); artigos exatos da LGPD.
  - **Cap. 4:** nomes atuais das opções de privacidade de cada ferramenta.
  - **Cap. 6:** custo e política de dados de cada ferramenta (voláteis — conferir perto da publicação).
  - **Referências:** volume/número/páginas de alguns artigos; URLs/títulos exatos das publicações do CFP 2025.
