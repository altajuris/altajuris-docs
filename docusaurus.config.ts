import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'AltaJuris',
  tagline: 'Plataforma Inteligente para Escritórios de Advocacia',
  favicon: 'img/favicon.ico',
  // O rebrand para AltaJuris passou por aqui e não levou estes quatro campos.
  // 🔑 O site saiu do GitHub Pages para a AWS em 17/11/2026 — decisão do
  // Juliano: 100% AWS, como os demais serviços. Com domínio próprio o site
  // passa a viver na RAIZ, então `baseUrl` é '/'.
  //
  // ⚠ Este par é a causa clássica de "o site abre como texto cru": o HTML
  // pede os assets a partir do `baseUrl`, e se ele não casar com onde o site
  // está servido, todo CSS e JS tomam 404 sem nada ficar vermelho no build.
  // Foi o que aconteceu entre o rebrand de 16/08 e a correção para o Pages.
  //
  // O `url` vem do ambiente porque dev e prod têm hosts diferentes e o
  // mesmo repositório serve os dois. Sem a variável, o sitemap e os links
  // canônicos do site de DEV apontariam para produção.
  url: process.env.DOCS_URL || 'https://docs.altajuris.com.br',
  baseUrl: '/',
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
