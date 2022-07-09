/** 1. Imports **/
import React from 'react'
import styled from 'styled-components'

import { SideBar } from './sideBar/sideBar'
import { SearchInput } from './searchInput'
import { PopularTag } from '../providers/types/popularTag'
import { BlogPostNode } from '../providers/types/blogPostNode'
import { StateHandler } from '../providers/hooks/useStateHandler'

/** 2. Types **/
type Props = {
  className?: string
  children: React.ReactNode
  popularTags?: PopularTag
  blogPostData?: BlogPostNode
  searchInputHandler?: StateHandler<string>
}

/** 3. Base component **/
const Component = ({
  className,
  children,
  popularTags,
  blogPostData,
  searchInputHandler,
}: Props) => (
  <div className={className}>
    {searchInputHandler ? <SearchInput searchInputHandler={searchInputHandler} /> : <div />}
    {children}
    <SideBar
      popularTags={popularTags}
      blogPostData={blogPostData}
      searchInputHandler={searchInputHandler}
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
      max-width: 240px;

      transform: translateY(-32px);
    }

    > aside {
      display: none;
    }
  }
`
