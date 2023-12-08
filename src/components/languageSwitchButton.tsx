/** 1. Imports **/
import React from 'react'
import styled from 'styled-components'
import { i18nLanguages } from '../../i18nLanguages'

/** 2. Types **/
type Props = {
  className?: string
  language: string
  onChange: (lang: string) => void
}

/** 3. Base component **/
const Component = ({ className, language, onChange }: Props) => (
  <div className={className}>
    <select value={language} onChange={(e) => onChange(e.target.value)}>
      {i18nLanguages.map((l) => (
        <option key={l} value={l}>{l.toUpperCase()}</option>
      ))}
    </select>
  </div>
)

/** 4. Styled component **/
export const LanguageSwitchButton = styled(Component)`
  position: relative;
  width: 120px; // Adjust this line
  height: 32px;

  background-color: hsl(0, 0%, 46%);
  border-radius: 12px;
  box-shadow: inset 2px 2px 6px hsla(0, 0%, 0%, 16%);

  transform: scale(0.9);
  cursor: pointer;

  > select {
    width: 100%;
    height: 100%;
    background: transparent;
    color: white;
    border: none;
    font-size: 1.7rem;
    padding: 0 12px;
    appearance: none; // Remove default select dropdown arrow
  }
`