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
  font-size: 1.8rem;

  pre {
    font-size: 1.4rem;
    border-radius: 8px;
  }
`
