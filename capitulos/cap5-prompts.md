# Capítulo 5 — Prompts para psicólogos

> **Princípio condutor:** *A Inteligência Artificial é uma ferramenta de apoio à prática psicológica, nunca substitui o psicólogo, o vínculo terapêutico ou o julgamento clínico.*

## Objetivos de aprendizagem
Ao final deste capítulo, você será capaz de:
- Utilizar **prompts seguros** para tarefas de apoio, reconhecendo seus limites.
- Estruturar um bom prompt (contexto → instrução → formato).
- Aplicar a **trava de segurança** e a **anonimização** a cada uso.

---

## 5.0 Como ler este capítulo

> ⚠️ **Trava de segurança (vale para TODOS os prompts deste capítulo).**
> Nenhum prompt aqui faz — ou deve ser adaptado para fazer — **diagnóstico, avaliação psicológica, psicoterapia, parecer/laudo automático ou manejo de crise**. Todos executam **tarefas acessórias** que continuam sob sua responsabilidade técnica (Cap. 2 e 3). E todos pressupõem **dados anonimizados** (Cap. 4).

Cada prompt segue a mesma estrutura:
- **Contexto** — para que serve.
- **Limite** — o que ele NÃO faz.
- **Prompt pronto** — texto para copiar (no HTML terá botão "copiar").
- **Selo** — ✔ *Uso de apoio*.

### Anatomia de um bom prompt
Um prompt eficaz tem três partes: **(1) papel/contexto** ("Você é um assistente que apoia um psicólogo em..."), **(2) instrução clara** (o que fazer) e **(3) formato de saída** (lista, tabela, tom, extensão). A literatura sobre IA aplicada ao trabalho clínico de apoio mostra que instruções bem-estruturadas melhoram a utilidade e reduzem desvios (Stade et al., 2024; McCrudden et al., 2025).

---

## 5.1 Documentos clínicos *(apoio à redação, não substituição do registro)*

> **Este conjunto NÃO serve para:** gerar laudo, parecer ou diagnóstico, nem substituir o prontuário. Serve para **organizar e revisar a forma** de um texto que **você** redige e valida (Código de Ética, Art. 2º, g).

**Prompt 1 — Revisar a clareza de um texto já escrito por você**
> *Contexto:* melhorar a redação de uma anotação que você mesmo escreveu, sem alterar o conteúdo clínico.
> *Limite:* não cria conteúdo clínico; só revisa forma.

```
Você é um assistente de redação que apoia um psicólogo.
Revise o texto abaixo apenas quanto à clareza, coesão e gramática,
SEM acrescentar informações, interpretações ou conteúdo clínico novo.
Mantenha o sentido original. Aponte ao final, em lista, o que alterou.

Texto: "[cole aqui o seu texto, já anonimizado]"
```
✔ *Uso de apoio*

**Prompt 2 — Estruturar tópicos de uma anotação de evolução (modelo genérico)**
> *Contexto:* obter um esqueleto neutro para organizar suas próprias anotações.
> *Limite:* gera **estrutura**, não conteúdo do caso.

```
Sugira uma estrutura de tópicos (apenas títulos de seções) para
organizar uma anotação de evolução clínica genérica em psicologia.
Não invente conteúdo de caso; apresente somente o esqueleto reutilizável.
```
✔ *Uso de apoio*

---

## 5.2 Planejamento terapêutico *(organização das ideias do psicólogo)*

> **Este conjunto NÃO serve para:** definir o tratamento no lugar do psicólogo nem prescrever conduta. Serve para **organizar e ampliar ideias** que você avalia criticamente.

**Prompt 3 — Levantar possibilidades para você avaliar**
> *Limite:* a IA propõe; a decisão clínica é sua.

```
Você apoia um psicólogo no planejamento. Para o tema clínico abstrato
abaixo (sem dados de paciente), liste possíveis eixos de trabalho
psicoeducativo e organizacional que um profissional PODERIA considerar,
apresentando-os como opções a avaliar criticamente — não como prescrição.

Tema (genérico e anonimizado): "[ex.: manejo de ansiedade de desempenho em adultos]"
```
✔ *Uso de apoio*

---

## 5.3 Supervisão *(estruturação de estudo de caso)*

