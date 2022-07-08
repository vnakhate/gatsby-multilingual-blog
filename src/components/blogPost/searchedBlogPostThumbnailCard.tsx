/** 1. Imports **/
import React from 'react'
import styled from 'styled-components'
import { _BlogPostThumbnailCardComponent } from './_blogPostThumbnailCardComponent'

/** 4. Styled component **/
export const SearchedBlogPostThumbnailCard = styled(_BlogPostThumbnailCardComponent)<{
  first: boolean
}>`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;

  > div.img {
    margin: 0 16px 0 0;
  }
`
