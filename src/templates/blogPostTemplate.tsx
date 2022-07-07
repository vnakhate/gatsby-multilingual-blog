/** 1. Imports **/
import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../components/layout'
import { MetaTag } from '../components/metaTag'
import { WithSideBar } from '../components/withSideBar'
import { BlogPost } from '../components/blogPost/blogPost'

import { LocaleData } from '../providers/types/localeData'
import { BlogPostNode } from '../providers/types/blogPostNode'

/** 2. Types **/
type Props = {
  className?: string
  data: {
    locales: LocaleData
    markdownRemark: BlogPostNode
  }
}

/** 3. Base component **/
const BlogPostTemplate = ({ data }: Props) => (
  <Layout>
    <MetaTag />
    <WithSideBar>
      <BlogPost data={data.markdownRemark} />
    </WithSideBar>
  </Layout>
)
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
        language
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
