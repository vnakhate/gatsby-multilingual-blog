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
  font-size: ${({ data }) => (data.fields.language === 'es' ? 1.7 : 1.9)}rem;
  margin-bottom: 120px;

  > * {
    margin: 4px 0;
  }

  a {
    color: hsla(300, 85%, 50%);
  }

  > p {
    margin-bottom: 32px;
  }

  p {
    line-height: ${({ data }) => (data.fields.language === 'es' ? 3.3 : 3)}rem;
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
    padding: 6px 24px 6px 12px;
    margin: 80px 0 24px 0;

    font-size: 2.8rem;
    font-family: ${({ theme }) => theme.serifFamily};
    font-weight: bolder;

    border-left: 4px solid ${({ theme }) => theme.color.highlightMagenta};
  }

  blockquote {
    padding: 32px;
    margin: 0 16px 40px 16px;

    background-color: hsl(0, 0%, 96%);
    border-radius: 8px;
    border-left: 6px solid hsl(0, 0%, 90%);

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

  > div.gatsby-highlight {
    margin-bottom: 40px;
  }
  pre {
    font-size: 1.4rem;
    border-radius: 8px;

    word-break: break-word;
    white-space: pre-wrap;
  }

  span.gatsby-resp-image-wrapper {
    margin: 32px 0;
  }

  > ul,
  > ol {
    padding: 16px 32px;
    margin: 32px 16px 56px 16px;
    border: 1px solid hsl(0, 0%, 90%);
    border-radius: 4px;
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
        line-height: ${({ data }) => (data.fields.language === 'es' ? 2.8 : 2.5)}rem;
      }
    }
  }
`
