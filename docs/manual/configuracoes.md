---
title: Configurações
description: Como configurar credenciais, certificados, usuários e planos no AltaJuris
sidebar_position: 10
---

# Configurações

A página de Configurações permite gerenciar todos os aspectos da sua conta e do seu escritório no AltaJuris.

## Credenciais de tribunais

As credenciais permitem que o AltaJuris se autentique nos sistemas dos tribunais para sincronizar andamentos e baixar documentos.

### Adicionar credencial

1. Acesse **Configurações** na sidebar
2. Vá para a seção **Integrações**
3. Clique em **Nova Credencial de Tribunal**
4. Selecione o **sistema**:
   - **eSAJ** — Para tribunais estaduais (TJSP, TJRJ, etc.)
   - **PJe** — Para Processo Judicial Eletrônico
5. Selecione os **tribunais** que a credencial cobrirá
6. Escolha o **método de autenticação**:
   - Usuário e senha
   - Certificado digital A1
   - Certificado digital A3
7. Preencha os dados conforme o método escolhido
8. Clique em **Salvar**

### Gerenciar credenciais existentes

Na lista de credenciais, cada uma exibe:

- Sistema e tribunais vinculados
- Método de autenticação
- Status da conexão (ativo, erro, expirado)
- Data do último uso

Para editar ou remover, use os ícones de ação ao lado de cada credencial.

## Fontes de busca por OAB

Configure quais fontes o sistema consultará ao importar processos por OAB:

1. Em **Configurações > Importação por OAB**
2. Ative ou desative as fontes:
   - **DataJud/CNJ** — Cobertura nacional (recomendado manter ativo)
   - **eSAJ** — Dados detalhados para tribunais estaduais
3. O sistema utilizará as fontes ativas ao importar processos

:::tip Recomendação
Mantenha ambas as fontes ativas para obter a cobertura mais completa possível. O DataJud oferece cobertura nacional, enquanto o eSAJ fornece dados mais detalhados para tribunais estaduais.
:::

## Certificados digitais

Gerencie seus certificados digitais ICP-Brasil para autenticação nos tribunais.

Para instruções detalhadas, consulte a página [Certificados Digitais](./certificados).

### Resumo rápido

| Ação | Como fazer |
|---|---|
| Adicionar certificado A1 | Configurações > Integrações > Nova Credencial > Upload do `.pfx` |
| Adicionar certificado A3 | Configurações > Integrações > Nova Credencial > Conectar Token |
| Ver validade | Indicador de cor na credencial (verde/amarelo/vermelho) |
| Remover certificado | Clique em "Remover Certificado" na credencial |
| Atualizar A1 | Faça novo upload do arquivo |
| Atualizar A3 | Clique em "Reconectar Token" |

## Usuários e permissões

Gerencie os membros do seu escritório e suas permissões.

### Funções disponíveis

| Função | Badge | Permissões |
|---|---|---|
| **Administrador** | Vermelho | Acesso total: casos, configurações, usuários, faturamento, analytics |
| **Secretária** | Laranja | Visão total do escritório (casos, prazos, calendário, analytics, auditoria) — sem Configurações e Usuários |
| **Advogado** | Azul | Gerenciar casos, documentos, prazos, modelos, usar IA |
| **Estagiário** | Verde | Visualizar e criar casos, prazos, documentos, usar IA |
| **Somente Leitura** | Cinza | Visualizar casos, prazos e documentos |
| **Cliente** | Âmbar | Acesso ao portal do cliente |

### Convidar novo usuário

1. Acesse **Configurações > Usuários**
2. Clique em **Convidar Usuário**
3. Preencha o **e-mail** do convidado
4. Selecione a **função** (administrador, secretária, advogado, estagiário, somente leitura)
5. Clique em **Enviar Convite**
6. O convidado receberá um e-mail com link para criar a conta

:::info Normalização automática de nome
Ao aceitar o convite, o nome informado é automaticamente formatado em **Title Case** — por exemplo, "JOAO DA SILVA" se torna "João da Silva".
:::

### Gerenciar usuários

Na lista de usuários, você pode:

- **Alterar função** — Promover ou alterar o nível de acesso
- **Desativar** — Revogar acesso sem excluir o histórico
- **Remover** — Excluir o usuário do escritório

:::warning Gerenciamento restrito
As ações de convidar, alterar função, desativar e remover usuários estão disponíveis apenas para **Administradores**. A **Secretária** pode visualizar a lista de usuários, mas não pode gerenciá-los.
:::

### Desativar usuário com reatribuição

Ao tentar desativar um advogado que possui pendências em nome dele, o sistema exibe automaticamente um modal de confirmação com os seguintes contadores:

- Número de **casos** com o advogado como responsável
- Número de **prazos pendentes** atribuídos a ele
- Número de **consultas agendadas** com ele

Antes de confirmar a desativação, é obrigatório selecionar um **advogado substituto**. Ao confirmar, o sistema transfere de forma atômica todos os casos, prazos e consultas para o novo responsável em uma única operação, sem deixar registros órfãos.

## Planos e faturamento

### Planos para cidadãos

| Plano | Preço | Recursos |
|---|---|---|
| **Básico** | R$ 29/mês | Upload de documentos, classificação IA, 1 relatório/mês |
| **Pro** | R$ 79/mês | Tudo do Básico + análise de viabilidade, chat IA, WhatsApp parser |
| **Avançado** | R$ 149/mês | Tudo do Pro + case builder, petição automática, marketplace |

### Plano para advogados e escritórios

| Plano | Preço | Recursos |
|---|---|---|
| **Escritório** | R$ 199–499/mês | Casos ilimitados, sincronização, IA completa, equipe, marketplace |

### Gerenciar plano

1. Acesse **Configurações > Planos**
2. Visualize seu plano atual e limites de uso
3. Para **upgrade**: clique em "Mudar Plano" e selecione o desejado
4. Para **downgrade**: entre em contato com o suporte

### Faturamento

O faturamento é gerenciado via **Asaas**:

- **Pagamento recorrente** — Cobrança mensal automática
- **Métodos aceitos** — Cartão de crédito, boleto bancário, PIX
- **Histórico** — Consulte faturas anteriores em Configurações > Faturamento
- **Notas fiscais** — Emitidas automaticamente após cada pagamento

:::info Período de teste
Novos usuários possuem um período de teste gratuito. Ao final do período, será necessário assinar um plano para continuar usando a plataforma.
:::

## Dados do escritório

Em **Configurações > Escritório**, gerencie as informações do escritório:

- **Nome do escritório**
- **CNPJ**
- **Endereço**
- **Telefone**
- **E-mail de contato**
- **Logo** — Exibido nos relatórios PDF

## Dados pessoais

Em **Configurações > Perfil**, gerencie suas informações pessoais:

- **Nome completo**
- **E-mail**
- **Número da OAB** e seccional
- **Alterar senha**
- **Foto de perfil**

## Próximos passos

- [Primeiros Passos](./primeiros-passos) — Volte ao início se precisar reconfigurar
- [Certificados Digitais](./certificados) — Instruções detalhadas de certificados
- [Sincronização com Tribunais](./sincronizacao) — Verifique se as credenciais estão funcionando
