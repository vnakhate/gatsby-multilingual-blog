import { graphql, useStaticQuery } from 'gatsby'
import { SiteMetadata } from '../types/siteMetadata'

export const useSiteMetadata = (): { siteMetadata: SiteMetadata } => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
          url
          ogImage
          twitterImage
        }
      }
    }
  `)

  return { siteMetadata: data.site.siteMetadata }
}
