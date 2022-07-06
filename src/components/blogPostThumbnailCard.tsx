import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby-plugin-react-i18next'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'

import { BlogPostNode } from '../providers/types/blogPostNode'

type Props = {
  className?: string
  data: BlogPostNode
  first: boolean
}

type ComponentProps = Props & {
  imageURL: IGatsbyImageData
}

const Component = ({ className, data, imageURL }: ComponentProps) => (
  <Link className={className} to={data.fields.path} language={data.fields.language}>
    <GatsbyImage alt={'cover'} image={imageURL} objectFit={'cover'} />
    <div>
      <h2>{data.frontmatter.title}</h2>
      <p>{data.excerpt}</p>
    </div>
  </Link>
)

const StyledComponent = styled(Component)<{ first: boolean }>`
  cursor: pointer;

  > div {
    :first-child {
      aspect-ratio: 4/3;
      margin: 0 0 16px 0;
    }

    > h2 {
      width: max-content;
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

  ${({ first }) =>
    first
      ? css`
          display: grid;
          grid-template-columns: 2fr 1fr;
          grid-column: span 2;
          align-items: flex-end;

          > div:first-child {
            aspect-ratio: 2 / 1.2;
            margin: 0 24px 0 0;
          }
        `
      : null}
`

export const BlogPostThumbnailCard = (props: Props) => {
  const imageURL = getImage(props.data.frontmatter.cover)!

  return <StyledComponent {...props} imageURL={imageURL} first={props.first} />
}
