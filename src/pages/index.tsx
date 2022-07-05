import React from 'react'
import { Link } from 'gatsby-plugin-react-i18next'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { useI18next } from 'gatsby-plugin-react-i18next'

import { Layout } from '../components/layout'
import { SEO } from '../components/seo'

import { useSiteMetadata } from '../providers/hooks/useSiteMetadata'

type Props = {
  className?: string
  title: string
  userLang: string
  pathname: string
  changeLanguage: (l: string) => void
  language: string
}

const Component = ({ className, title, userLang, pathname, changeLanguage, language }: Props) => (
  <Layout changeLanguage={changeLanguage} language={language}>
    <SEO
      title={'home'}
      meta={
        pathname === '/' && userLang === `ja`
          ? [{ 'http-equiv': 'refresh', content: `2;url=/ja` }]
          : []
      }
    />
    <div className={className} style={{ textAlign: 'center' }}>
      <h1>{title}</h1>
      <p>“When the heart speaks, the mind finds it indecent to object.”</p>
      <Link to={`/_/article1`} language={language}>
        go
      </Link>
    </div>
  </Layout>
)

const StyledComponent = styled(Component)`
  width: max-content;
  margin: 0 auto;
  padding-top: 40vh;

  > h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }
  > p {
    font-size: 1.5rem;
  }
`

const IndexPage = (props: any) => {
  const { siteMetadata } = useSiteMetadata()
  const { changeLanguage, language } = useI18next()
  const userLang = navigator.language || navigator.userLanguage || `en`

  return (
    <StyledComponent
      {...props}
      pathname={props.location.pathname}
      title={siteMetadata.title}
      userLang={userLang}
      changeLanguage={changeLanguage}
      language={language}
    />
  )
}

export default IndexPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
