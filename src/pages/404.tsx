import React from 'react'
import styled from 'styled-components'

import { Layout } from '../components/layout'
import { MetaTag } from '../components/metaTag'
import { graphql } from 'gatsby'

type Props = {
  className?: string
}

const Component = ({ className }: Props) => (
  <Layout>
    <MetaTag title="404: Not found" />
    <div className={className}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

const StyledComponent = styled(Component)``

const NotFoundPage = (props: any) => {
  return <StyledComponent {...props} />
}

export default NotFoundPage

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
