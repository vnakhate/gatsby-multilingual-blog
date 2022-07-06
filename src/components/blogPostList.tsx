import React from 'react'
import styled from 'styled-components'
import { BlogPostNode } from '../providers/types/blogPostNode'
import { BlogPostThumbnailCard } from './blogPostThumbnailCard'

type Props = {
  className?: string
  blogPosts: BlogPostNode[]
}

const Component = ({ className, blogPosts }: Props) => (
  <div className={className}>
    {blogPosts.map((b, i) => (
      <BlogPostThumbnailCard key={b.id} data={b} first={i === 0} />
    ))}
  </div>
)

export const BlogPostList = styled(Component)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: min-content;
  column-gap: min(5vw, 64px);
  row-gap: 64px;

  max-width: 960px;
`
