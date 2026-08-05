---
title: CRM Jurídico
description: Como gerenciar clientes, contatos e partes processuais no AltaJuris
sidebar_position: 4
---

# CRM Jurídico

O CRM do AltaJuris centraliza todas as pessoas e empresas que o escritório precisa acompanhar: clientes, partes contrárias, testemunhas, peritos e outros envolvidos em processos.

## Visão geral

Acesse **CRM** na sidebar para ver o painel de contatos.

### Busca global

No topo do painel há uma barra de busca unificada. Ao digitar **2 ou mais caracteres**, a exibição de abas é substituída por uma lista única de resultados que inclui simultaneamente clientes e contatos de todas as categorias. Cada resultado exibe um badge colorido indicando sua categoria (verde para clientes, vermelho para partes contrárias etc.), e um resumo do tipo "5 resultados — 2 Clientes · 3 Partes contrárias" aparece acima da lista.

Clique no **×** à direita da barra para limpar a busca e retornar à visualização por abas.

:::tip Busca por CPF/CNPJ
A busca ignora formatação — `038.393.298-09` e `03839329809` retornam o mesmo resultado.
:::

### Abas (sem busca ativa)

Quando a barra de busca está vazia, o painel exibe duas abas:

| Aba | O que exibe |
|---|---|
| **Clientes** | Contatos com categoria "Cliente" — quem contrata o escritório |
| **Contatos** | Todos os contatos (partes contrárias, testemunhas, peritos e outros) |

## Cadastrar novo contato

1. Clique em **+ Novo Contato**
2. Preencha as informações:
   - **Nome** *(obrigatório)* — salvo automaticamente em Title Case
   - **Categoria** — Cliente, Parte Contrária, Testemunha, Perito, Juiz ou Outro
   - **CPF/CNPJ** — com ou sem formatação
   - **Email, telefone, endereço** — campos opcionais
3. Clique em **Salvar**

:::warning CPF/CNPJ único por escritório
O sistema não permite cadastrar dois contatos com o mesmo CPF ou CNPJ no mesmo escritório. Se você tentar, receberá a mensagem **"Já existe um contato com este CPF/CNPJ cadastrado."**

Isso evita que a mesma pessoa apareça duplicada no sistema — o que pode acontecer quando processos são importados do tribunal com o nome em caixa alta e o contato já existe em Title Case.
:::

## Padrão de nomes — Title Case

Todos os nomes são padronizados automaticamente ao salvar:

| Entrada (como vem do tribunal) | Salvo como |
|---|---|
| `MARISTELA DE LIMA MILANI` | `Maristela de Lima Milani` |
| `BANCO BRADESCO S.A.` | `Banco Bradesco S.A.` |
| `MRV ENGENHARIA E PARTICIPAÇÕES S.A.` | `MRV Engenharia e Participações S.A.` |
| `CARON INDÚSTRIA E COMÉRCIO EIRELI` | `Caron Indústria e Comércio Eireli` |

**Regras aplicadas:**
- Preposições (`de`, `da`, `do`, `dos`, `das`, `e`, `em`, `com`…) ficam em minúsculas
- Abreviações com pontuação (`S.A.`, `S/A`, `LTDA.`, `DRT-8`) ficam em maiúsculas
- Siglas curtas (`ME`, `CEF`, `PRFN`) ficam em maiúsculas
- Demais palavras ficam com inicial maiúscula

## Perfil do contato

Ao clicar em um contato, você acessa o perfil completo com:

### Informações gerais
- Nome, CPF/CNPJ, email, telefone, endereço
- Categoria e tags personalizadas
- Data de criação e última atualização

### Casos vinculados
Lista todos os processos em que o contato participa e qual o papel dele (autor, réu, curador, testemunha etc.). Clique em qualquer caso para abri-lo diretamente.

### Histórico de consultas
Registro de consultas jurídicas realizadas com o contato.

### Notas
Anotações internas sobre o contato, visíveis apenas para a equipe do escritório.

### Cobranças
Histórico financeiro vinculado aos casos do contato.

## Editar contato

1. Acesse o perfil do contato
2. Clique no botão **Editar** (ícone de lápis)
3. Altere as informações desejadas
4. Clique em **Salvar**

O nome é repadronizado para Title Case ao salvar, mesmo que você digite em caixa alta.

## Categorias de contatos

| Categoria | Uso |
|---|---|
| **Cliente** | Quem contratou o escritório — aparece na aba "Clientes" |
| **Parte Contrária** | Réu, reclamado ou polo passivo em qualquer processo |
| **Testemunha** | Testemunha em processo |
| **Perito** | Perito judicial ou assistente técnico |
| **Juiz** | Magistrado responsável pelo processo |
| **Outro** | Qualquer outro envolvido |

:::info Importação automática de partes
Quando você importa ou sincroniza um processo, o AltaJuris cria automaticamente os contatos das partes como **Parte Contrária** (ou **Autor**, dependendo do polo). Se o CPF/CNPJ da parte já estiver cadastrado, o sistema vincula ao contato existente em vez de criar um duplicado.
:::

## Vincular contato a um caso

Você pode vincular um contato existente a um caso diretamente:

1. Abra o caso
2. Vá na aba **Partes**
3. Clique em **+ Adicionar Parte**
4. Busque o contato pelo nome ou CPF
5. Selecione o papel (autor, réu, curador etc.)
6. Clique em **Adicionar**

## Buscar e filtrar contatos

### Busca global (acima das abas)

A barra de busca global no topo do painel pesquisa em **clientes e contatos ao mesmo tempo**. Use-a para encontrar qualquer pessoa ou empresa pelo nome, CPF ou CNPJ independente de qual aba ela está.

### Busca por aba

Dentro de cada aba há uma barra de busca secundária para filtrar apenas os contatos daquela categoria. Você também pode filtrar por categoria usando o seletor à direita da barra.

- **Buscar** pelo nome, CPF/CNPJ, email ou telefone
- **Filtrar** por categoria (Parte Contrária, Testemunha, Perito…)

## Excluir contato

:::danger Atenção
Excluir um contato remove **todos** os vínculos com casos, consultas e notas. Esta ação não pode ser desfeita.

Antes de excluir, verifique se o contato não está vinculado a processos ativos.
:::

1. Acesse o perfil do contato
2. Clique em **⋮** (menu de opções)
3. Selecione **Excluir**
4. Confirme a exclusão na janela de diálogo
