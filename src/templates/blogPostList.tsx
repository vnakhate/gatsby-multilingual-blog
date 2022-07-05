import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { useI18next } from 'gatsby-plugin-react-i18next'

import { Layout } from '../components/layout'
import { MetaTag } from '../components/metaTag'
import { BlogThumbnailCard } from '../components/blogThumbnailCard'

import { BlogPostNode } from '../providers/types/blogPostNode'
import { LocaleData } from '../providers/types/localeData'

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
}

type ComponentProps = {
  className?: string
  userLang: string
  pathname: string
  blogPosts: BlogPostNode[]
  navigate: any
}

const Component = ({ className, userLang, pathname, blogPosts, navigate }: ComponentProps) => (
  <Layout>
    <MetaTag
      title={'home'}
      meta={
        pathname === '/' && userLang === `ja`
          ? [{ 'http-equiv': 'refresh', content: `2;url=/ja` }]
          : []
      }
    />
    <div className={className}>
      {blogPosts.map((b) => (
        <BlogThumbnailCard key={b.id} data={b} navigate={navigate} />
      ))}
    </div>
    <div>navigation</div>
  </Layout>
)

const StyledComponent = styled(Component)``

const IndexPage = (props: Props) => {
  const blogPosts = props.data.allMarkdownRemark.nodes

  const userLang = navigator.language || navigator.userLanguage || `en`
  const { navigate } = useI18next()

  return (
    <StyledComponent
      {...props}
      pathname={props.location.pathname}
      userLang={userLang}
      blogPosts={blogPosts}
      navigate={navigate}
    />
  )
}

export default IndexPage

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
                width: 700
                height: 320
                quality: 90
              )
            }
          }
        }
      }
    }
  }
`
