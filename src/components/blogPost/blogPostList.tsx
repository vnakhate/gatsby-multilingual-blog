/** 1. Imports **/
import React from 'react'
import styled from 'styled-components'
import { BlogPostThumbnailCard } from './blogPostThumbnailCard'
import { _BlogPostListComponent } from './_blogPostListComponent'
import { BlogPostNode } from '../../providers/types/blogPostNode'

/** 2. Types **/
type Props = {
  className?: string
  blogPosts: BlogPostNode[]
}

/** 3. Base component **/
const Component = ({ className, blogPosts }: Props) => (
  <_BlogPostListComponent className={className}>
    {blogPosts.map((b, i) => (
      <BlogPostThumbnailCard key={b.id} data={b} first={i === 0} />
    ))}
  </_BlogPostListComponent>
)

/** 4. Styled component **/
export const BlogPostList = styled(Component)`
  grid-template-columns: 1fr 1fr;
  column-gap: min(5vw, 64px);
`
