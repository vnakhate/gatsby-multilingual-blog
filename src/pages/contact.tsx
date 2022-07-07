/** 1. Imports **/
import React from 'react'
import styled from 'styled-components'
import { Layout } from '../components/layout'
import { MetaTag } from '../components/metaTag'
import { graphql } from 'gatsby'

/** 2. Types **/
type Props = {
  className?: string
}

type ComponentProps = {
  className?: string
}

/** 3. Base component **/
const Component = ({ className }: ComponentProps) => (
  <Layout>
    <MetaTag />
    <div className={className}>Contact</div>
  </Layout>
)

/** 4. Styled component **/
const StyledComponent = styled(Component)``

/** 5. Container **/
const Contact = (props: Props) => {
  return <StyledComponent {...props} />
}
export default Contact

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
