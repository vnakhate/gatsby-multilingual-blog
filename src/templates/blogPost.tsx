import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { Layout } from '../components/layout'
import { MetaTag } from '../components/metaTag'
import { WithSideBar } from '../components/withSideBar'

import { LocaleData } from '../providers/types/localeData'
import { BlogPostNode } from '../providers/types/blogPostNode'
import styled from 'styled-components'

type Props = {
  className?: string
  data: {
    locales: LocaleData
    markdownRemark: BlogPostNode
  }
}

const Component = ({ className, data }: Props) => (
  <Layout>
    <MetaTag />
    <WithSideBar>
      <div className={className}>
        <GatsbyImage alt={'cover'} image={getImage(data.markdownRemark.frontmatter.cover)!} />
        <h2>{data.markdownRemark.frontmatter.title}</h2>
        <ul>
          {data.markdownRemark.frontmatter.tags.map((t) => (
            <li key={t}>#{t}</li>
          ))}
        </ul>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </div>
    </WithSideBar>
  </Layout>
)

const BlogPostTemplate = styled(Component)`
  > h2 {
    font-size: 4rem;
    font-weight: bold;
  }
`

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $language: String!
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        cover {
          childImageSharp {
            gatsbyImageData(
              formats: [AUTO, WEBP]
              placeholder: BLURRED
              webpOptions: { quality: 90 }
              width: 700
              height: 400
              quality: 90
            )
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
