import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Tracepaper Docs",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "tracepaper.draftsman.io/docs",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f9fcfc", // Lichte teal-achtige achtergrond
          lightgray: "#d6f0f0", // Subtiele achtergrondkleur
          gray: "#5a9a9a", // Neutrale teal voor tekst en elementen
          darkgray: "#286666", // Donkere teal voor kopteksten
          dark: "#004c4c", // Diepe teal voor sterke contrasten
          secondary: "#007373", // Secundaire teal voor accenten
          tertiary: "#20B2AA", // Lichte teal voor extra accenten
          highlight: "rgba(0, 115, 115, 0.25)", // Teal-highlight met meer dekking
          textHighlight: "#cce4e4", // Contrastvolle achtergrond voor tekstmarkering
        },
        darkMode: {
          light: "#102525", // Donkere teal als subtiele achtergrond
          lightgray: "#1a4b4b", // Contrasterende grijstint
          gray: "#317f7f", // Neutrale teal voor tekst en elementen
          darkgray: "#63b3b3", // Lichte teal voor sterke contrasten
          dark: "#a8dede", // Helder teal voor tekst
          secondary: "#20B2AA", // Lichte teal voor accenten
          tertiary: "#007373", // Donkere teal voor kopteksten en accenten
          highlight: "rgba(32, 178, 170, 0.3)", // Transparante teal-highlight
          textHighlight: "#8fd7d7", // Contrasterende achtergrond voor tekstmarkering
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
