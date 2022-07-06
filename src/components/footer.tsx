import React from 'react'
import styled from 'styled-components'
import { useSiteMetadata } from '../providers/hooks/useSiteMetadata'

type Props = {
  className?: string
  siteTitle: string
}

const Component = ({ className, siteTitle }: Props) => (
  <footer className={className}>
    <hr />
    <div>
      <ul>
        <li>
          {siteTitle}
          {` `}© {new Date().getFullYear()}
        </li>
        <li>|</li>
        <li>Privacy policy</li>
        <li>|</li>
        <li>Contact</li>
      </ul>
      <div></div>
    </div>
  </footer>
)

const StyledComponent = styled(Component)`
  ${({ theme }) => theme.centeredStyle}

  display: grid;
  align-content: center;
  height: ${({ theme }) => theme.footerHeight}px;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.color.subGreyText};

  > hr {
    border: 3px solid hsl(0, 0%, 90%);
    border-radius: 12px;
    margin-bottom: 50px;
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

export const Footer = () => {
  const { siteMetadata } = useSiteMetadata()

  return <StyledComponent siteTitle={siteMetadata.title} />
}
