---
title: Tarefas
description: Como usar o Kanban de tarefas internas do escritório no AltaJuris
sidebar_position: 7
---

# Tarefas

O módulo de Tarefas oferece um **Kanban** para gerenciar o trabalho interno do escritório: delegação de providências, acompanhamento de pendências e abertura de chamados ao suporte AltaJuris.

## Acessando as Tarefas

Clique em **Tarefas** na sidebar principal. O Kanban abre diretamente na aba **Escritório**.

## Colunas do Kanban

O quadro é dividido em cinco colunas que representam o fluxo de trabalho:

| Coluna | Significado |
|---|---|
| **Backlog** | Tarefas identificadas mas ainda não priorizadas |
| **A Fazer** | Priorizadas para o período atual |
| **Em Andamento** | Trabalho em execução no momento |
| **Em Revisão** | Aguardando revisão ou aprovação |
| **Concluído** | Finalizadas |

## Contextos de tarefas

Use as abas no topo da página para alternar entre contextos:

| Aba | Quem usa |
|---|---|
| **Escritório** | Tarefas internas do escritório (delegações, pesquisas, petições pendentes) |
| **Suporte** | Chamados abertos junto ao suporte AltaJuris |

## Criar uma tarefa

1. Clique em **Nova Tarefa** (canto superior direito) ou no ícone **+** em qualquer coluna
2. Preencha as informações:
   - **Título** — Descrição objetiva da tarefa *(obrigatório)*
   - **Tipo** — Tarefa, Bug, Feature ou Suporte
   - **Prioridade** — Baixa, Média, Alta ou Crítica
   - **Status** — Em qual coluna a tarefa iniciará
   - **Prazo** — Data limite opcional
   - **Responsável** — Membro da equipe encarregado
   - **Descrição** — Detalhes adicionais
3. Clique em **Criar**

## Mover tarefas entre colunas

Arraste qualquer card e solte na coluna de destino. O status é atualizado automaticamente. Isso permite arrastar uma tarefa de **A Fazer** para **Em Andamento** quando começar a trabalhar nela, por exemplo.

## Editar ou excluir uma tarefa

Clique no card da tarefa para abrir o formulário de edição. Faça as alterações e clique em **Salvar**. Para excluir, clique no botão da lixeira no canto inferior esquerdo do formulário.

:::info Permissão de exclusão
Apenas o criador da tarefa ou administradores/secretárias podem excluir uma tarefa.
:::

## Badges de prioridade e tipo

Cada card exibe dois badges coloridos para identificação rápida:

**Prioridade:**
- ⬜ **Baixa** — cinza
- 🔵 **Média** — azul
- 🟠 **Alta** — laranja
- 🔴 **Crítica** — vermelho

**Tipo:**
- **Tarefa** — cinza
- **Bug** — vermelho claro
- **Feature** — roxo
- **Suporte** — ciano

## Próximas fases (roadmap)

As fases seguintes do módulo de Tarefas incluem:

- **Integrações** — Criar tarefa a partir de um evento do calendário; aba Tarefas dentro de cada caso
- **Controle de horas** — Timer por tarefa integrado ao relatório de horas
- **NOC** — Visão cross-tenant para a equipe de suporte AltaJuris

## Próximos passos

- [Calendário](./calendario) — Eventos do escritório e prazos em visão unificada
- [Casos](./casos) — Processos e andamentos
- [Usuários](./usuarios) — Gerenciar equipe e permissões