> **Este conjunto NÃO serve para:** substituir o supervisor humano. Serve para **organizar a apresentação** de um caso já anonimizado para levar à supervisão. A literatura explora a IA como apoio à supervisão e ao treino — sempre complementar ao supervisor (Sheperis & Sadeh-Sharvit, 2023; Shafran et al., 2025).

**Prompt 4 — Roteiro para apresentar um caso na supervisão**
```
Ajude a organizar a APRESENTAÇÃO de um estudo de caso para supervisão
em psicologia. Forneça um roteiro de seções (ex.: motivo de busca,
hipóteses de trabalho, intervenções, dúvidas para o supervisor),
em formato de checklist. Não preencha com conteúdo; só o roteiro.
```
✔ *Uso de apoio*

**Prompt 5 — Gerar perguntas para levar ao supervisor**
```
Com base no tema clínico genérico abaixo (sem dados de paciente),
sugira perguntas reflexivas que um psicólogo poderia levar à supervisão
para aprofundar sua própria análise. Apresente como perguntas, não respostas.

Tema: "[genérico e anonimizado]"
```
✔ *Uso de apoio*

---

## 5.4 Psicoeducação *(materiais para pacientes)*

> **Este conjunto NÃO serve para:** orientar um paciente específico sem a curadoria do psicólogo. Serve para **rascunhar materiais educativos genéricos** que você revisa, adapta e valida antes de entregar.

**Prompt 6 — Rascunho de material psicoeducativo genérico**
```
Você apoia um psicólogo na criação de material psicoeducativo.
Escreva um texto curto, acessível e acolhedor (linguagem leiga, sem jargão)
explicando, de forma geral, o tema abaixo para o público adulto.
Inclua um aviso de que o material é informativo e não substitui
acompanhamento profissional. Evite prometer resultados.

Tema: "[ex.: o que é higiene do sono]"
```
✔ *Uso de apoio* — revise e adapte antes de entregar a qualquer paciente.

---

## 5.5 Redes sociais / comunicação profissional

> **Este conjunto NÃO serve para:** fazer divulgação sensacionalista, prometer resultados ou expor casos. Deve respeitar o Código de Ética na publicidade (Art. 20: identificação com CRP, sem previsão taxativa de resultados, sem sensacionalismo).

**Prompt 7 — Rascunho de post educativo para o público geral**
```
Escreva um rascunho de post curto para redes sociais, de um psicólogo,
com teor EDUCATIVO sobre o tema abaixo. Regras:
- linguagem acessível e respeitosa;
- NÃO prometa resultados nem use tom sensacionalista;
- inclua um convite leve a procurar acompanhamento profissional;
- deixe um espaço "[Nome – CRP 00/00000]" para identificação.

Tema: "[ex.: a importância das pausas no trabalho]"
```
✔ *Uso de apoio* — confira a conformidade com o Art. 20 antes de publicar.

---

## 5.6 Antes de usar qualquer prompt (resumo)
> - [ ] O conteúdo está **anonimizado** (Cap. 4)?
> - [ ] A tarefa é de **apoio** (não diagnóstico/parecer/crise)?
> - [ ] Vou **revisar e assumir a responsabilidade** pela saída?
> - [ ] O resultado respeita **sigilo, viés e transparência** (Cap. 2)?

---

## Em uma frase
Um bom prompt para psicólogo é aquele que **economiza tempo em tarefas acessórias** — revisar, organizar, rascunhar — **sem nunca tocar** no que é insubstituível: o juízo clínico, o vínculo e a responsabilidade técnica.

---

### Referências deste capítulo
- Sheperis & Sadeh-Sharvit (2023), *J. Technology in Counselor Education & Supervision* — supervisão apoiada por IA.
- McCrudden et al. (2025), *JMIR Formative Research* — documentação clínica com IA.
- Shafran et al. (2025), *Behaviour Research and Therapy* — IA em treino/supervisão de TCC.
- Volpe (2025), *European Psychiatry* — aplicações atuais de IA em saúde mental.
- Mesquiti & Nook (2026), *Annual Review of Biomedical Data Science* — LLMs em pesquisa e tratamento.
- Stade et al. (2024), *npj Mental Health Research* — desenvolvimento e uso responsável.

**Normativas aplicadas:** Código de Ética (Art. 2º g, 2º q, 9º, 20); Res. CFP 9/2024 (Art. 5º); LGPD. *Detalhamento no Cap. 3 e 4.*
