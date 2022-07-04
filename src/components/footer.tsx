import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
}

const Component = ({ className }: Props) => (
  <footer className={className}>
    {/*© {new Date().getFullYear()}, Built with*/}
    {/*{` `}*/}
    {/*<a href="https://www.gatsbyjs.org">Gatsby</a>*/}
  </footer>
)

export const Footer = styled(Component)``
