---
title: Calendário
description: Como usar o calendário de prazos e eventos do escritório no AltaJuris
sidebar_position: 6
---

# Calendário

O calendário do AltaJuris centraliza prazos processuais e eventos do escritório em uma única visão, permitindo planejar a agenda com clareza.

## Visões do calendário

O calendário oferece dois modos de visualização, alternáveis pelo botão no canto superior direito:

| Modo | Descrição |
|---|---|
| **Mês** | Grade mensal com prazos e eventos marcados por dia |
| **Agenda** | Lista cronológica dos próximos eventos e prazos |

### Filtro por advogado

**Administradores e Secretárias** veem o calendário completo de todos os advogados por padrão. Para filtrar por um advogado específico:

1. Use o **seletor de advogado** no header do calendário
2. Selecione o advogado desejado
3. O calendário atualiza mostrando apenas eventos e prazos daquele advogado

**Advogados e Estagiários** veem apenas seus próprios eventos e prazos.

## O que aparece no calendário

### Prazos processuais

Prazos com status **Pendente** aparecem no calendário na data de vencimento. A cor indica a prioridade:

- 🔴 **Vermelho** — Urgente
- 🟠 **Laranja** — Alta
- 🔵 **Azul** — Normal

Ao clicar em um prazo no calendário, é exibido um resumo com:
- Descrição do prazo
- Caso vinculado
- Responsável
- Botão para ir direto ao caso

### Eventos do escritório

Eventos internos são exibidos em cores distintas conforme o tipo:

| Tipo | Cor | Descrição |
|---|---|---|
| **Reunião** | Roxo | Reunião interna ou com cliente |
| **Audiência** | Âmbar | Audiência processual |
| **Tarefa** | Verde | Tarefa atribuída a um membro da equipe |
| **Lembrete** | Cinza | Aviso ou lembrete sem compromisso físico |
| **Outros** | Azul | Demais compromissos |

## Criar evento do escritório

1. Clique em um dia no calendário (ou no botão **+ Novo Evento**)
2. Preencha as informações:
   - **Título** — Descrição do evento
   - **Tipo** — Reunião, Audiência, Tarefa, Lembrete, ou Outros
   - **Data e horário** — Início e fim; ou marcar como **Dia todo**
   - **Responsável** *(para Tarefas e Lembretes)* — Membro da equipe encarregado
   - **Caso vinculado** *(opcional)* — Associa o evento a um processo específico
   - **Participantes** *(opcional)* — Outros membros do escritório
   - **Descrição** *(opcional)* — Detalhes adicionais
3. Clique em **Salvar**

:::info Responsável em Tarefas e Lembretes
Os tipos **Tarefa** e **Lembrete** possuem o campo **Responsável** para atribuir a um membro específico da equipe. Os demais tipos (Reunião, Audiência) usam o campo **Participantes** para indicar os envolvidos.
:::

### Vincular ao caso

Ao vincular um evento a um caso, você pode usar o campo de busca para encontrar o processo pelo número, nome da parte ou título. O vínculo aparece no evento e permite navegar diretamente ao processo a partir do calendário.

## Editar e excluir eventos

Para **editar** um evento:
1. Clique no evento no calendário
2. Clique em **Editar** no popup
3. Faça as alterações e salve

Para **excluir** um evento:
1. Clique no evento no calendário
2. Clique em **Excluir** no popup
3. Confirme a exclusão

:::warning Exclusão permanente
A exclusão de um evento não pode ser desfeita.
:::

## Dicas de uso

- **Use o tipo correto** — "Tarefa" tem campo Responsável; use para delegar providências. "Reunião" tem campo Participantes; use para encontros.
- **Vincule ao caso** — Eventos vinculados ficam visíveis também na aba **Eventos** dentro do caso.
- **Dia todo** — Marque audiências e eventos sem horário fixo como "Dia todo" para evitar poluição no calendário.
- **Filtro por advogado** — Administradores podem checar a agenda de qualquer membro da equipe para evitar conflitos de horário.

## Próximos passos

- [Prazos](./prazos) — Entenda como prazos processuais são detectados e aparecem no calendário
- [Casos](./casos) — Veja como eventos vinculados aparecem dentro de cada processo
- [Notificações](./notificacoes) — Configure alertas para eventos e prazos próximos
