import React from 'react'
import styled from 'styled-components'
import { SideBar } from './sideBar'

type Props = {
  className?: string
  children: React.ReactNode
  searchInput?: string
  onInputType?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Component = ({ className, children, searchInput, onInputType }: Props) => (
  <div className={className}>
    {children}
    <SideBar onInputType={onInputType} searchInput={searchInput} />
  </div>
)

export const WithSideBar = styled(Component)`
  display: grid;
  grid-template-columns: 3fr 1fr;

  @media only screen and (max-width: ${({ theme }) => theme.breakPoint.l}px) {
    grid-template-columns: 1fr;

    > aside {
      display: none;
    }
  }
`
