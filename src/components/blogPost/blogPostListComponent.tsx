/** 1. Imports **/
import React from 'react'
import styled from 'styled-components'

/** 2. Types **/
type Props = {
  className?: string
  children: React.ReactNode
}

/** 3. Base component **/
const Component = ({ className, children }: Props) => <div className={className}>{children}</div>

/** 4. Styled component **/
export const BlogPostListComponent = styled(Component)`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  row-gap: 64px;

  max-width: 960px;
`
