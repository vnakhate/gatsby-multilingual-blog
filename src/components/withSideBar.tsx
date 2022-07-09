/** 1. Imports **/
import React from 'react'
import styled from 'styled-components'
import { SideBar } from './sideBar/sideBar'
import { SearchInput } from './searchInput'
import { BlogPostNode } from '../providers/types/blogPostNode'
import { PopularTag } from '../providers/types/popularTag'

/** 2. Types **/
type Props = {
  className?: string
  children: React.ReactNode
  searchInput?: string
  onInputType?: (e: React.ChangeEvent<HTMLInputElement>) => void
  relatedPosts?: BlogPostNode[]
  headings?: BlogPostNode
  popularTags?: PopularTag[]
}

/** 3. Base component **/
const Component = ({
  className,
  children,
  searchInput,
  onInputType,
  relatedPosts,
  headings,
  popularTags,
}: Props) => (
  <div className={className}>
    {onInputType ? <SearchInput onInputType={onInputType} searchInput={searchInput} /> : <div />}
    {children}
    <SideBar
      onInputType={onInputType}
      searchInput={searchInput}
      relatedPosts={relatedPosts}
      headings={headings}
      popularTags={popularTags}
    />
  </div>
)

/** 4. Styled component **/
export const WithSideBar = styled(Component)`
  display: grid;
  grid-template-columns: 3fr minmax(304px, 1fr);

  > div:first-child {
    display: none;
  }

  > *:nth-child(2) {
    max-width: ${({ theme }) => theme.mainWith}px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakPoint.l}px) {
    grid-template-columns: 1fr;

    > div:first-child {
      display: block;
      justify-self: right;
      grid-column: span 3;
      max-width: 250px;

      transform: translateY(-32px);
    }

    > aside {
      display: none;
    }
  }
`
