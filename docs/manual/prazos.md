---
title: Controle de Prazos
description: Como gerenciar prazos processuais no AltaJuris com detecção automática e alertas
sidebar_position: 5
---

# Controle de Prazos

O controle de prazos é um dos recursos mais críticos do AltaJuris. A plataforma detecta automaticamente prazos a partir dos andamentos processuais e envia alertas escalonados para que você nunca perca um prazo.

:::danger Nunca perca um prazo!
Perder um prazo processual pode causar danos irreparáveis ao seu cliente. O AltaJuris monitora prazos 24 horas por dia e envia múltiplos alertas antes do vencimento.
:::

## Criar prazo manualmente

1. Acesse o caso desejado
2. Vá até a aba **Prazos**
3. Clique em **+ Novo Prazo**
4. Preencha as informações:
   - **Descrição** — O que precisa ser feito (ex: "Apresentar contestação")
   - **Data de vencimento** — Data limite
   - **Prioridade** — Urgente, Alta ou Normal
   - **Responsável** — Usuário encarregado do prazo (preenchido automaticamente com o advogado do caso)
   - **Observações** — Notas adicionais (opcional)
5. Clique em **Salvar**

## Responsável pelo prazo

Cada prazo possui um campo **Responsável** (`assigned_to`) que indica o usuário encarregado de cumpri-lo.

- **Preenchimento automático** — Ao criar um prazo, o campo é preenchido automaticamente com o advogado vinculado ao caso.
- **Alteração manual** — O responsável pode ser alterado a qualquer momento, permitindo delegar um prazo a outro membro da equipe sem alterar o advogado do caso.

Essa separação é útil quando um estagiário ou outro advogado ficará responsável por uma providência específica, mas o advogado principal do caso permanece o mesmo.

## Prazos recorrentes

Ao criar um prazo, é possível ativar a **recorrência** para que ele se repita automaticamente em intervalos regulares.

### Como ativar

1. No formulário de novo prazo, ative a opção **Recorrente**
2. Escolha a **periodicidade**:
   - **Semanal** — O prazo se repete a cada N semanas
   - **Mensal** — O prazo se repete a cada N meses
   - **Anual** — O prazo se repete a cada N anos
3. Defina o **intervalo** (ex: a cada 1 mês, a cada 2 semanas)
4. Escolha o **critério de encerramento**:
   - **Data final** — Prazos são gerados até a data informada
   - **Quantidade** — Um número fixo de ocorrências
5. Clique em **Salvar**

Os prazos recorrentes são gerados automaticamente conforme a periodicidade configurada e aparecem individualmente na lista e no calendário.

## Alerta de responsável divergente

O sistema identifica automaticamente quando o responsável de um prazo é diferente do advogado vinculado ao caso.

### Ícone de alerta

Um ícone **⚠** em âmbar aparece ao lado do prazo nas seguintes telas:
- Lista de prazos
- DeadlineCard no dashboard
- Aba Prazos dentro do caso

### Informações do popover

Ao clicar no ícone ⚠, um popover exibe:

| Campo | Conteúdo |
|---|---|
| **Prazo** | Nome do responsável atual do prazo |
| → | |
| **Caso** | Nome do advogado principal do caso |

### Sincronizar com um clique

O popover exibe o botão **"Usar advogado do caso"**. Ao clicar, o responsável do prazo é atualizado imediatamente para coincidir com o advogado do caso, eliminando a divergência.

### Dashboard — Prazos esta Semana

O card **"Prazos esta Semana"** no dashboard exibe uma sub-linha em âmbar com a contagem de prazos com responsável divergente. Esse indicador é visível apenas para **Administradores** e **Secretárias**.

## Prazos automáticos

O AltaJuris detecta automaticamente prazos a partir dos andamentos processuais sincronizados com os tribunais. Este recurso funciona sem nenhuma configuração adicional.

### Como a detecção funciona

Quando um novo andamento é sincronizado, o sistema analisa o texto e identifica:

- **Intimações** — Prazo de 15 dias úteis para manifestação
- **Citações** — Prazo de 15 dias úteis para contestação
- **Sentenças** — Prazo de 15 dias úteis para recurso de apelação
- **Decisões interlocutórias** — Prazo de 15 dias úteis para agravo
- **Audiências designadas** — Prazo até a data da audiência
- **Publicações no DJE** — Prazo contado a partir da publicação

### Cálculo em dias úteis

Os prazos são calculados em **dias úteis**, conforme a legislação processual brasileira:

