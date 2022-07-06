import React from 'react'
import styled from 'styled-components'
import { BlogPostThumbnailCardComponent } from './BlogPostThumbnailCardComponent'

export const SearchedBlogPostThumbnailCard = styled(BlogPostThumbnailCardComponent)<{
  first: boolean
}>`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;

  > div {
    :first-child {
      aspect-ratio: 4/3;
      margin: 0 16px 0 0;
    }

    > h2 {
      width: max-content;
      max-width: fit-content;
      font-size: 2.4rem;
      padding-bottom: 8px;
      background: ${({ theme }) => theme.highlight};
    }

    > p {
      line-height: 1.2;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.color.subGreyText};
    }
  }
`
