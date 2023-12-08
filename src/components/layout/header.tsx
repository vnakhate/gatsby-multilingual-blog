/** 1. Imports **/
import React,  { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby-plugin-react-i18next'
import { LanguageSwitchButton } from '../languageSwitchButton'

/** 2. Types **/
type Props = {
  className?: string
  language: string
  siteTitle: string
  description: string
  toggleLanguage: () => void
}

/** 3. Base component **/
const Component = ({ className, language, siteTitle, description, toggleLanguage }: Props) => (
  <header className={className}>
    <div id={'topBox'}>
      <Link to={'/'} language={language}>
        <div id={'logo'}>{siteTitle}</div>
      </Link>
      <LanguageSwitchButton language={language} onChange={toggleLanguage} />
    </div>
    <div id={'description'}>{description}</div>
  </header>
)

/** 4. Styled component **/
export const Header = styled(Component)`
  ${({ theme }) => theme.centeredStyle}

  display: grid;
  align-content: center;
  height: ${({ theme }) => theme.headerHeight}px;
  margin-top: 0; // Add this line
  padding-top: 0; // Add this line
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
