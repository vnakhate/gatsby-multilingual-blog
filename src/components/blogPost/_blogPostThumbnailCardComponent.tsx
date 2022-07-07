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
      <h2>{data.frontmatter.title}</h2>
      <p>{data.excerpt}</p>
    </div>
  </Link>
)

export const _BlogPostThumbnailCardComponent = styled(Component)`
  > div#info {
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
