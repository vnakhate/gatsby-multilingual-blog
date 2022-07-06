import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
  children: React.ReactNode
}

const Component = ({ className, children }: Props) => <div className={className}>{children}</div>

export const BlogPostListComponent = styled(Component)`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  row-gap: 64px;

  max-width: 960px;
`
