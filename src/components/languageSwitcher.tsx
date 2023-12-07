import React from 'react'
import styled from 'styled-components'
import { i18nLanguages } from '../../i18nLanguages'

type LanguageSwitcherProps = {
  currentLanguage: string;
  languages: string[];
  onLanguageChange: (language: string) => void;
};

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLanguage, languages, onLanguageChange }) => (
  <div>
    {languages.map((language) => (
      <button
        key={language}
        disabled={language === currentLanguage}
        onClick={() => onLanguageChange(language)}
      >
        {language}
      </button>
    ))}
  </div>
);
/** 4. Styled component **/
export const LanguageSwitcher = styled(Component)`
  position: relative;
  width: 96px;
  height: 32px;

  background-color: hsl(0, 0%, 46%);
  border-radius: 12px;
  box-shadow: inset 2px 2px 6px hsla(0, 0%, 0%, 16%);

  transform: scale(0.9);
  cursor: pointer;

  > ul {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 100%;
    padding: 0 16px;

    font-size: 1.7rem;
    color: white;
  }

  > div {
    position: absolute;
    top: 2px;

    width: 48px;
    height: 28px;

    background-color: ${({ theme }) => theme.color.backgroundWhite};
    border-radius: 10px;

    transform: translateX(24px);
  }

  > div#left {
    @keyframes toLeft {
      from {
        transform: translateX(24px);
      }
      to {
        transform: translateX(2px);
      }
    }
    transform: translateX(2px);
    animation: toLeft 400ms ease-in-out;
  }

  > div#right {
    @keyframes toRight {
      from {
        transform: translateX(24px);
      }
      to {
        transform: translateX(46px);
      }
    }
    transform: translateX(46px);
    animation: toRight 400ms ease-in-out;
  }
`
