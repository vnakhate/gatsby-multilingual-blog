/** 1. Imports **/
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { BlogPostNode } from '../../providers/types/blogPostNode'
import { useStateHandler } from '../../providers/hooks/useStateHandler'

/** 2. Types **/
type Props = ContainerProps & {
  intersectingElement: string
}

type ContainerProps = {
  className?: string
  data: BlogPostNode
}

/** 3. Base component **/
const Component = ({ className, data, intersectingElement }: Props) => (
  <div className={className}>
    <div className={'side-title'}>Table of Contents</div>
    <div>
      {data.headings.map((h) => (
        <React.Fragment key={h.id}>
          <span className={intersectingElement === h.id ? 'active' : ''}>{`◉`}</span>
          <a href={`#${h.id}`}>
            <p className={intersectingElement === h.id ? 'active' : ''}>{h.value}</p>
          </a>
        </React.Fragment>
      ))}
    </div>
  </div>
)

/** 4. Styled component **/
const StyledComponent = styled(Component)`
  position: sticky;
  top: 64px;

  > div:last-child {
    display: grid;
    grid-template-columns: min-content 1fr;

    > span {
      margin: 4px 4px 0 0;
      color: ${({ theme }) => theme.color.disableGrey};

      transition: color 800ms;
    }
    > span.active {
      color: ${({ theme }) => theme.color.highlightMagenta};
    }

    p {
      margin-bottom: 24px;

      font-weight: 100;
      font-size: ${({ data }) => (data.fields.language === 'ja' ? 1.4 : 1.6)}rem;
      color: ${({ theme }) => theme.color.disableGrey};

      transition: color 800ms;
    }
    p.active {
      font-weight: inherit;
      font-size: ${({ data }) => (data.fields.language === 'ja' ? 1.55 : 1.75)}rem;
      color: inherit;
    }
  }
`

export const Headings = (props: ContainerProps) => {
  const intersectingListHandler = useStateHandler<string[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Add intersecting element to list only if not exist in list yet
        if (entry.isIntersecting) {
          intersectingListHandler.setValue((pre) => {
            const newState = JSON.parse(JSON.stringify(pre))

            if (!newState.includes(entry.target.id)) newState.push(entry.target.id)

            return newState
          })
        }

        // when the element disappear to -
        if (!entry.isIntersecting) {
          // to top? ignore
          if (entry.boundingClientRect.y <= 0) return

          // to bottom? remove from list only if the element is the last one in the list
          intersectingListHandler.setValue((pre) => {
            const newState = JSON.parse(JSON.stringify(pre))

            if (newState.at(-1) === entry.target.id) newState.pop()

            return newState
          })
        }
      })
    })

    props.data.headings.forEach((h) => {
      observer.observe(document.getElementById(h.id)!)
    })
  }, [])

  return (
    <StyledComponent {...props} intersectingElement={intersectingListHandler.value.at(-1) || ''} />
  )
}
