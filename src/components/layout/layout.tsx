/** 1. Imports **/
import React from 'react'
import styled from 'styled-components'
import { useI18next } from 'gatsby-plugin-react-i18next'

import { Header } from './header'
import { Footer } from './footer'

import { useSiteMetadata } from '../../providers/hooks/useSiteMetadata'
import { i18nLanguages } from '../../../i18nLanguages'

/** 2. Types **/
type Props = {
  className?: string
  children: React.ReactNode
}

type ComponentProps = {
  className?: string
  children: React.ReactNode
  siteTitle: string
  headerDescription: string
  language: string
  toggleLanguage: () => void
}

/** 3. Base component **/
const Component = ({
  className,
  children,
  siteTitle,
  headerDescription,
  language,
  toggleLanguage,
}: ComponentProps) => (
  <>
    <Header
      language={language}
      siteTitle={siteTitle}
      description={headerDescription}
      toggleLanguage={toggleLanguage}
    />
    <main className={className}>{children}</main>
    <Footer language={language} siteTitle={siteTitle} />
  </>
)

/** 4. Styled component **/
const StyledComponent = styled(Component)`
  ${({ theme }) => theme.centeredStyle}

  position: relative;

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
  const { t, language, changeLanguage } = useI18next()

  const toggleLanguage = () => {
    const currentLanguageIdx = i18nLanguages.indexOf(language)
    const nextLanguage =
      i18nLanguages[currentLanguageIdx === i18nLanguages.length - 1 ? 0 : currentLanguageIdx + 1]

    changeLanguage(nextLanguage)
  }

  return (
    <StyledComponent
      {...props}
      children={props.children}
      siteTitle={siteMetadata.title}
      headerDescription={t(`index.description`)}
      language={language}
      toggleLanguage={toggleLanguage}
    />
  )
}
