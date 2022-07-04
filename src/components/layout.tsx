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

export const Layout = styled(Component)``
