import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import { Layout } from '../components/layout'
import { SEO } from '../components/seo'

import { useSiteMetadata } from '../providers/hooks/useSiteMetadata'

type Props = {
  className?: string
  title: string
  userLang: string
  pathname: string
}

const Component = ({ className, title, userLang, pathname }: Props) => (
  <Layout>
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
  const userLang = navigator.language || navigator.userLanguage

  return (
    <StyledComponent
      {...props}
      pathname={props.location.pathname}
      title={siteMetadata.title}
      userLang={userLang}
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
