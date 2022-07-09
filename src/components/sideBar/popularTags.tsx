/** 1. Imports **/
import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby-plugin-react-i18next'
import { PopularTag } from '../../providers/types/popularTag'

/** 2. Types **/
type Props = {
  className?: string
  data: PopularTag[]
  emoji: string[]
}

/** 3. Base component **/
const Component = ({ className, data, emoji }: Props) => (
  <div className={className}>
    <div className={'side-title'}>Popular tags</div>
    <div>
      {data.map((t, i) => (
        <Link to={''}>
          <p>
            #{t.value}
            {emoji[i]}
          </p>
        </Link>
      ))}
    </div>
  </div>
)

/** 4. Styled component **/
export const PopularTags = styled(Component)`
  > div:last-child {
    display: flex;
    flex-wrap: wrap;
    column-gap: 8px;

    line-height: 3.2rem;
    font-size: 1.6rem;
  }
`
