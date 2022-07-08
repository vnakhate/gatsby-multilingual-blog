/** 1. Imports **/
import React from 'react'
import styled from 'styled-components'

/** 2. Types **/
type Props = {
  className?: string
}

/** 3. Base component **/
const Component = ({ className }: Props) => (
  <div className={className}>
    <h3>Put anything you want</h3>
    <div></div>
  </div>
)

/** 4. Styled component **/
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
