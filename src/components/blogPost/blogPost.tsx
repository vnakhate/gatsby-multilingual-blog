/** 1. Imports **/
import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby-plugin-react-i18next'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { BlogBody } from './blogBody'
import { BlogPostNode } from '../../providers/types/blogPostNode'

/** 2. Types **/
type Props = {
  className?: string
  data: BlogPostNode
  emojiList: string[]
}

/** 3. Base component **/
const Component = ({ className, data, emojiList }: Props) => (
  <article className={className}>
    <GatsbyImage alt={'cover'} image={getImage(data.frontmatter.cover)!} />
    <h1>{data.frontmatter.title}</h1>
    <ul>
      {data.frontmatter.tags.map((t, i) => (
        <Link key={t} to={`/?tag=${t}`} language={data.fields.language}>
          <li>
            {emojiList[i]}#{t}
          </li>
        </Link>
      ))}
    </ul>
    <p>Written or Updated on {data.frontmatter.date} 🖋️</p>
    <BlogBody data={data} />
  </article>
)

/** 4. Styled component **/
export const BlogPost = styled(Component)`
  > h1 {
    width: max-content;
    max-width: fit-content;
    padding: 8px 0;

    font-size: 4rem;
    font-weight: bold;
    background: ${({ theme }) => theme.highlight};
  }

  > ul {
    display: flex;
    flex-wrap: wrap;
    margin: 16px 0 0 0;

    font-size: 1.8rem;
    color: ${({ theme }) => theme.color.subGreyText};

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
    color: ${({ theme }) => theme.color.subGreyText};
  }
`
