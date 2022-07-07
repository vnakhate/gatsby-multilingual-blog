/** 1. Imports **/
import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby-plugin-react-i18next'
import { PageContext } from '../providers/types/pageContext'

/** 2. Types **/
type Props = {
  className?: string
  pageContext: PageContext
}

type ComponentProps = {
  className?: string
  pageContext: PageContext
  pages: number[]
}

/** 3. Base component **/
const Component = ({ className, pageContext, pages }: ComponentProps) => (
  <nav className={className}>
    {pageContext.hasPrevPage ? (
      <Link to={pageContext.prevPagePath} language={pageContext.language}>
        <p>{'<<'}</p>
      </Link>
    ) : null}
    {pages.map((i) => (
      <Link key={i} to={i === 0 ? `/` : `/page/${i}`} language={pageContext.language}>
        <p className={pageContext.currentPage === i ? 'current' : ''}>{i}</p>
      </Link>
    ))}
    {pageContext.hasNextPage ? (
      <Link to={pageContext.nextPagePath} language={pageContext.language}>
        <p>{'>>'}</p>
      </Link>
    ) : null}
  </nav>
)

/** 4. Styled component **/
const StyledComponent = styled(Component)`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;

  width: 100%;

  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.subGreyText};

  transform: translateY(64px);

  > a {
    margin: 0 clamp(8px, 3vw, 24px);
  }

  > a > p {
    padding: 8px 8px 4px 8px;
  }

  > a > p.current {
    font-weight: bold;
    text-underline: grey;
    border-bottom: 2px solid ${({ theme }) => theme.color.subGreyText};
  }
`

/** 5. Container **/
export const NavigationBar = (props: Props) => {
  const { pageContext } = props

  // generate pages on navigation
  const pages = React.useCallback(() => {
    const { currentPage, numberOfPages } = pageContext

    const p = [currentPage]

    let i = 1
    while (p.length < 5 && (0 <= currentPage - i || currentPage + i < numberOfPages)) {
      if (0 <= currentPage - i) p.unshift(currentPage - i)
      if (currentPage + i < numberOfPages) p.push(currentPage + i)
      i++
    }

    return p
  }, [props.pageContext])

  return <StyledComponent {...props} pageContext={props.pageContext} pages={pages()} />
}
