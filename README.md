# E-book: IA para Psicólogos — Guia Prático para a Clínica

E-book interativo **"IA para Psicólogos: Guia Prático para a Clínica"** — aplicações práticas, ética profissional e limites da Inteligência Artificial na Psicologia Clínica.

**CEUB — Centro Universitário de Brasília · Curso de Psicologia · Projeto Integrador III**
Autores: Alunos da disciplina Projeto Integrador III · Orientação: Prof. Dr. Fabio Hernandez de Medeiros (CRP 01/17465) · 2026.

> *A Inteligência Artificial é uma ferramenta de apoio à prática psicológica, nunca substitui o psicólogo, o vínculo terapêutico ou o julgamento clínico.*

> Material desenvolvido com auxílio de Inteligência Artificial, sob supervisão humana integral. Uso educacional — não substitui a prática clínica, a supervisão profissional nem a assessoria jurídica/ética formal.

## Conteúdo

- **`capitulos/`** — miolo dos 7 capítulos + referências (APA 7) em Markdown. É a **fonte da verdade** do conteúdo, redigida e revisada antes da geração do HTML.
- **`fontes/`** — textos oficiais de apoio (Código de Ética do Psicólogo 2005; Resolução CFP 9/2024 — TDICs).
- **`index.html` / `src/` / `vite.config.js`** — infraestrutura de build (placeholder até a geração do HTML final).

### Estrutura dos capítulos
1. O que é IA e o que não é · 2. Ética e limites profissionais · 3. O que o CFP e a legislação dizem · 4. Uso seguro da IA · 5. Prompts para psicólogos · 6. Ferramentas de IA · 7. Futuro da Psicologia com IA · + Referências.

Visão geral original do repositório: o material é projetado para visualização "SaaS Premium", com interatividade, botões de cópia de prompts, leitura agradável e conversão fácil para PDF (impressão).

## Tecnologias Utilizadas

A infraestrutura foi montada priorizando produtividade no desenvolvimento e portabilidade no formato final:
- **Vite:** Para o servidor de desenvolvimento local rápido (com hot-reload).
- **Tailwind CSS v4:** Para o design do sistema, facilitando a criação de layouts responsivos, dark mode, e animações sem poluir o CSS.
- **vite-plugin-singlefile:** Garante que no momento da publicação (`build`), o HTML, CSS e JavaScript sejam unificados em um **único arquivo HTML independente**.
- **HTML/CSS/JS (Vanilla):** Não são utilizados frameworks pesados como React ou Vue, garantindo que a saída seja enxuta, leve e atenda estritamente aos requisitos do projeto.

## Como Executar Localmente

Siga os passos abaixo para iniciar o ambiente de desenvolvimento:

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Inicie o servidor local:**
   ```bash
   npm run dev
   ```
   *O Vite criará um servidor local (geralmente em `http://localhost:5173`) e abrirá automaticamente no navegador. Qualquer modificação no código refletirá imediatamente na tela.*

## Como Gerar a Versão Final (Build)

Para gerar a versão de distribuição do E-book em um arquivo HTML único:

```bash
npm run build
```

Após executar este comando, acesse a pasta `dist/`. O arquivo `index.html` gerado dentro dela já conterá todo o código (CSS e JS injetados inline) e poderá ser aberto em qualquer navegador, enviado por e-mail ou hospedado facilmente, sem depender de nenhuma outra pasta.

## Geração de PDF

O arquivo principal possui diretivas `@media print`. Para gerar o E-book em PDF:
1. Abra a versão de desenvolvimento ou a versão final (`dist/index.html`) no navegador.
2. Pressione `Ctrl + P` (ou `Cmd + P` no Mac) para abrir a janela de impressão.
3. O design irá ignorar temas escuros, esconder elementos de navegação que contêm a classe `.no-print` e preparar quebras de página automáticas, garantindo uma versão limpa para PDF e impressão física.
