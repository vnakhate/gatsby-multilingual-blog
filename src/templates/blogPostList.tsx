import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Layout } from '../components/layout'
import { MetaTag } from '../components/metaTag'
import { BlogThumbnailCard } from '../components/blogThumbnailCard'
import { NavigationBar } from '../components/navigationBar'

import { BlogPostNode } from '../providers/types/blogPostNode'
import { LocaleData } from '../providers/types/localeData'
import { PageContext } from '../providers/types/pageContext'
import { i18nLanguages, i18nDefaultLanguage } from '../../i18nLanguages'

type Props = {
  location: {
    pathname: string
  }
  data: {
    locales: LocaleData
    allMarkdownRemark: {
      nodes: BlogPostNode[]
    }
  }
  pageContext: PageContext
}

type ComponentProps = {
  className?: string
  blogPosts: BlogPostNode[]
  pageContext: PageContext
  metaTag: object[]
}

const Component = ({ className, blogPosts, pageContext, metaTag }: ComponentProps) => (
  <Layout>
    <MetaTag title={'home'} meta={metaTag} />
    <div className={className}>
      {blogPosts.map((b) => (
        <BlogThumbnailCard key={b.id} data={b} />
      ))}
    </div>
    <NavigationBar pageContext={pageContext} />
  </Layout>
)

const StyledComponent = styled(Component)``

const BlogPostListTemplate = (props: Props) => {
  const blogPosts = props.data.allMarkdownRemark.nodes
  const userLang = navigator.language || navigator.userLanguage || i18nDefaultLanguage
  const metaTag =
    props.location.pathname === '/' &&
    userLang !== i18nDefaultLanguage &&
    i18nLanguages.includes(userLang)
      ? [{ 'http-equiv': 'refresh', content: `2;url=/${userLang}` }]
      : []

  return (
    <StyledComponent
      {...props}
      blogPosts={blogPosts}
      metaTag={metaTag}
      pageContext={props.pageContext}
    />
  )
}

export default BlogPostListTemplate

export const query = graphql`
  query ($language: String!, $limit: Int!, $offset: Int!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allMarkdownRemark(
      limit: $limit
      skip: $offset
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { language: { eq: $language } } }
    ) {
      nodes {
        id
        excerpt
        fields {
          slug
          language
          path
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
          cover {
            childImageSharp {
              gatsbyImageData(
                formats: [AUTO, WEBP]
                placeholder: BLURRED
                webpOptions: { quality: 90 }
                width: 350
                height: 200
                quality: 90
              )
            }
          }
        }
      }
    }
  }
`
