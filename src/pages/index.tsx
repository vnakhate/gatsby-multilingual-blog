import React from 'react'
import styled from 'styled-components'

import { Layout } from '../components/layout'
import { SEO } from '../components/seo'

import { useSiteMetadata } from '../providers/hooks/useSiteMetadata'

type Props = {
  className?: string
  title: string
}

const Component = ({ className, title }: Props) => (
  <Layout>
    <SEO title={'home'} />
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
  return <StyledComponent {...props} title={siteMetadata.title} />
}

export default IndexPage
