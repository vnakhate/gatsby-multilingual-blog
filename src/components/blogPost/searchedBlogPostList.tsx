import React from 'react'
import styled from 'styled-components'
import { BlogPostListComponent } from './blogPostListComponent'
import { SearchedBlogPostThumbnailCard } from './searchedBlogPostThumbnailCard'
import { BlogPostNode } from '../../providers/types/blogPostNode'

type Props = {
  className?: string
  blogPosts: BlogPostNode[]
}

const Component = ({ className, blogPosts }: Props) => (
  <BlogPostListComponent className={className}>
    {blogPosts.map((b, i) => (
      <SearchedBlogPostThumbnailCard key={b.id} data={b} first={i === 0} />
    ))}
  </BlogPostListComponent>
)

export const SearchedBlogPostList = styled(Component)``
