// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KVIB Styleguides',
  tagline: 'Styleguides',
  url: 'https://kartverket.github.io/',
  baseUrl: '/kvib/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kartverket', // Usually your GitHub org/user name.
  projectName: 'kvib', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined',
    },
    {
      href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve('./src/css/main.css'),
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        colorMode: {
          defaultMode: 'light',
          disableSwitch: true,
          respectPrefersColorScheme: false,
        },
        navbar: {
          logo: {
            alt: 'Kartverket logo',
            src: 'img/logo/kartverket_liggende_web.svg',
          },
          items: [
            {
              type: 'doc',
              docId: 'figmaID',
              position: 'left',
              label: 'Om Kvib',
            },
            {
              type: 'doc',
              docId: 'designsystems/uuID',
              position: 'left',
              label: 'Designsystem',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Docs',
              items: [
                {
                  label: 'KVIB Figma',
                  to: '/',
                },
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'Stack Overflow',
                  href: '#',
                },
                {
                  label: 'Discord',
                  href: '#',
                },
                {
                  label: 'Twitter',
                  href: '#',
                },
              ],
            },
            {
              title: 'More',
              items: [
                {
                  label: 'GitHub',
                  href: '#',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} KVIB-Kartverket.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,

        },
      }),
};

module.exports = config;