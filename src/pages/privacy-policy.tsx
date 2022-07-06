import React from 'react'
import styled from 'styled-components'
import { Layout } from '../components/layout'
import { MetaTag } from '../components/metaTag'
import { graphql } from 'gatsby'

type Props = {
  className?: string
}

type ComponentProps = {
  className?: string
}

const Component = ({ className }: ComponentProps) => (
  <Layout>
    <MetaTag />
    <div className={className}>Privacy policy</div>
  </Layout>
)

const StyledComponent = styled(Component)``

const PrivacyPolicy = (props: Props) => {
  return <StyledComponent {...props} />
}

export default PrivacyPolicy

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
