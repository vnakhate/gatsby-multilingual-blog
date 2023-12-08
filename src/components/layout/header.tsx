/** 1. Imports **/
import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby-plugin-react-i18next'
import { LanguageSwitchButton as OriginalLanguageSwitchButton } from '../languageSwitchButton'

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
      <LanguageSwitchButton language={language} onClick={toggleLanguage} />
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

/** 5. Modified LanguageSwitchButton component **/
const LanguageSwitchButtonComponent = ({ className, language, onClick }: Props) =>
  i18nLanguages.length > 5 ? (
    <button onClick={onClick}>toggle language</button>
  ) : (
    <div className={className} data-language={language} onClick={onClick}>
      <ul>
        {i18nLanguages.map((l) => (
          <li key={l} data-lang={l}>{l.toUpperCase()}</li>
        ))}
      </ul>
    </div>
  )

/** 6. Styled LanguageSwitchButton component **/
export const LanguageSwitchButton = styled(LanguageSwitchButtonComponent)`
  position: relative;
  width: ${60 * i18nLanguages.length}px;
  height: 32px;
  background-color: transparent;

  > ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 12px;
    font-size: 1.7rem;
    color: white;

    > li {
      transition: color 0.3s ease;
      margin: 0 5px; // Add some horizontal margin

      ${props => props['data-language'] && css`
        &[data-lang="${props['data-language']}"] {
          color: yellow; // Highlight color for selected language
        }
      `}
    }
  }

  // Rest of the styles...
`
