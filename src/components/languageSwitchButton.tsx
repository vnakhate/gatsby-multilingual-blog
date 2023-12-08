/** 1. Imports **/
import React from 'react'
import styled from 'styled-components'
import { i18nLanguages } from '../../i18nLanguages'

/** 2. Types **/
type Props = {
  className?: string
  language: string
  onClick: () => void
}

/** 3. Base component **/
const Component = ({ className, language, onClick }: Props) =>
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

/** 4. Styled component **/
export const LanguageSwitchButton = styled(Component)`
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