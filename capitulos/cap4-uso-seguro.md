# Capítulo 4 — Uso seguro da IA

> **Princípio condutor:** *A Inteligência Artificial é uma ferramenta de apoio à prática psicológica, nunca substitui o psicólogo, o vínculo terapêutico ou o julgamento clínico.*

## Objetivos de aprendizagem
Ao final deste capítulo, você será capaz de:
- Aplicar técnicas de **anonimização e pseudonimização** a casos clínicos antes de usar qualquer IA.
- Identificar com precisão **o que nunca deve ser inserido** em uma ferramenta de IA.
- Configurar suas contas para **reduzir a retenção de dados** e sair do uso para treino.
- Reconhecer e evitar os **erros mais comuns** que levam à quebra de sigilo.

---

## 4.0 A regra de ouro

> **Trate todo chatbot de IA como uma sala de espera lotada.** Tudo o que você "fala" ali pode ser ouvido, guardado e processado por terceiros. Você nunca diria o nome e a história de um paciente em voz alta numa sala cheia — então não digite isso num chat.

O Capítulo 3 mostrou *por que* o sigilo se aplica à IA (Código de Ética, Art. 9º; Res. CFP 9/2024, Art. 3º II/IV; LGPD). Este capítulo mostra **como** cumprir esse dever na prática, passo a passo. A literatura sobre uso responsável de IA em saúde mental converge para um ponto: a proteção de dados não é uma etapa final, é a **condição de entrada** (Saeidnia et al., 2024; Stade et al., 2024).

---

## 4.1 Anonimização e pseudonimização de casos

Há duas formas de descaracterizar um dado antes de usá-lo numa IA. Entender a diferença evita uma falsa sensação de segurança.

| Técnica | O que é | Reversível? | Quando usar |
|---|---|---|---|
| **Anonimização** | Remover **todos** os elementos que permitem identificar a pessoa, direta ou indiretamente | Não (idealmente) | Sempre que possível — é o padrão-ouro |
| **Pseudonimização** | Substituir identificadores por códigos/apelidos, mantendo uma chave separada | Sim, com a chave | Quando você precisa reconectar ao caso depois — a chave **nunca** vai para a IA |

> ⚠️ **Cuidado com a reidentificação.** Anonimizar não é só trocar o nome. Um conjunto de detalhes aparentemente inofensivos — profissão rara + cidade pequena + idade + evento específico — pode identificar alguém tão bem quanto um CPF. **Anonimização real remove também o contexto identificável.**

### Exemplo lado a lado

> ❌ **Identificável (NÃO inserir):**
> *"Meu paciente João Carlos, 34 anos, dentista em [cidade pequena], casado com a Fernanda, relatou que desde a morte do pai em março piora a insônia. Trabalha na Clínica OdontoVida."*

> ✅ **Anonimizado (uso seguro):**
> *"Um paciente adulto, profissional da saúde, relata piora de insônia associada a um luto recente (falecimento de um familiar próximo há alguns meses). Como organizar a psicoeducação sobre higiene do sono para esse contexto?"*

Repare que a versão segura **preserva o que importa clinicamente** (luto recente, insônia, necessidade de psicoeducação) e **descarta o que só serve para identificar** (nome, cônjuge, cidade, local de trabalho).

---

## 4.2 O que NUNCA inserir em uma IA

Uma lista mental simples, para usar antes de cada uso:

> **Os "nunca" do sigilo digital**
> - ❌ Nome completo, apelido único ou iniciais reconhecíveis do paciente
> - ❌ CPF, RG, número de prontuário, telefone, e-mail, endereço
> - ❌ Nome de familiares, empregador, escola, clínica
> - ❌ Cidade pequena + combinação de traços que estreite a identificação
> - ❌ Imagens, áudios ou prints da sessão com rosto/voz
> - ❌ Datas exatas que, somadas a outros dados, identifiquem (ex.: "deu à luz em 12/03 no Hospital X")
> - ❌ Qualquer trecho que, lido por um conhecido do paciente, revelaria de quem se trata

**O teste prático:** *"Se esse texto vazasse amanhã, alguém conseguiria descobrir quem é o paciente?"* Se a resposta não for um "não" confiante, **não cole**.

Esse cuidado é a tradução direta do dever de sigilo (Código de Ética, Art. 9º) e do tratamento reforçado de dado sensível de saúde pela LGPD (Cap. 3). A literatura que cataloga violações éticas de "conselheiros de IA" aponta a exposição inadvertida de dados como uma das falhas mais frequentes (Iftikhar et al., 2025).

