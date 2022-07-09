/** 1. Imports **/
import React from 'react'
import { Link } from 'gatsby-plugin-react-i18next'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { BlogPostNode } from '../../providers/types/blogPostNode'
import styled from 'styled-components'

/** 2. Types **/
type Props = {
  className?: string
  data: BlogPostNode
  first: boolean
}

/** 3. Base component **/
const Component = ({ className, data }: Props) => (
  <Link className={className} to={data.fields.path} language={data.fields.language}>
    <GatsbyImage
      class={'img'}
      alt={'cover'}
      image={getImage(data.frontmatter.cover)!}
      objectFit={'cover'}
    />
    <div id={'info'}>
      <h1>{data.frontmatter.title}</h1>
      <p>{data.excerpt}</p>
    </div>
  </Link>
)

export const _BlogPostThumbnailCardComponent = styled(Component)`
  > div:first-child {
    aspect-ratio: ${({ theme }) => theme.imageRatio.default};
    object-fit: cover;
  }

  > div#info {
    > h1 {
      width: max-content;
      max-width: fit-content;
      padding-bottom: 8px;

      font-size: ${({ data }) => (data.fields.language === 'ja' ? 2.2 : 2.4)}rem;
      background: ${({ theme }) => theme.highlight};
    }

    > p {
      line-height: 1.95rem;
      font-size: ${({ data }) => (data.fields.language === 'ja' ? 1.4 : 1.6)}rem;
      color: ${({ theme }) => theme.color.subTextGrey};
    }
  }
`
