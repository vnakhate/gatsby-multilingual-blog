/** 1. Imports **/
import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby-plugin-react-i18next'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { BlogBody } from './blogBody'
import { RelatedPosts } from './relatedPosts'
import { BlogPostNode } from '../../providers/types/blogPostNode'

/** 2. Types **/
type Props = {
  className?: string
  data: BlogPostNode
  emoji: string[]
}

/** 3. Base component **/
const Component = ({ className, data, emoji }: Props) => (
  <article className={className}>
    <GatsbyImage alt={'cover'} image={getImage(data.frontmatter.cover)!} />
    <h1 className={data.fields.language === 'ja' ? 'ja-title' : ''}>{data.frontmatter.title}</h1>
    <ul>
      {data.frontmatter.tags.map((t, i) => (
        <Link key={t} to={`/?tag=${t}`} language={data.fields.language}>
          <li>
            {emoji[i] || ''}#{t}
          </li>
        </Link>
      ))}
    </ul>
    <p>Written or Updated on {data.frontmatter.date} 🖋️</p>
    <BlogBody data={data} />
    <RelatedPosts data={data.relatedPosts} />
  </article>
)

/** 4. Styled component **/
export const BlogPost = styled(Component)`
  max-width: 800px !important;

  @media only screen and (max-width: ${({ theme }) => theme.breakPoint.l}px) {
    margin: 0 auto;
  }

  > div:first-child {
    aspect-ratio: ${({ theme }) => theme.imageRatio.blogHeader};
    object-fit: cover;
  }

  > h1 {
    width: fit-content;
    padding: 8px 0;

    font-size: 4rem;
    font-weight: bold;
    line-height: 1.3;
    word-break: break-word;
    white-space: pre-wrap;
    background: ${({ theme }) => theme.highlight};
  }
  > h1.ja-title {
    font-size: 3.7rem;
  }

  > ul {
    display: flex;
    flex-wrap: wrap;
    margin: 16px 0 0 0;

    font-size: 1.8rem;
    color: ${({ theme }) => theme.color.subTextGrey};
    line-height: 1.3;

    > a:not(:last-child) {
      margin-right: 16px;
      padding: 1px 0;
    }
  }

  > p {
    width: 88%;
    padding: 8px 8px;
    margin: 56px auto;

    border: 3px hsl(0, 0%, 95%) dashed;
    text-align: center;
    font-size: 1.3rem;
    letter-spacing: 0.03rem;
    color: ${({ theme }) => theme.color.subTextGrey};
  }
`
