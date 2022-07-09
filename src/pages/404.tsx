/** 1. Imports **/
import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Layout } from '../components/layout/layout'
import { MetaTag } from '../components/layout/metaTag'

/** 2. Types **/
type Props = {
  className?: string
}

/** 3. Base component **/
const Component = ({ className }: Props) => (
  <Layout>
    <MetaTag title="404: Not found" />
    <div className={className}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

/** 4. Styled component **/
const StyledComponent = styled(Component)``

/** 5. Container **/
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
