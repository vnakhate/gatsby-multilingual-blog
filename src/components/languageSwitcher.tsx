import React from 'react'
import styled from 'styled-components'
import { i18nLanguages } from '../../i18nLanguages'

type LanguageSwitcherProps = {
  currentLanguage: string;
  languages: string[];
  onLanguageChange: (language: string) => void;
};

const Button = styled.button<{ selected: boolean }>`
  color: ${props => props.selected ? 'blue' : 'grey'};
`;

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLanguage, languages, onLanguageChange }) => (
  <div>
    {languages.map((language) => (
      <Button
        key={language}
        selected={language === currentLanguage}
        onClick={() => onLanguageChange(language)}
      >
        {language}
      </Button>
    ))}
  </div>
);