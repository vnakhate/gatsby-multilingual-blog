/** 1. Imports **/
import React from 'react'
import styled from 'styled-components'
import { _BlogPostListComponent } from './_blogPostListComponent'
import { SearchedBlogPostThumbnailCard } from './searchedBlogPostThumbnailCard'
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
      <SearchedBlogPostThumbnailCard key={b.id} data={b} first={i === 0} />
    ))}
  </_BlogPostListComponent>
)

/** 4. Styled component **/
export const SearchedBlogPostList = styled(Component)``
