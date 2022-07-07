/** 1. Imports **/
import React from 'react'
import styled from 'styled-components'
import { useI18next } from 'gatsby-plugin-react-i18next'

import { Header } from './header'
import { Footer } from './footer'

import { useSiteMetadata } from '../providers/hooks/useSiteMetadata'
import { SiteMetadata } from '../providers/types/siteMetadata'

/** 2. Types **/
type Props = {
  className?: string
  children: React.ReactNode
}

type ComponentProps = {
  className?: string
  children: React.ReactNode
  siteMetadata: SiteMetadata
  t: (s: string) => string
  language: string
  changeLanguage: (lang: string) => void
}

/** 3. Base component **/
const Component = ({
  className,
  children,
  siteMetadata,
  t,
  language,
  changeLanguage,
}: ComponentProps) => (
  <>
    <Header t={t} language={language} changeLanguage={changeLanguage} siteMetadata={siteMetadata} />
    <main className={className}>{children}</main>
    <Footer language={language} siteMetadata={siteMetadata} />
  </>
)

/** 4. Styled component **/
const StyledComponent = styled(Component)`
  ${({ theme }) => theme.centeredStyle}

  min-height: calc(
    100vh - ${({ theme }) => theme.headerHeight}px - ${({ theme }) => theme.footerHeight}px
  );
  min-height: calc(
    100dvh - ${({ theme }) => theme.headerHeight}px - ${({ theme }) => theme.footerHeight}px
  );
`

/** 5. Container **/
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
