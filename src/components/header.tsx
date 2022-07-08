/** 1. Imports **/
import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby-plugin-react-i18next'

import { LanguageSwitchButton } from './languageSwitchButton'
import { i18nLanguages } from '../../i18nLanguages'
import { SiteMetadata } from '../providers/types/siteMetadata'

/** 2. Types **/
type Props = {
  className?: string
  siteMetadata: SiteMetadata
  t: (s: string) => string
  changeLanguage: (lang: string) => void
  language: string
}

type ComponentProps = {
  className?: string
  language: string
  toggleLanguage: () => void
  siteTitle: string
  description: string
}

/** 3. Base component **/
const Component = ({
  className,
  toggleLanguage,
  language,
  siteTitle,
  description,
}: ComponentProps) => (
  <header className={className}>
    <div id={'topBox'}>
      <Link to={'/'} language={language}>
        <div id={'logo'}>{siteTitle}</div>
      </Link>
      <LanguageSwitchButton language={language} onClick={toggleLanguage} />
    </div>
    <div id={'description'}>{description}</div>
  </header>
)

/** 4. Styled component **/
const StyledComponent = styled(Component)`
  ${({ theme }) => theme.centeredStyle}

  display: grid;
  align-content: center;
  height: ${({ theme }) => theme.headerHeight}px;

  > div#topBox {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > a > div#logo {
      font-size: 3rem;
      font-weight: bold;
    }

    > button {
      height: 28px;
    }
  }

  > div#description {
    padding: 16px 0;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.color.subGreyText};
  }
`

/** 5. Container **/
export const Header = (props: Props) => {
  const { siteMetadata, t, changeLanguage, language } = props

  const toggleLanguage = () => {
    const currentLanguageIdx = i18nLanguages.indexOf(language)
    const nextLanguage =
      i18nLanguages[currentLanguageIdx === i18nLanguages.length - 1 ? 0 : currentLanguageIdx + 1]

    changeLanguage(nextLanguage)
  }

  return (
    <StyledComponent
      {...props}
      language={language}
      toggleLanguage={toggleLanguage}
      siteTitle={siteMetadata.title}
      description={t(`index.description`)}
    />
  )
}