- Fins de semana (sábados e domingos) são excluídos
- Feriados nacionais são considerados
- O dia do vencimento é incluído na contagem
- Quando o vencimento cai em dia não útil, é prorrogado para o próximo dia útil

:::info Cálculo de prazos
O AltaJuris segue as regras do Código de Processo Civil (art. 219) para contagem de prazos. Recomendamos sempre conferir o prazo calculado, especialmente para feriados locais que podem não estar cadastrados.
:::

### Prioridade automática

A prioridade do prazo é definida automaticamente com base no tipo de andamento que o originou:

| Andamento de origem | Prioridade atribuída |
|---|---|
| **Sentença** | Urgente |
| **Decisão interlocutória** | Alta |
| **Intimação** | Alta |
| **Citação** | Alta |
| **Audiência** | Alta |
| **Despacho** | Normal |
| **Publicação** | Normal |
| **Outros** | Normal |

## Visualização no calendário

O AltaJuris oferece uma visão de calendário para facilitar o planejamento:

1. Acesse **Prazos** na sidebar
2. Alterne entre as visualizações:
   - **Lista** — Todos os prazos em ordem cronológica
   - **Calendário** — Visão mensal com prazos marcados
3. No calendário, os prazos são exibidos com cores conforme a prioridade:
   - **Vermelho** — Urgente
   - **Laranja** — Alta
   - **Azul** — Normal
4. Clique em um prazo no calendário para ver os detalhes

## Notificações e alertas de vencimento

O sistema de alertas é escalonado para garantir que você seja notificado com antecedência:

### Alertas por prioridade

| Prioridade | Quando é notificado |
|---|---|
| **Urgente** | 7 dias, 3 dias, 1 dia e no dia do vencimento |
| **Alta** | 5 dias, 2 dias e 1 dia antes |
| **Normal** | 3 dias e 1 dia antes |

### Banner de urgência no dashboard

Quando há prazos vencendo em até **3 dias**, um banner vermelho aparece no topo do dashboard com:

- Nome do caso e descrição do prazo
- **Countdown visual** mostrando dias, horas e minutos restantes
- Link direto para o caso

### Notificações em tempo real

O sistema verifica novas notificações a cada **15 segundos**. Você recebe alertas para:

- Novos prazos detectados automaticamente
- Prazos próximos do vencimento
- Prazos vencidos não cumpridos

## Status dos prazos

Cada prazo possui um status que indica sua situação:

| Status | Descrição | Ação |
|---|---|---|
| **Pendente** | Prazo ainda não venceu e não foi cumprido | Cumprir antes do vencimento |
| **Cumprido** | Prazo foi marcado como cumprido pelo usuário | Nenhuma ação necessária |
| **Expirado** | Prazo venceu sem ser cumprido | Avaliar consequências e tomar medidas |

### Marcar prazo como cumprido

Há duas formas de marcar um prazo como cumprido:

**Diretamente na lista (sem abrir o prazo):**
1. Na página de prazos ou no DeadlineCard do dashboard, localize o prazo
2. Clique no **ícone de check** (✓) ao lado do prazo
3. O status é atualizado imediatamente para "Cumprido"

**Dentro do prazo:**
1. Acesse o caso ou a lista de prazos
2. Abra o prazo desejado
3. Clique em **Marcar como cumprido**
4. O prazo será atualizado para o status "Cumprido"

:::tip Dica
Use o check direto na lista para agilizar o registro de providências tomadas. Isso mantém o painel limpo sem precisar abrir cada prazo individualmente.
:::

### Prazos expirados

Prazos que vencem sem serem marcados como cumpridos ficam com destaque vermelho na lista. Recomendamos revisar regularmente para:

- Verificar se a providência foi tomada e o prazo apenas não foi marcado
- Avaliar as consequências da perda do prazo
- Tomar medidas corretivas quando possível

## Filtros e ordenação

Na página de prazos, utilize os filtros para encontrar rapidamente o que precisa:

- **Por status** — Pendente, Cumprido, Expirado
- **Por tipo** — Filtra pela categoria do prazo (ex: processual, audiência, contratual)
- **Por prioridade** — Urgente, Alta, Normal
- **Por responsável** — Exibe apenas os prazos atribuídos a um determinado usuário
- **Por período** — Filtrar por intervalo de datas de vencimento
- **Ordenação** — Por data de vencimento (mais próximo primeiro) ou por prioridade

## Próximos passos

- [Documentos](./documentos) — Organize os documentos relacionados aos prazos
- [Notificações](./notificacoes) — Configure como receber alertas de prazos
- [Sincronização com Tribunais](./sincronizacao) — Entenda como os prazos são detectados automaticamente
