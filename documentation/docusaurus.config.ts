import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "FlutterConfLatam 2025",
  tagline: "La conferencia de Flutter más importante de Latinoamérica",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://flutterconflatam.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "flutterconflatam", // Usually your GitHub org/user name.
  projectName: "flutter-conf-latam", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "es",
    locales: ["es"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/flutterconflatam/flutter-conf-latam/tree/main/documentation/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/flutterconflatam/flutter-conf-latam/tree/main/documentation/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/flutterconf-social-card.jpg",
    navbar: {
      title: "FlutterConfLatam 2025",
      logo: {
        alt: "FlutterConfLatam Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "eventSidebar",
          position: "left",
          label: "Documentación",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://flutterconflatam.dev",
          label: "Sitio Web",
          position: "right",
        },
        {
          href: "https://github.com/juanleondev/FlutterConfLatam",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentación",
          items: [
            {
              label: "Información General",
              to: "/docs/informacion-general/informacion-evento",
            },
            {
              label: "Ejes de Organización",
              to: "/docs/ejes-organizacion/agenda-experiencia",
            },
          ],
        },
        {
          title: "Comunidad",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/FlutterConfLatam",
            },
            {
              label: "LinkedIn",
              href: "https://linkedin.com/company/flutterconflatam",
            },
            {
              label: "Email",
              href: "mailto:flutterconflatam@gmail.com",
            },
          ],
        },
        {
          title: "Más",
          items: [
            {
              label: "Sitio Web",
              href: "https://flutterconflatam.dev",
            },
            {
              label: "GitHub",
              href: "https://github.com/flutterconflatam/flutter-conf-latam",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FlutterConfLatam. Construido con Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
