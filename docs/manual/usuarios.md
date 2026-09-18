---
title: Gerenciamento de Usuários
description: Como convidar, gerenciar funções e desativar membros da equipe no AltaJuris
sidebar_position: 11
---

# Gerenciamento de Usuários

A página **Usuários** permite gerenciar todos os membros do escritório: convidar novos integrantes, alterar funções e desativar usuários quando necessário.

:::warning Acesso restrito
A página **Usuários** está disponível para **Proprietária** e **Administrador**.
A **Secretária** e a **Coordenação** não alcançam esta página.
:::

## As funções

O AltaJuris tem oito funções para quem trabalha no escritório, mais o acesso do
cliente. Cada uma existe para um recorte de responsabilidade diferente.

| Função | Cor | Para quem é |
|---|---|---|
| **Proprietária** | 🌹 Rosa | A titular do escritório. Alcança tudo que o Administrador alcança e mais a **política de preços** e o **caixa do escritório** |
| **Administrador** | 🔴 Vermelho | Quem administra o sistema: usuários, configurações, integrações, plano |
| **Coordenação** | 🟣 Índigo | Advogada que também responde pelo escritório: encerra e distribui qualquer caso, e supervisiona a equipe |
| **Financeiro** | 🩵 Ciano | Quem cuida do dinheiro: todas as cobranças e o consolidado. **Não** define preço nem mexe em processo |
| **Secretária** | 🟠 Laranja | Apoio administrativo com visão do escritório, sem Configurações nem Usuários |
| **Advogado** | 🔵 Azul | Conduz os próprios casos, prazos, documentos e usa a IA |
| **Estagiário** | 🟢 Verde | Visualiza e cria casos, prazos e documentos; usa a IA |
| **Somente Leitura** | ⚫ Cinza | Só visualiza casos, prazos e documentos |
| **Cliente** | 🟡 Âmbar | Portal do cliente — vê apenas os próprios processos |

:::info Duas coisas que só a Proprietária faz
Em tudo o mais, ser Administrador basta. Em **duas** não:

- **Tabela de Preços** — todo mundo consulta (a advogada precisa do valor na
  hora da consulta, com a cliente na frente dela), mas só a Proprietária edita.
- **Caixa do escritório** — a advogada emite cobrança para o cliente dela e vê
  as dela; a visão do escritório inteiro é da Proprietária e do Financeiro.

Não é hierarquia: é que preço e caixa são decisão de quem é dono do escritório,
não de quem administra o sistema.
:::

### Quais funções consomem assento

O plano é cobrado por **assento de advogado**. Consomem assento:

| Consome assento | Não consome |
|---|---|
| Proprietária, Administrador, Coordenação, Advogado | Financeiro, Secretária, Estagiário, Somente Leitura, Cliente |

Criar um Financeiro ou uma Secretária **não aumenta a fatura**. Promover alguém
a Advogado ou Coordenação, sim.

### O que cada função alcança

| Área | Proprietária | Admin | Coordenação | Financeiro | Secretária | Advogado | Estagiário | Leitura |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Painel | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Casos | ✓ | ✓ | ✓ | ✓ (ver) | ✓ | ✓ | ✓ | ✓ (ver) |
| Prazos | ✓ | ✓ | ✓ | — | ✓ | ✓ | ✓ | ✓ (ver) |
| Calendário | ✓ | ✓ | ✓ | — | ✓ | ✓ | ✓ | ✓ |
| CRM | ✓ | ✓ | ✓ | ✓ (ver) | ✓ | ✓ | ✓ | ✓ (ver) |
| Documentos | ✓ | ✓ | ✓ | ✓ (ver) | ✓ | ✓ | ✓ | ✓ (ver) |
| Publicações | ✓ | ✓ | ✓ | — | ✓ | ✓ | ✓ | — |
| Tarefas | ✓ | ✓ | ✓ | — | ✓ | ✓ | ✓ | — |
| Modelos | ✓ | ✓ | ✓ | — | ✓ | ✓ | ✓ | — |
| IA / Chat | ✓ | ✓ | ✓ | — | ✓ | ✓ | ✓ | — |
| Captação | ✓ | ✓ | ✓ | — | ✓ | ✓ | — | — |
| Legislativo | ✓ | ✓ | ✓ | — | ✓ | ✓ | — | — |
| Financeiro | ✓ escritório | ✓ só as suas | ✓ só as suas | ✓ escritório | ✓ só as suas | ✓ só as suas | — | — |
| **Tabela de Preços** | ✓ **editar** | ✓ consultar | ✓ consultar | ✓ consultar | ✓ consultar | ✓ consultar | — | — |
| Analytics da Equipe | ✓ | ✓ | ✓ | ✓ | ✓ | — | — | — |
| Auditoria | ✓ | ✓ | ✓ | — | ✓ | ✓ | — | — |
| Marketplace | — | — | ✓ | — | — | ✓ | — | — |
| Configurações | ✓ | ✓ | — | — | — | — | — | — |
| Usuários | ✓ | ✓ | — | — | — | — | — | — |

:::tip Coordenação x Administrador
Confundem-se com facilidade, e a diferença é limpa: a **Coordenação** responde
pelo **trabalho** — distribui casos, encerra qualquer processo, acompanha a
equipe. O **Administrador** responde pelo **sistema** — usuários, integrações,
plano, configuração do escritório. Uma não alcança Configurações; a outra não
precisa de OAB.
:::

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

- **Use funções mínimas necessárias** — Prefira "Estagiário" a "Advogado" para
  quem não precisa conduzir casos. Além de reduzir acesso, **economiza**: o
  Estagiário não consome assento e o Advogado consome.
- **Financeiro não é Administrador** — quem cuida do caixa não precisa de
  acesso a usuários, integrações nem plano. A função Financeiro existe
  exatamente para isso, e não consome assento.
- **Desative imediatamente** quando um membro deixar o escritório — Não espere para revogar o acesso.
- **Nunca compartilhe credenciais** — Cada pessoa deve ter sua própria conta para que o log de auditoria seja confiável.
- **Revise periodicamente** a lista de usuários para identificar contas não utilizadas.

## Próximos passos

- [Configurações](./configuracoes) — Gerencie planos e integrações
- [Casos](./casos) — Entenda como atribuir casos a advogados
- [Prazos](./prazos) — Saiba como o campo Responsável funciona nos prazos
