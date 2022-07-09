import type { GatsbyConfig } from 'gatsby'
import { theme } from './src/styles/theme'
import { i18nLanguages, i18nDefaultLanguage } from './i18nLanguages'

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Multilingual Blog`,
    description: `add desc`,
    author: `Toshiki Kamei`,
    url: 'https://url.sample.com',
    ogImage: '',
    twitterImage: '',
  },
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-typescript-checker`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: i18nLanguages,
        defaultLanguage: i18nDefaultLanguage,
        fallbackLanguage: i18nDefaultLanguage,
        generateDefaultLanguagePage: true,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: `https://example.com`,
        // if you are using trailingSlash gatsby config include it here, as well (the default is 'always')
        // trailingSlash: 'always',
        // you can pass any i18next options
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          nsSeparator: false,
        },
        pages: [
          {
            matchPath: `/:lang/_/:uid`,
            getLanguageFromPath: true,
            languages: i18nLanguages,
          },
          {
            matchPath: `/:lang/page/:uid`,
            getLanguageFromPath: true,
            languages: i18nLanguages,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Roboto',
              variants: ['300', '400', '500', '600', '700'],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/contents`,
        name: `contents`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              quality: 90,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              showLineNumbers: true,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-autolink-headers`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Multilingual Blog`,
        short_name: `Gatsby`,
        start_url: `/`,
        background_color: theme.color.backgroundWhite,
        theme_color: theme.color.backgroundWhite,
        display: `fullscreen`,
        icon: `${__dirname}/src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

export default config
