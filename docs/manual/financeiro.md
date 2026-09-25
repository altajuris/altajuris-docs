---
title: Financeiro
description: Como emitir cobranças para clientes e acompanhar o recebimento no AltaJuris
sidebar_position: 12
---

# Financeiro

A página **Financeiro** é onde o escritório emite cobranças para os clientes e acompanha o que já foi pago. A emissão passa pelo **Asaas**, que gera o boleto, o PIX ou o link de cartão e avisa o AltaJuris quando o cliente paga.

## Quem alcança, e o que cada um vê

Esta é uma das duas telas do sistema em que **ser Administrador não basta** — a outra é a Tabela de Preços. O motivo é o mesmo nas duas: caixa e preço são decisão de quem é dono do escritório, não de quem administra o sistema.

| Função | O que vê |
|---|---|
| **Proprietária** | Todas as cobranças do escritório e o consolidado |
| **Financeiro** | Todas as cobranças do escritório e o consolidado |
| **Administrador** | Apenas as cobranças que ele mesmo emitiu |
| **Advogado** | Apenas as cobranças que ele mesmo emitiu |
| **Coordenação** | Não entra |
| **Secretária** | Não entra |

:::info Por que a Coordenação não entra
É a única coisa que a Coordenação tem **a menos** que um advogado, e é deliberado: ela coordena o trabalho e não olha receita. Em tudo o mais, a Coordenação está acima do Advogado.
:::

Os cartões de caixa do **Painel** seguem a mesma regra: quem não vê o caixa não recebe os valores — eles não aparecem zerados, eles não aparecem.

## Antes da primeira cobrança: configurar o recebimento

Sem esta etapa o botão de nova cobrança não funciona, porque não há para onde mandar o dinheiro.

1. Vá em **Configurações → Financeiro**
2. Informe os dados de quem recebe:
   - **Tipo** — Pessoa Física, MEI, Sociedade Limitada ou Associação
   - **Nome** da empresa ou nome completo
   - **CNPJ** ou **CPF**, conforme o tipo
   - **E-mail** e **telefone**
   - **Data de nascimento** — sua, ou do responsável legal da empresa
   - **Faturamento mensal** ou **renda mensal**
3. Salve

Os dados vão para o Asaas, que abre a conta de recebimento. A partir daí a página mostra a conta ativa e o final da carteira.

## Emitir uma cobrança

1. Na página **Financeiro**, clique em **Nova Cobrança**
2. Preencha:
   - **Nome do cliente** e **e-mail** — é para esse e-mail que o Asaas manda a cobrança
   - **CPF ou CNPJ** — opcional, mas exigido pelo Asaas para boleto registrado
   - **Valor**
   - **Vencimento**
   - **Descrição** — o que está sendo cobrado. Vale escrever o número do processo: é o que o cliente lê no boleto
   - **Forma de pagamento** — Boleto/PIX, só Boleto, só PIX, Cartão de crédito, ou deixar o cliente escolher
   - **Parcelas** — para cartão e boleto parcelado
   - **Observações** — internas, o cliente não vê
3. Clique em **Criar**

O cliente recebe a cobrança por e-mail. O link de pagamento fica disponível também na lista.

## Os status

O status vem do Asaas e muda sozinho quando o cliente paga — não é preciso dar baixa à mão.

| Status | O que significa |
|---|---|
| **Pendente** | Emitida, ainda não paga |
| **Pago** / **Recebido** | O cliente pagou |
| **Recebido em Dinheiro** | Baixa manual, para quem pagou fora do sistema |
| **Vencido** | Passou do vencimento sem pagamento |
| **Cancelado** | Cancelada antes do pagamento |
| **Estornado** / **Estorno em Andamento** | Devolvido ao cliente |
| **Contestado** | O cliente abriu contestação no cartão |

## Excluir um lançamento

O botão da lixeira remove o lançamento. Como toda ação destrutiva no AltaJuris, ele pede confirmação antes.

:::warning Cobrança já paga
Excluir o lançamento no AltaJuris não estorna o pagamento no Asaas. Estorno se faz no Asaas.
:::
