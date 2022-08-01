/** 1. Imports **/
import React from 'react'
import styled, { css } from 'styled-components'
import { _BlogPostThumbnailCardComponent } from './_blogPostThumbnailCardComponent'

/** 4. Styled component */
export const BlogPostThumbnailCard = styled(_BlogPostThumbnailCardComponent)<{ first: boolean }>`
  ${({ theme, first }) =>
    first
      ? css`
          grid-column: span 2;

          display: grid;
          grid-template-columns: 2fr 1fr;
          align-items: flex-end;

          @media only screen and (max-width: ${theme.breakPoint.m}px) {
            grid-template-columns: 1fr;
          }
        `
      : null}

  > div.img {
    margin: 0 0 16px 0;

    ${({ theme, first }) =>
      first
        ? css`
            aspect-ratio: ${theme.imageRatio.default};
            margin: 0 24px 0 0;

            @media only screen and (max-width: ${theme.breakPoint.m}px) {
              margin: 0 0 16px 0;
            }
          `
        : null}
  }
`
