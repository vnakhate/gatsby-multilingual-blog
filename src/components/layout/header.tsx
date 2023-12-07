/** 1. Imports **/
import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby-plugin-react-i18next'
import { LanguageSwitcher } from '../languageSwitcher';

/** 2. Types **/
type Props = {
  className?: string
  language: string
  siteTitle: string
  description: string
  switchLanguage: () => void
}

/** 3. Base component **/
const Component = ({ className, language, siteTitle, description, switchLanguage }: Props) => (
  <header className={className}>
    <div id={'topBox'}>
      <Link to={'/'} language={language}>
        <div id={'logo'}>{siteTitle}</div>
      </Link>
      <LanguageSwitcher
        currentLanguage={language}
        languages={['en', 'es', 'hi', 'ka']} // replace with your actual languages
        onLanguageChange={switchLanguage}
      />
    </div>
    <div id={'description'}>{description}</div>
  </header>
);

/** 4. Styled component **/
export const Header = styled(Component)`
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
    color: ${({ theme }) => theme.color.subTextGrey};
  }
`
