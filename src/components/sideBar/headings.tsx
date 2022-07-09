/** 1. Imports **/
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { BlogPostNode } from '../../providers/types/blogPostNode'
import { useStateHandler } from '../../providers/hooks/useStateHandler'

/** 2. Types **/
type Props = ContainerProps & {
  intersectingElements: Set<string>
}

type ContainerProps = {
  className?: string
  data: BlogPostNode
}

/** 3. Base component **/
const Component = ({ className, data, intersectingElements }: Props) => (
  <div className={className}>
    <div className={'side-title'}>Table of Contents</div>
    <div>
      {data.headings.map((h) => (
        <React.Fragment key={h.id}>
          <span className={intersectingElements.has(h.id) ? 'active' : ''}>{`◉`}</span>
          <a href={`#${h.id}`}>
            <p className={intersectingElements.has(h.id) ? 'active' : ''}>{h.value}</p>
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
  const intersectingListHandler = useStateHandler<Set<string>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        intersectingListHandler.setValue((pre) => {
          const s: Set<string> = new Set(JSON.parse(JSON.stringify(Array.from(pre))))

          if (entry.isIntersecting) s.add(entry.target.id)
          if (!entry.isIntersecting) s.delete(entry.target.id)

          return s
        })
      })
    })

    props.data.headings.forEach((h) => {
      observer.observe(document.getElementById(h.id)!)
    })
  }, [])

  return <StyledComponent {...props} intersectingElements={intersectingListHandler.value} />
}
