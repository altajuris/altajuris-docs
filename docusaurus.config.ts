import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'AltaJuris',
  tagline: 'Plataforma Inteligente para Escritórios de Advocacia',
  favicon: 'img/favicon.ico',
  // O rebrand para AltaJuris passou por aqui e não levou estes quatro campos.
  // O repositório é `altajuris/altajuris-docs` e o Pages serve em
  // https://altajuris.github.io/altajuris-docs/ — com `baseUrl: '/'` o HTML
  // pedia `/assets/css/...` na raiz do domínio e tomava 404: o site abria
  // como texto cru, sem estilo e sem JavaScript, desde o rebrand de 16/08.
  url: 'https://altajuris.github.io',
  baseUrl: '/altajuris-docs/',
  organizationName: 'altajuris',
  projectName: 'altajuris-docs',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'AltaJuris',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentação',
        },
        {
          href: 'https://github.com/GrupoJLM',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentação',
          items: [
            { label: 'Arquitetura', to: '/docs/architecture/overview' },
            { label: 'API Reference', to: '/docs/api-reference/api-core' },
            { label: 'Deploy', to: '/docs/deployment/local-setup' },
          ],
        },
        {
          title: 'Repositórios',
          items: [
            { label: 'Backend', href: 'https://github.com/GrupoJLM/legaltech-backend' },
            { label: 'Frontend', href: 'https://github.com/GrupoJLM/legaltech-web' },
            { label: 'Mobile', href: 'https://github.com/GrupoJLM/legaltech-mobile' },
          ],
        },
        {
          title: 'Mais',
          items: [
            { label: 'GrupoJLM', href: 'https://github.com/GrupoJLM' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} GrupoJLM. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['python', 'bash', 'dart', 'hcl', 'yaml'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
