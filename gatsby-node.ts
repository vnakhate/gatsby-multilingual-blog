import path from 'path'
import { GatsbyNode } from 'gatsby'
import { createFilePath } from 'gatsby-source-filesystem'

import { createBlogPostPagination } from './src/providers/gatsby/createBlogPostPagination'
import { BlogPostNode } from './src/providers/types/blogPostNode'
import { GatsbyGraphqlResult } from './src/providers/types/gatsbyGraphql'
import { i18nLanguages } from './i18nLanguages'

type Result = GatsbyGraphqlResult<{
  allMarkdownRemark: {
    nodes: BlogPostNode[]
  }
}>

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

  // Create pages for all blog posts
  posts.forEach((post, index) => {
    const [, year, month, title, lang] = post.fields.slug.split('/')

    const previousPostId = index === 0 ? null : posts[index - 1].id
    const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

    createPage({
      path: `/${lang}/_/${title}/`,
      component: path.resolve(`${__dirname}/src/templates/blogPostTemplate.tsx`),
      context: {
        id: post.id,
        previousPostId,
        nextPostId,
      },
    })
  })

  const postsPerPage = 7

  // Set pagination for each language
  i18nLanguages.forEach((lang) => {
    createBlogPostPagination({
      data: posts.filter((p) => p.fields.language === lang),
      postsPerPage,
      createPage,
      lang,
      component: path.resolve(`${__dirname}/src/templates/blogPostListTemplate.tsx`),
    })
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
      relatedPosts: [MarkdownRemark]
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
    
    type PopularTags {
      language: String
      tags: [PopularTag]
    }
    
    type PopularTag {
      value: String
      count: Int
    }
  `)
}

export const createResolvers: GatsbyNode['createResolvers'] = ({ createResolvers }) => {
  createResolvers({
    Query: {
      popularTags: {
        type: `PopularTags`,
        args: {
          language: `String!`,
        },
        resolve: async (source: any, args: any, context: any) => {
          const { entries } = await context.nodeModel.findAll({
            type: `MarkdownRemark`,
            query: {
              filter: {
                fields: {
                  language: {
                    eq: args.language,
                  },
                },
              },
            },
          })

          const t: { [key: string]: number } = {}

          entries.forEach((e: BlogPostNode) => {
            e.frontmatter.tags.forEach((tag) => {
              t[tag] = ~~t[tag] + 1
            })
          })

          return {
            language: args.language,
            tags: Object.keys(t)
              .map((tag) => ({ value: tag, count: t[tag] }))
              .sort((a, b) => b.count - a.count),
          }
        },
      },
    },
  })

  createResolvers({
    MarkdownRemark: {
      relatedPosts: {
        type: [`MarkdownRemark`],
        resolve: async (source: BlogPostNode, args: any, context: any) => {
          const { entries } = await context.nodeModel.findAll({
            type: `MarkdownRemark`,
            query: {
              limit: 8,
              filter: {
                id: {
                  ne: source.id,
                },
                fields: {
                  language: {
                    eq: source.fields.language,
                  },
                },
                frontmatter: {
                  tags: {
                    in: source.frontmatter.tags,
                  },
                },
              },
            },
          })

          return entries
        },
      },
    },
  })
}
