import React from 'react'
import styled from 'styled-components'
import { useI18next, Link } from 'gatsby-plugin-react-i18next'

import { useSiteMetadata } from '../providers/hooks/useSiteMetadata'

type Props = {
  className?: string
}

type ComponentProps = {
  className?: string
  toggleLanguage: () => void
  language: string
  siteTitle: string
  description: string
}

const Component = ({
  className,
  toggleLanguage,
  language,
  siteTitle,
  description,
}: ComponentProps) => (
  <header className={className}>
    <div>
      <Link to={'/'} language={language}>
        <h1>{siteTitle}</h1>
      </Link>
      <button onClick={toggleLanguage}>toggle language</button>
    </div>
    <div>{description}</div>
  </header>
)

const StyledComponent = styled(Component)`
  ${({ theme }) => theme.centeredStyle}

  padding: 80px 16px;

  > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 3rem;
      font-weight: bold;
    }
  }

  > div:last-child {
    padding: 16px 0;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.color.subGreyText};
  }
`

export const Header = (props: Props) => {
  const { siteMetadata } = useSiteMetadata()
  const { t, changeLanguage, language } = useI18next()

  const toggleLanguage = () => {
    changeLanguage(language === `en` ? `ja` : `en`)
  }

  return (
    <StyledComponent
      {...props}
      toggleLanguage={toggleLanguage}
      language={language}
      siteTitle={siteMetadata.title}
      description={t(`index.description`)}
    />
  )
}