---

## 4.3 Boas práticas de configuração

Anonimizar é a primeira camada. A segunda é **configurar a ferramenta** para reduzir o rastro que ela guarda.

### a) Saia do treino do modelo
A maioria das ferramentas grandes permite **desativar o uso das suas conversas para treinar o modelo**. Procure em *Configurações → Dados / Privacidade* opções como "Improve the model for everyone", "Training" ou "Histórico e treinamento". Desative. `[A VALIDAR: confirmar o nome exato da opção em cada ferramenta no Cap. 6, pois mudam com frequência]`

### b) Prefira contas e planos com garantias de dados
Versões corporativas/educacionais costumam oferecer **compromisso de não usar dados para treino** e maior controle de retenção. Avalie a política antes de adotar (dever do Art. 4º, I da Res. 9/2024).

### c) Gerencie histórico e retenção
- Apague conversas sensíveis após o uso.
- Use chats temporários/anônimos quando disponíveis.
- Não acumule no histórico aquilo que você não inseriria de novo hoje.

### d) Separe o ambiente profissional do pessoal
Use uma conta dedicada ao trabalho de apoio clínico, sem misturar com buscas pessoais — facilita controlar o que entra e o que fica.

> **Importante:** desativar o treino **não** torna seguro inserir dado identificável. É uma camada extra, não um substituto da anonimização. A ordem é sempre: **(1) anonimizar → (2) configurar → (3) usar.**

---

## 4.4 Erros comuns (e como evitá-los)

| Erro comum | Por que é perigoso | Como evitar |
|---|---|---|
| "Só troquei o nome" | Contexto ainda identifica (4.1) | Remova traços que estreitam a identificação |
| Colar a transcrição inteira da sessão | Mesmo sem nome, o relato pode ser único | Resuma e abstraia o caso antes |
| Subir áudio/print da sessão | Voz e imagem são identificadores diretos | Nunca subir mídia da sessão |
| Usar conta pessoal com treino ativo | O dado pode alimentar o modelo | Desative o treino; conta dedicada |
| Confiar na saída sem revisar | IA alucina e enviesa | Você valida e assina (Cap. 3, Art. 2º g) |
| Achar que "apagar" some na hora | Pode haver retenção temporária no servidor | Não inserir é mais seguro que apagar depois |
| Manejar fala de crise no chat | IA não substitui rede de cuidado | Encaminhar à rede presencial (Res. 9/2024, Art. 5º) |

---

## Checklist — antes de colar no chat
> Marque mentalmente todos antes de pressionar Enter:
> - [ ] Removi nome, contatos e documentos?
> - [ ] Removi familiares, empregador, instituições?
> - [ ] O conjunto de detalhes ainda permite identificar? (se sim, abstraia mais)
> - [ ] Não há áudio, imagem ou print da sessão?
> - [ ] O treino do modelo está desativado nesta conta?
> - [ ] Eu validarei e assumirei a responsabilidade pela saída?
> - [ ] Isto é uma tarefa de **apoio** (não diagnóstico, parecer ou crise)?

Se todos estiverem marcados, o uso está dentro das boas práticas. Se algum falhar, **pare e ajuste**.

---

## Em uma frase
Uso seguro de IA na clínica = **anonimizar sempre**, **configurar a ferramenta** para reter e treinar o mínimo, e **nunca delegar à máquina** a responsabilidade técnica e o sigilo que são, por lei e por ética, do psicólogo.

---

### Referências deste capítulo
- Saeidnia et al. (2024), *Social Sciences* — considerações éticas centrais no uso de IA em saúde mental.
- Stade et al. (2024), *npj Mental Health Research* — roadmap de desenvolvimento e uso responsável.
- Iftikhar et al. (2025), *Proc. AAAI/ACM AIES* — catálogo de violações éticas de "LLM counselors".
- Holm (2024), *Frontiers in Psychiatry* — trade-offs éticos e limites de objetividade.

**Normativas aplicadas:** Código de Ética (Art. 9º — sigilo); Res. CFP 9/2024 (Art. 3º II/IV, Art. 4º I, Art. 5º); LGPD (dado sensível de saúde, segurança). *Detalhamento no Cap. 3.*

> **Nota de validação.** Os nomes exatos das opções de privacidade de cada ferramenta (4.3) mudam com frequência e estão marcados `[A VALIDAR]`; serão conferidos junto à tabela do Cap. 6 antes do HTML final.
