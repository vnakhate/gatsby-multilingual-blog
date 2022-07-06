import React from 'react'
import Helmet from 'react-helmet'
import { useSiteMetadata } from '../providers/hooks/useSiteMetadata'

type Props = {
  title?: string
  description?: string
  lang?: string
  meta?: any[] | []
  socialShareImage?: string
}

export const MetaTag = ({
  title,
  description,
  lang = 'en',
  meta = [],
  socialShareImage,
}: Props) => {
  const { siteMetadata } = useSiteMetadata()

  const metaTitle = title ? `${title} | ${siteMetadata.title}` : siteMetadata.title
  const metaDescription = description || siteMetadata.description

  return (
    // @ts-ignore
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: siteMetadata.url,
        },
        {
          property: `og:image`,
          content: socialShareImage || siteMetadata.ogImage,
        },

        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author,
        },
        {
          name: `twitter:url`,
          content: siteMetadata.url,
        },
        {
          name: `twitter:image`,
          content: socialShareImage || siteMetadata.twitterImage,
        },
      ].concat(meta)}
    />
  )
}
