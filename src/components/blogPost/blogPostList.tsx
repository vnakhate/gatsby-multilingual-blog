import React from 'react'
import styled from 'styled-components'
import { BlogPostThumbnailCard } from './blogPostThumbnailCard'
import { BlogPostListComponent } from './blogPostListComponent'
import { BlogPostNode } from '../../providers/types/blogPostNode'

type Props = {
  className?: string
  blogPosts: BlogPostNode[]
}

const Component = ({ className, blogPosts }: Props) => (
  <BlogPostListComponent className={className}>
    {blogPosts.map((b, i) => (
      <BlogPostThumbnailCard key={b.id} data={b} first={i === 0} />
    ))}
  </BlogPostListComponent>
)

export const BlogPostList = styled(Component)`
  grid-template-columns: 1fr 1fr;
  column-gap: min(5vw, 64px);
`
