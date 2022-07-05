import type { ImageDataLike } from 'gatsby-plugin-image'

export type BlogPostNode = {
  id: string
  html: string
  fields: {
    slug: string
    language: string
    path: string
  }
  frontmatter: {
    date: string
    title: string
    description: string
    tags: string[]
    cover: ImageDataLike
  }
}
