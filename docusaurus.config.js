// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Oreon Wiki',
  tagline: 'Community-driven documentation and guides for the Oreon Project',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'oreonproject', // Usually your GitHub org/user name.
  projectName: 'wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/oreonproject/wiki/tree/main/',
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/oreonwiki.png',
      navbar: {
        logo: {
          alt: 'Oreon Project Logo',
          src: 'img/oreonwiki.png',
          srcDark: 'img/oreonwikidark.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Wiki',
          },
          {
            href: 'https://oreonproject.org/docs/',
            label: 'Official Docs',
            position: 'left',
          },
          {
            href: 'https://oreonproject.org/',
            label: 'Oreon Website',
            position: 'right',
          },
          {
            href: 'https://github.com/oreonproject/wiki',
            label: 'Contribute',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Wiki Home',
                to: '/docs/intro',
              },
              {
                label: 'Official Docs',
                href: 'https://oreonproject.org/docs/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Oreon Website',
                href: 'https://oreonproject.org/',
              },
              {
                label: 'YouTube',
                href: 'https://youtube.com/@oreonproject',
              },
              {
                label: 'Contribute to Wiki',
                href: 'https://github.com/oreonproject/wiki',
              },
            ],
          },
          {
            title: 'Development',
            items: [
              {
                label: 'Main Repository',
                href: 'https://github.com/oreonproject/',
              },
              {
                label: 'Oreon Git',
                href: 'https://git.oreonproject.org/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Oreon Project. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
