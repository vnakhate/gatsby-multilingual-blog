import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby-plugin-react-i18next'
import { PageContext } from '../providers/types/pageContext'

type Props = {
  className?: string
  pageContext: PageContext
}

type ComponentProps = {
  className?: string
  pageContext: PageContext
  pages: number[]
}

const Component = ({ className, pageContext, pages }: ComponentProps) => (
  <nav className={className}>
    {pageContext.hasPrevPage ? (
      <Link to={pageContext.prevPagePath} language={pageContext.language}>
        <p>{'<< NEW'}</p>
      </Link>
    ) : null}
    {pages.map((i) => (
      <Link key={i} to={i === 0 ? `/` : `/page/${i}`} language={pageContext.language}>
        <p className={pageContext.currentPage === i ? 'current' : ''}>{i}</p>
      </Link>
    ))}
    {pageContext.hasNextPage ? (
      <Link to={pageContext.nextPagePath} language={pageContext.language}>
        <p>{'OLD >>'}</p>
      </Link>
    ) : null}
  </nav>
)

const StyledComponent = styled(Component)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 80px;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.subGreyText};

  > a > p {
    padding: 8px 8px 4px 8px;
  }

  > a > p.current {
    font-weight: bold;
    text-underline: grey;
    border-bottom: 2px solid ${({ theme }) => theme.color.subGreyText};
  }
`

export const NavigationBar = (props: Props) => {
  const { pageContext } = props

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
