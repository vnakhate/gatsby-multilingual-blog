import React from 'react'
import styled from 'styled-components'
import { SideBar } from './sideBar'
import { SearchInput } from './searchInput'

type Props = {
  className?: string
  children: React.ReactNode
  searchInput?: string
  onInputType?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Component = ({ className, children, searchInput, onInputType }: Props) => (
  <div className={className}>
    {onInputType ? <SearchInput onInputType={onInputType} searchInput={searchInput} /> : <div />}
    {children}
    <SideBar onInputType={onInputType} searchInput={searchInput} />
  </div>
)

export const WithSideBar = styled(Component)`
  display: grid;
  grid-template-columns: 3fr 1fr;

  > div:first-child {
    display: none;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakPoint.l}px) {
    grid-template-columns: 1fr;

    > div:first-child {
      display: block;
      justify-self: right;
      grid-column: span 3;
      max-width: 250px;

      transform: translateY(-32px);
    }

    > aside {
      display: none;
    }
  }
`
