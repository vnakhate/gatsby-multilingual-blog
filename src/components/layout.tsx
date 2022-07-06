import React from 'react'
import styled from 'styled-components'
import { useI18next } from 'gatsby-plugin-react-i18next'

import { Header } from './header'
import { Footer } from './footer'

import { useSiteMetadata } from '../providers/hooks/useSiteMetadata'
import { SiteMetadata } from '../providers/types/siteMetadata'

type Props = {
  className?: string
  children: React.ReactNode
}

type ComponentProps = {
  className?: string
  children: React.ReactNode
  siteMetadata: SiteMetadata
  t: (s: string) => string
  changeLanguage: (lang: string) => void
  language: string
}

const Component = ({
  className,
  children,
  t,
  changeLanguage,
  language,
  siteMetadata,
}: ComponentProps) => (
  <>
    <Header t={t} language={language} changeLanguage={changeLanguage} siteMetadata={siteMetadata} />
    <main className={className}>{children}</main>
    <Footer siteMetadata={siteMetadata} language={language} />
  </>
)

const StyledComponent = styled(Component)`
  ${({ theme }) => theme.centeredStyle}

  min-height: calc(
    100vh - ${({ theme }) => theme.headerHeight}px - ${({ theme }) => theme.footerHeight}px
  );
  min-height: calc(
    100dvh - ${({ theme }) => theme.headerHeight}px - ${({ theme }) => theme.footerHeight}px
  );
`

export const Layout = (props: Props) => {
  const { siteMetadata } = useSiteMetadata()
  const { t, changeLanguage, language } = useI18next()

  return (
    <StyledComponent
      {...props}
      siteMetadata={siteMetadata}
      t={t}
      changeLanguage={changeLanguage}
      language={language}
    />
  )
}
