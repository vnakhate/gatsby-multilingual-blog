import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
}

const Component = ({ className }: Props) => <header className={className} />

export const Header = styled(Component)``
