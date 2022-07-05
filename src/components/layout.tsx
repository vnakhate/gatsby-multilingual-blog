import React from 'react'

import { Header } from './header'
import { Footer } from './footer'
import styled from 'styled-components'

type Props = {
  className?: string
  children: React.ReactNode
  changeLanguage: (l: string) => void
  language: string
}

const Component = ({ className, children, changeLanguage, language }: Props) => (
  <>
    <Header changeLanguage={changeLanguage} language={language} />
    <main className={className}>{children}</main>
    <Footer />
  </>
)

export const Layout = styled(Component)``
