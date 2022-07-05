import path from 'path'
import { GatsbyNode } from 'gatsby'
import { createFilePath } from 'gatsby-source-filesystem'

import { createPostListPage } from './src/providers/gatsby/createPostListPage'
import { BlogPostNode } from './src/providers/types/blogPostNode'

type Result = {
  data?: {
    allMarkdownRemark: {
      nodes: BlogPostNode[]
    }
  }
  errors?: Error
}

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result: Result = await graphql(
    `
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }, limit: 1000) {
          nodes {
            id
            fields {
              slug
              language
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(`There was an error loading your blog posts`, result.errors)
    return
  }

  const posts = result?.data?.allMarkdownRemark.nodes!

  if (posts.length === 0) return

  const blogPostTemplate = path.resolve(`${__dirname}/src/templates/blogPost.tsx`)

  posts.forEach((post, index) => {
    const [, year, month, title, lang] = post.fields.slug.split('/')

    const previousPostId = index === 0 ? null : posts[index - 1].id
    const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

    createPage({
      path: `/${lang}/_/${title}/`,
      component: blogPostTemplate,
      context: {
        id: post.id,
        previousPostId,
        nextPostId,
      },
    })
  })

  createPostListPage({
    data: posts,
    postsPerPage: 2,
    createPage,
    component: path.resolve(`${__dirname}/src/templates/blogPostList.tsx`),
  })

  createPostListPage({
    data: posts.filter((p) => p.fields.language === `en`),
    postsPerPage: 2,
    createPage,
    lang: `en`,
    component: path.resolve(`${__dirname}/src/templates/blogPostList.tsx`),
  })

  createPostListPage({
    data: posts.filter((p) => p.fields.language === `ja`),
    postsPerPage: 2,
    createPage,
    lang: `ja`,
    component: path.resolve(`${__dirname}/src/templates/blogPostList.tsx`),
  })
}

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value: slug,
    })

    const [, year, month, title, lang] = slug.split('/')

    createNodeField({
      name: `language`,
      node,
      value: lang,
    })

    createNodeField({
      name: `path`,
      node,
      value: `/_/${title}/`,
    })
  }
}

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type SiteSiteMetadata {
      author: String
      siteUrl: String
      social: String
      description: String
    }
    
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }
    
    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      tags: [String]
    }
    
    type Fields {
      slug: String
      language: String
      path: String
    }
  `)
}
