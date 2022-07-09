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
        <GatsbyImage alt={'cover'} image={getImage(b.frontmatter.cover)!} />
        <div className={'info'}>
          <Link to={b.fields.path} language={b.fields.language}>
            <p>{b.frontmatter.title}</p>
          </Link>
          <div className={'tag'}>
            {b.frontmatter.tags.map((t) => (
              <span key={t}>#{t}</span>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
)

/** 4. Styled Component **/
export const RelatedPosts = styled(Component)`
  > div:first-child {
    margin-bottom: 32px;

    font-size: 2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.color.subTextGrey};
  }

  > div.relatedPost {
    display: grid;
    grid-template-columns: max-content 1fr;
    align-items: center;

    margin-bottom: 40px;

    > div:first-child {
      height: 72px;
      margin-right: 16px;
      aspect-ratio: 7/4;
      object-fit: cover;
    }

    > div.info {
      > a {
        font-size: ${({ data }) =>
          data.length > 0 && data[0].fields.language === 'ja' ? 2.8 : 3}rem;
      }

      p {
        width: max-content;
        max-width: fit-content;
        background: ${({ theme }) => theme.highlight};
      }

      > div.tag {
        margin-top: 4px;

        > span {
          margin-right: 12px;
          font-size: 1.5rem;
          color: ${({ theme }) => theme.color.subTextGrey};
        }
      }
    }
  }
`
