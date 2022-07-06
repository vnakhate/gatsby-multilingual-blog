import React from 'react'

import { Header } from './header'
import { Footer } from './footer'
import styled from 'styled-components'

type Props = {
  className?: string
  children: React.ReactNode
}

const Component = ({ className, children }: Props) => (
  <>
    <Header />
    <main className={className}>{children}</main>
    <Footer />
  </>
)

export const Layout = styled(Component)`
  ${({ theme }) => theme.centeredStyle}

  min-height: calc(
    100vh - ${({ theme }) => theme.headerHeight}px - ${({ theme }) => theme.footerHeight}px
  );
  min-height: calc(
    100dvh - ${({ theme }) => theme.headerHeight}px - ${({ theme }) => theme.footerHeight}px
  );
`
