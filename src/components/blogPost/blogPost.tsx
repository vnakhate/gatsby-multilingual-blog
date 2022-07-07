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
}

/** 3. Base component **/
const Component = ({ className, data }: Props) => (
  <article className={className}>
    <GatsbyImage alt={'cover'} image={getImage(data.frontmatter.cover)!} />
    <h1>{data.frontmatter.title}</h1>
    <ul>
      {data.frontmatter.tags.map((t) => (
        <Link key={t} to={`/?tag=${t}`} language={data.fields.language}>
          <li>#{t}</li>
        </Link>
      ))}
    </ul>
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
    margin: 16px 0;

    font-size: 1.8rem;
    color: ${({ theme }) => theme.color.subGreyText};

    > a:not(:last-child) {
      margin-right: 16px;
      padding: 1px 0;
    }
  }
`
