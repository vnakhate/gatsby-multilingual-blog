/** 1. Imports **/
import React from 'react'
import styled from 'styled-components'
import { BlogPostNode } from '../../providers/types/blogPostNode'

/** 2. Types **/
type Props = {
  className?: string
  data: BlogPostNode
}

/** 3. Base component **/
const Component = ({ className, data }: Props) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: data.html }} />
)

/** 4. Styled component **/
export const BlogBody = styled(Component)`
  font-size: ${({ data }) => (data.fields.language === 'ja' ? 1.7 : 1.9)}rem;
  margin-bottom: 120px;

  > * {
    margin: 4px 0;
  }

  > p {
    margin-bottom: 32px;
  }

  p {
    line-height: ${({ data }) => (data.fields.language === 'ja' ? 3.3 : 3)}rem;
  }

  p.subtitle {
    margin: 4px 0;
    font-weight: bolder;
    font-size: larger;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    width: max-content;
    max-width: fit-content;
    padding: 6px 24px 6px 12px;
    margin: 80px 0 16px 0;

    font-size: 2.8rem;
    font-family: ${({ theme }) => theme.serifFamily};
    font-weight: bolder;

    border-left: 4px solid ${({ theme }) => theme.color.highlightMagenta};
  }

  blockquote {
    padding: 32px;
    margin: 0 16px;

    background-color: hsl(0, 0%, 94%);
    border-radius: 8px;
    border-left: 8px solid hsl(0, 0%, 80%);

    font-style: italic;
    color: hsl(0, 0%, 35%);
  }

  em {
    font-style: italic;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, hsl(0, 0%, 90%) 50%);
  }

  strong {
    font-weight: bolder;
    font-size: larger;
  }

  pre {
    font-size: 1.4rem;
    border-radius: 8px;
  }

  span.gatsby-resp-image-wrapper {
    margin: 24px 0;
  }

  ul,
  ol {
    li {
      margin: 16px 0;
      margin-left: 8px;

      > ul {
        margin-left: 16px;
        font-size: smaller;
      }
    }
  }

  table {
    width: 100%;
    margin: 16px 0;

    th,
    td {
      border: 1px solid hsl(0, 0%, 90%);
    }

    thead {
      th {
        padding: 8px;
        border-bottom: 1.5px solid hsl(0, 0%, 85%);
        background-color: hsl(0, 0%, 94%);
      }
    }

    tbody {
      td {
        padding: 16px;
        line-height: ${({ data }) => (data.fields.language === 'ja' ? 2.8 : 2.5)}rem;
      }
    }
  }
`
