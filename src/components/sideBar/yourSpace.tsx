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
    <div className={'side-title'}>Ad</div>
    <div></div>
  </div>
)

/** 4. Styled component **/
export const YourSpace = styled(Component)`
  > div:last-child {
    height: 200px;
    width: 100%;
    border: 1px solid hsl(0, 0%, 88%);
    background-color: hsl(0, 0%, 95%);
  }
`
