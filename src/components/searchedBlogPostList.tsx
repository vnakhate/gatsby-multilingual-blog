import React from 'react'
import styled from 'styled-components'
import { BlogPostNode } from '../providers/types/blogPostNode'
import { SearchedBlogPostThumbnailCard } from './searchedBlogPostThumbnailCard'

type Props = {
  className?: string
  blogPosts: BlogPostNode[]
}

const Component = ({ className, blogPosts }: Props) => (
  <div className={className}>
    {blogPosts.map((b, i) => (
      <SearchedBlogPostThumbnailCard key={b.id} data={b} first={i === 0} />
    ))}
  </div>
)

export const SearchedBlogPostList = styled(Component)`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  row-gap: 64px;

  max-width: 960px;
`
