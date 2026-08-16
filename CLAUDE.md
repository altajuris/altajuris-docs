# altajuris-docs

## Propósito
Documentação pública do produto (Docusaurus 3): guia do usuário, manual de funcionalidades,
FAQs, changelogs. Também serve de fonte para o chatbot de auto-ajuda (RAG).

## Stack
Docusaurus 3, React 18, TypeScript, MDX
Deploy: S3 + CloudFront | Domínio: docs.altajuris.com.br

## Estrutura
```
docs/
  intro.md
  getting-started/
    01-cadastro.md
    02-primeiro-caso.md
    03-equipe.md
  features/
    crm.md
    casos.md
    prazos.md
    calendario.md
    documentos.md
    tarefas.md
    time-tracking.md
    financeiro.md
    publicacoes.md
    ai-juridica.md
  modules/
    captacao-leads.md
    portal-cliente.md
    auto-ajuda.md
  api/
    intro.md            ← referência da API pública futura
  changelog/
    YYYY-MM.md
blog/                   ← posts de features e jurídico
static/img/             ← screenshots da UI
```

## Como escrever docs (padrão)
```
- Português brasileiro correto (acentos obrigatórios)
- Tom profissional mas acessível (audiência: advogados não técnicos)
- Screenshots atualizados a cada release relevante
- Estrutura: Objetivo → Passo a passo → Dicas → FAQ
- Cada página termina com link para a próxima lógica
```

## Integração com chatbot de auto-ajuda
```
Ao fazer deploy de altajuris-docs:
  worker recebe job via SQS legaltech-embeddings
  → doc_indexer.py lê todos os .md
  → gera embeddings via Amazon Titan
  → armazena no Aurora (pgvector)
  → chatbot usa RAG sobre esses embeddings

Regra: TODO novo recurso deve ter sua doc criada antes ou junto do deploy.
```

## Deploy
```bash
npm run build          # gera static em /build
aws s3 sync build/ s3://altajuris-docs-{env}/ --delete
aws cloudfront create-invalidation --distribution-id {id} --paths "/*"

# Via CodePipeline:
main → CodeBuild → S3 sync → CloudFront invalidation
```

## Drawio e PPTX
```
Diagramas de arquitetura: armazenados em S3 altajuris-assets
Apresentações: S3 altajuris-assets/presentations/
Links compartilháveis diretos do S3 (presigned com longa expiração)
```

## O que NUNCA fazer
- Documentar comportamentos que ainda não estão em produção (confunde advogados)
- Screenshots com dados reais de clientes
- Escrever sem acentos (feedbacking-portuguese-accents.md)
- Publicar changelog sem descrever o impacto para o usuário
