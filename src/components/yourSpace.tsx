import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
}

const Component = ({ className }: Props) => (
  <div className={className}>
    <h3>This is your space</h3>
    <div></div>
  </div>
)

export const YourSpace = styled(Component)`
  > h3 {
    font-size: 1.5rem;
    margin-bottom: 16px;
  }

  > div {
    height: 200px;
    width: 100%;
    border: 1px solid hsl(0, 0%, 88%);
    background-color: hsl(0, 0%, 95%);
  }
`
