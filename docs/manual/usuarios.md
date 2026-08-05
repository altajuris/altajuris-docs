---
title: Gerenciamento de Usuários
description: Como convidar, gerenciar funções e desativar membros da equipe no AltaJuris
sidebar_position: 11
---

# Gerenciamento de Usuários

A página **Usuários** permite gerenciar todos os membros do escritório: convidar novos integrantes, alterar funções e desativar usuários quando necessário.

:::warning Acesso restrito
A página Usuários está disponível apenas para **Administradores**. A **Secretária** pode visualizar a lista, mas não pode convidar, alterar funções ou desativar usuários.
:::

## Funções e permissões

O AltaJuris possui seis funções, cada uma com um nível de acesso diferente:

| Função | Badge | O que pode fazer |
|---|---|---|
| **Administrador** | 🔴 Vermelho | Acesso total: casos, usuários, configurações, faturamento, analytics |
| **Secretária** | 🟠 Laranja | Visão total do escritório (casos, prazos, calendário, analytics, auditoria) — sem Configurações e Usuários |
| **Advogado** | 🔵 Azul | Gerenciar casos, documentos, prazos, modelos, usar IA |
| **Estagiário** | 🟢 Verde | Visualizar e criar casos, prazos, documentos, usar IA |
| **Somente Leitura** | ⚫ Cinza | Visualizar casos, prazos e documentos — sem criar ou editar |
| **Cliente** | 🟡 Âmbar | Acesso ao portal do cliente |

### Comparativo de acesso por área

| Área | Administrador | Secretária | Advogado | Estagiário | Somente Leitura |
|---|:---:|:---:|:---:|:---:|:---:|
| Casos | ✓ | ✓ | ✓ | ✓ | ✓ (visualizar) |
| Prazos | ✓ | ✓ | ✓ | ✓ | ✓ (visualizar) |
| Documentos | ✓ | ✓ | ✓ | ✓ | ✓ (visualizar) |
| Calendário (todos) | ✓ | ✓ | — | — | — |
| Calendário (próprio) | ✓ | ✓ | ✓ | ✓ | — |
| CRM | ✓ | ✓ | ✓ | ✓ | ✓ (visualizar) |
| Consultas | ✓ | ✓ | ✓ | ✓ | — |
| IA / Chat | ✓ | ✓ | ✓ | ✓ | — |
| Modelos | ✓ | ✓ | ✓ | — | — |
| Publicações | ✓ | ✓ | ✓ | — | — |
| Analytics | ✓ | ✓ | — | — | — |
| Auditoria | ✓ | ✓ | — | — | — |
| Configurações | ✓ | — | — | — | — |
| Usuários | ✓ | — | — | — | — |
| Faturamento | ✓ | — | — | — | — |

## Convidar novo usuário

1. Acesse **Usuários** na sidebar
2. Clique em **Convidar Usuário**
3. Preencha o **e-mail** do convidado
4. Selecione a **função** adequada
5. Clique em **Enviar Convite**

O convidado receberá um e-mail com um link para criar a conta. O link é válido por **7 dias**. Se o convidado não aceitar nesse prazo, você pode reenviar o convite pelo mesmo botão.

:::info Normalização de nome
Ao criar a conta, o nome informado é automaticamente formatado em **Title Case** — por exemplo, "JOAO DA SILVA" se torna "João da Silva". Isso garante padronização na exibição de nomes em todo o sistema.
:::

## Gerenciar usuários existentes

Na lista de usuários, cada linha exibe:

- **Nome e e-mail** do usuário
- **Função** com badge colorido
- **Status** — Ativo ou Inativo
- **Último acesso**

### Alterar função

1. Clique no **ícone de edição** ao lado do usuário
2. Selecione a nova função no menu
3. Confirme a alteração

A alteração de função entra em vigor imediatamente — o usuário terá acesso às novas áreas no próximo carregamento de página.

### Desativar usuário

Desativar revoga o acesso do usuário sem excluir seu histórico. Todo o trabalho feito pelo usuário (casos, prazos, documentos, notas) permanece intacto.

#### Desativação simples

Se o usuário não tiver casos, prazos pendentes ou consultas agendadas em seu nome, a desativação é imediata:

1. Clique em **Desativar** ao lado do usuário
2. Confirme no modal
3. O usuário perderá acesso imediatamente

#### Desativação com reatribuição

Se o usuário tiver pendências em seu nome, o sistema exibe um modal de confirmação com três contadores:

| Contador | O que representa |
|---|---|
| **Casos** | Processos em que o usuário é o advogado responsável |
| **Prazos pendentes** | Prazos com status "Pendente" atribuídos ao usuário |
| **Consultas agendadas** | Consultas futuras com o usuário como advogado |

**Antes de confirmar, selecione um advogado substituto.** Ao confirmar, o sistema transfere em uma única operação atômica:
- Todos os casos → novo responsável
- Todos os prazos pendentes → novo responsável
- Todas as consultas agendadas → novo advogado

Após a reatribuição, o usuário é desativado e não pode mais acessar o sistema.

:::tip Boa prática
Antes de desativar um advogado, verifique com ele quais casos precisam de atenção especial na transição. A reatribuição automática transfere tudo, mas contextos específicos de cada processo podem precisar de alinhamento manual.
:::

## Reativar usuário

Um usuário desativado pode ser reativado a qualquer momento:

1. Filtre a lista para mostrar **Inativos**
2. Clique em **Reativar** ao lado do usuário
3. Confirme a reativação

O usuário recupera o acesso com a mesma função que tinha antes da desativação.

## Dicas de segurança

- **Use funções mínimas necessárias** — Prefira "Estagiário" a "Advogado" para quem não precisa gerenciar casos.
- **Desative imediatamente** quando um membro deixar o escritório — Não espere para revogar o acesso.
- **Nunca compartilhe credenciais** — Cada pessoa deve ter sua própria conta para que o log de auditoria seja confiável.
- **Revise periodicamente** a lista de usuários para identificar contas não utilizadas.

## Próximos passos

- [Configurações](./configuracoes) — Gerencie planos e integrações
- [Casos](./casos) — Entenda como atribuir casos a advogados
- [Prazos](./prazos) — Saiba como o campo Responsável funciona nos prazos
