/** 1. Imports **/
import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby-plugin-react-i18next'

/** 2. Types **/
type Props = {
  className?: string
  siteTitle: string
  language: string
}

/** 3. Base component **/
const Component = ({ className, siteTitle, language }: Props) => (
  <footer className={className}>
    <hr />
    <div>
      <ul>
        <li>
          © {new Date().getFullYear()}
          {` `}
          {siteTitle}
        </li>
        <li>|</li>
        <li>
          <Link to={`/privacy-policy`} language={language}>
            Privacy policy
          </Link>
        </li>
        <li>|</li>
        <li>
          <Link to={`/contact`} language={language}>
            Contact
          </Link>
        </li>
      </ul>
      <div></div>
    </div>
  </footer>
)

/** 4. Styled component **/
export const Footer = styled(Component)`
  ${({ theme }) => theme.centeredStyle}

  display: grid;
  align-content: center;
  height: ${({ theme }) => theme.footerHeight}px;

  font-size: 1.3rem;
  color: ${({ theme }) => theme.color.subTextGrey};

  > hr {
    margin-bottom: 50px;
    border: 3px solid hsl(0, 0%, 90%);
    border-radius: 12px;
  }

  > div {
    display: flex;
    justify-content: space-between;

    > ul {
      display: flex;
      justify-content: space-between;
      gap: 16px;
    }
  }
`
