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
  <div className={className}>
    <div className={'side-title'}>Headings</div>
    <div>
      {data.headings.map((h) => (
        <>
          <span>{`◉`}</span>
          <a href={`#${h.id}`}>
            <p>{h.value}</p>
          </a>
        </>
      ))}
    </div>
  </div>
)

/** 4. Styled component **/
export const Headings = styled(Component)`
  position: sticky;
  top: 64px;

  > div:last-child {
    display: grid;
    grid-template-columns: min-content 1fr;

    > span {
      margin: 4px 4px 0 0;
      color: ${({ theme }) => theme.color.subGreyText};
      color: ${({ theme }) => theme.color.highlightMagenta};
    }

    p {
      margin-bottom: 24px;
      font-size: ${({ data }) => (data.fields.language === 'ja' ? 1.4 : 1.6)}rem;
    }
  }
`
