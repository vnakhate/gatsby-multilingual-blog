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
    <div className={className} onClick={onClick}>
      <ul>
        {i18nLanguages.map((l) => (
          <li key={l}>{l.toUpperCase()}</li>
        ))}
      </ul>
      <div id={i18nLanguages[0] === language ? 'right' : 'left'} />
    </div>
  )

/** 4. Styled component **/
export const LanguageSwitchButton = styled(Component)`
  position: relative;
  width: ${48 * i18nLanguages.length}px; // Adjust this line
  height: 32px;

  background-color: transparent; 
  border-radius: 12px;
  box-shadow: inset 2px 2px 6px hsla(0, 0%, 0%, 16%);

  transform: scale(0.9);
  cursor: pointer;

  > ul {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 100%;
    padding: 0 12px;

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