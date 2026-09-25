---
title: Auditoria
description: Quem fez o quê no AltaJuris — o registro de ações do escritório
sidebar_position: 13
---

# Auditoria

A **Auditoria** guarda quem fez o quê no sistema: cada criação, alteração e exclusão fica registrada com autor, data, hora e de onde partiu. É o que permite responder "quem apagou este prazo?" sem depender da memória de ninguém.

Ela fica em **Configurações → Auditoria**.

## Quem entra, e quanto vê

| Função | O que vê |
|---|---|
| **Proprietária** | Tudo que aconteceu no escritório |
| **Administrador** | Tudo que aconteceu no escritório |
| **Coordenação** | Tudo que aconteceu no escritório |
| **Secretária** | Tudo que aconteceu no escritório |
| **Advogado** | **Apenas as próprias ações** |
| **Financeiro**, **Estagiário**, **Somente Leitura** | Não entram |

:::info O Advogado entra, mas só se vê
Até 22/09/2026 qualquer pessoa com acesso à tela via o escritório inteiro. Hoje o Advogado continua entrando — é útil conferir o que ele mesmo fez e quando — mas a lista mostra só as ações dele. Quem supervisiona é quem enxerga a equipe.
:::

## O que fica registrado

Toda operação que **cria, altera ou apaga** alguma coisa. Consulta não entra: abrir um caso para ler não é um evento de auditoria, e registrar leitura encheria a lista e esconderia o que importa.

Cada registro guarda:

| Campo | O que traz |
|---|---|
| **Usuário** | Quem fez |
| **Ação** | Criou, alterou, excluiu |
| **Recurso** | Sobre o que foi — caso, prazo, contato, usuário, documento |
| **ID do Recurso** | Qual deles, para abrir o registro exato |
| **Data** | Quando |
| **Localização** | A cidade de onde a ação partiu, quando dá para determinar |
| **Metadados** | O detalhe da operação, no registro completo |

## Encontrar uma ação

Use os **Filtros** no topo da página. Eles se combinam:

- **Usuário** — todas as ações de uma pessoa
- **Ação** — só exclusões, por exemplo
- **Recurso** e **ID do Recurso** — a história de um caso ou contato específico
- **Data** — o período

Clique em qualquer linha para abrir o **registro completo**, com os metadados e a localização.

## Exportar

O botão de exportação gera um **CSV** com o que está filtrado na tela, para arquivar ou levar a uma auditoria externa.

A exportação respeita exatamente o mesmo recorte da tela: quem vê só as próprias ações exporta só as próprias ações.

:::warning Contém dado pessoal
O CSV leva IP e localização de cada pessoa. Trate o arquivo como documento restrito — é dado pessoal sob a LGPD, e sair do sistema não o torna público.
:::

## Por que cada pessoa precisa da própria conta

A auditoria só responde "quem fez" se cada pessoa entrar com a própria conta. Conta compartilhada transforma todo o registro em "alguém da secretaria", que é o mesmo que não ter registro.
