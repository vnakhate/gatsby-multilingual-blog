import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../components/layout'

import { useI18next } from 'gatsby-plugin-react-i18next'

const BlogPostTemplate = (props) => {
  const { changeLanguage, language } = useI18next()
  console.log(props)
  return (
    <Layout changeLanguage={changeLanguage} language={language}>
      <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!, $previousPostId: String, $nextPostId: String) {
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
