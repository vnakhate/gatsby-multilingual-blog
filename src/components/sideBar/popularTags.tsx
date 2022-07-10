/** 1. Imports **/
import React, { useEffect, useMemo } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby-plugin-react-i18next'
import { PopularTag } from '../../providers/types/popularTag'
import { getRandomEmoji } from '../../providers/utils/getRandomEmoji'
import { useStateHandler } from '../../providers/hooks/useStateHandler'

/** 2. Types **/
type Props = {
  className?: string
  data: PopularTag
  emoji: string[]
}

type ContainerProps = {
  className?: string
  data: PopularTag
}

/** 3. Base component **/
const Component = ({ className, data, emoji }: Props) =>
  useMemo(
    () => (
      <div className={className}>
        <div className={'side-title'}>Popular Tags</div>
        <div>
          {data.tags.map((t, i) => (
            <Link key={t.value} to={`/?tag=${t.value}`} language={data.language}>
              <p>
                #{t.value}
                {emoji[i] || ''}
              </p>
            </Link>
          ))}
        </div>
      </div>
    ),
    [data, emoji]
  )

/** 4. Styled component **/
const StyledComponent = styled(Component)`
  > div:last-child {
    display: flex;
    flex-wrap: wrap;
    column-gap: 8px;

    line-height: 3.4rem;
    font-size: 1.6rem;
  }
`

/** 5. Container **/
export const PopularTags = (props: ContainerProps) => {
  const emojiHandler = useStateHandler<string[]>([])

  useEffect(() => {
    emojiHandler.setValue(getRandomEmoji())
  }, [])

  return <StyledComponent {...props} emoji={emojiHandler.value} />
}
