/** 1. Imports **/
import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby-plugin-react-i18next'
import { SiteMetadata } from '../providers/types/siteMetadata'

/** 2. Types **/
type Props = {
  className?: string
  siteMetadata: SiteMetadata
  language: string
}

/** 3. Base component **/
const Component = ({ className, siteMetadata, language }: Props) => (
  <footer className={className}>
    <hr />
    <div>
      <ul>
        <li>
          {siteMetadata.title}
          {` `}© {new Date().getFullYear()}
        </li>
        <li>|</li>
        <Link to={`/privacy-policy`} language={language}>
          <li>Privacy policy</li>
        </Link>
        <li>|</li>
        <Link to={`/contact`} language={language}>
          <li>Contact</li>
        </Link>
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
  color: ${({ theme }) => theme.color.subGreyText};

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
