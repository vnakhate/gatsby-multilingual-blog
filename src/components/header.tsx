import React from 'react'
import styled from 'styled-components'
import { useSiteMetadata } from '../providers/hooks/useSiteMetadata'

type Props = {
  className?: string
  changeLanguage: (l: string) => void
  language: string
}

type ComponentProps = {
  className?: string
  toggleLanguage: () => void
  siteTitle: string
}

const Component = ({ className, toggleLanguage, siteTitle }: ComponentProps) => (
  <header className={className}>
    <h1>{siteTitle}</h1>
    <div onClick={toggleLanguage}>switch language</div>
  </header>
)

const StyledComponent = styled(Component)`
  > h1 {
    font-size: 3rem;
    font-weight: bold;
  }
`

export const Header = (props: Props) => {
  const { changeLanguage, language } = props
  const { siteMetadata } = useSiteMetadata()

  const toggleLanguage = () => {
    changeLanguage(language === `en` ? `ja` : `en`)
  }

  return (
    <StyledComponent {...props} toggleLanguage={toggleLanguage} siteTitle={siteMetadata.title} />
  )
}
