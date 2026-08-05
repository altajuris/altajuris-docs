import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Manual do Usuário',
      items: [
        'manual/index',
        'manual/primeiros-passos',
        'manual/casos',
        'manual/crm',
        'manual/sincronizacao',
        'manual/prazos',
        'manual/calendario',
        'manual/documentos',
        'manual/certificados',
        'manual/ia',
        'manual/notificacoes',
        'manual/configuracoes',
        'manual/usuarios',
      ],
    },
    {
      type: 'category',
      label: 'Arquitetura',
      items: [
        'architecture/overview',
        'architecture/backend',
        'architecture/frontend',
        'architecture/mobile',
        'architecture/infrastructure',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api-reference/api-core',
        'api-reference/doc-service',
        'api-reference/ai-service',
      ],
    },
    {
      type: 'category',
      label: 'Deploy',
      items: [
        'deployment/local-setup',
        'deployment/staging',
        'deployment/production',
      ],
    },
    {
      type: 'category',
      label: 'Database',
      items: [
        'database/schema',
        'database/migrations',
      ],
    },
    {
      type: 'category',
      label: 'Guias',
      items: [
        'guias/certificados-digitais',
      ],
    },
    {
      type: 'category',
      label: 'Contribuição',
      items: [
        'contributing/getting-started',
        'contributing/code-style',
        'contributing/testing',
      ],
    },
  ],
};

export default sidebars;
