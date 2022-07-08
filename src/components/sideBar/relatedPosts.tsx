/** 1. Imports **/
import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby-plugin-react-i18next'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { BlogPostNode } from '../../providers/types/blogPostNode'

/** 2. Types **/
type Props = {
  className?: string
  data: BlogPostNode[]
}

/** 3. Base Component **/
const Component = ({ className, data }: Props) => (
  <div className={className}>
    <div>Related posts</div>
    {data.map((b) => (
      <div className={'relatedPost'} key={b.id}>
        <Link to={b.fields.path} language={b.fields.language}>
          <GatsbyImage className={'image'} alt={'cover'} image={getImage(b.frontmatter.cover)!} />
        </Link>
        <div className={'info'}>
          <Link to={b.fields.path} language={b.fields.language}>
            <p>{b.frontmatter.title}</p>
          </Link>
          <p>{b.excerpt}</p>
        </div>
      </div>
    ))}
  </div>
)

/** 4. Styled Component **/
export const RelatedPosts = styled(Component)`
  > div:first-child {
    margin-bottom: 16px;
    font-size: 1.5rem;
  }

  > div.relatedPost {
    margin-bottom: 32px;

    div.image {
      aspect-ratio: 7 / 4;
      object-fit: cover;
    }

    > div.info {
      a {
        font-size: ${({ data }) => (data.length && data[0].fields.language === 'ja' ? 2 : 2.2)}rem;
        > p {
          margin: 4px 0 4px 0;
        }
      }

      > p {
        line-height: 1.7rem;
        font-size: ${({ data }) =>
          data.length && data[0].fields.language === 'ja' ? 1.2 : 1.4}rem;
        font-weight: 100;
        color: ${({ theme }) => theme.color.subGreyText};
      }
    }
  }
`
