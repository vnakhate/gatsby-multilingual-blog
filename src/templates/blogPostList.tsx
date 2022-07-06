import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Layout } from '../components/layout'
import { MetaTag } from '../components/metaTag'
import { BlogThumbnailCard } from '../components/blogThumbnailCard'
import { NavigationBar } from '../components/navigationBar'
import { WithSideBar } from '../components/withSideBar'

import { BlogPostNode } from '../providers/types/blogPostNode'
import { LocaleData } from '../providers/types/localeData'
import { PageContext } from '../providers/types/pageContext'
import { i18nLanguages, i18nDefaultLanguage } from '../../i18nLanguages'

type Props = {
  location: {
    pathname: string
  }
  data: {
    locales: LocaleData
    allMarkdownRemark: {
      nodes: BlogPostNode[]
    }
  }
  pageContext: PageContext
}

type ComponentProps = {
  className?: string
  blogPosts: BlogPostNode[]
  pageContext: PageContext
  metaTag: object[]
  searchInput: string
  onInputType?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Component = ({
  className,
  blogPosts,
  pageContext,
  metaTag,
  searchInput,
  onInputType,
}: ComponentProps) => (
  <Layout>
    <MetaTag title={'home'} meta={metaTag} />
    <WithSideBar onInputType={onInputType} searchInput={searchInput}>
      <div className={className}>
        {blogPosts.map((b, i) => (
          <BlogThumbnailCard key={b.id} data={b} first={i === 0} />
        ))}
      </div>
    </WithSideBar>
    <NavigationBar pageContext={pageContext} />
  </Layout>
)

const StyledComponent = styled(Component)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: min-content;
  column-gap: min(5vw, 64px);
  row-gap: 64px;

  max-width: 960px;
`

const BlogPostListTemplate = (props: Props) => {
  const [searchInput, setSearchInput] = useState<string>('')
  const [searchedPosts, setSearchedPosts] = useState<BlogPostNode[]>([])

  const blogPosts = props.data.allMarkdownRemark.nodes
  const userLang = navigator.language || navigator.userLanguage || i18nDefaultLanguage
  const metaTag =
    props.location.pathname === '/' &&
    userLang !== i18nDefaultLanguage &&
    i18nLanguages.includes(userLang)
      ? [{ 'http-equiv': 'refresh', content: `2;url=/${userLang}` }]
      : []

  useEffect(() => {
    const t = setTimeout(() => {
      console.log(searchInput)
      searchBlogPosts()
    }, 300)

    return () => clearTimeout(t)
  }, [searchInput])

  const searchBlogPosts = () => {}

  const onInputType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }

  return (
    <StyledComponent
      {...props}
      blogPosts={blogPosts}
      metaTag={metaTag}
      pageContext={props.pageContext}
      searchInput={searchInput}
      onInputType={onInputType}
    />
  )
}

export default BlogPostListTemplate

export const query = graphql`
  query ($language: String!, $limit: Int!, $offset: Int!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allMarkdownRemark(
      limit: $limit
      skip: $offset
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { language: { eq: $language } } }
    ) {
      nodes {
        id
        excerpt
        fields {
          slug
          language
          path
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
          cover {
            childImageSharp {
              gatsbyImageData(
                formats: [AUTO, WEBP]
                placeholder: BLURRED
                webpOptions: { quality: 90 }
                width: 600
                quality: 90
              )
            }
          }
        }
      }
    }
  }
`
