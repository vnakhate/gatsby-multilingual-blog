/** 1. Imports **/
import React, { useEffect } from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../components/layout/layout'
import { MetaTag } from '../components/layout/metaTag'
import { WithSideBar } from '../components/withSideBar'
import { PaginationBar } from '../components/paginationBar'
import { BlogPostList } from '../components/blogPost/blogPostList'
import { SearchedBlogPostList } from '../components/blogPost/searchedBlogPostList'

import { LocaleData } from '../providers/types/localeData'
import { PopularTag } from '../providers/types/popularTag'
import { PageContext } from '../providers/types/pageContext'
import { BlogPostNode } from '../providers/types/blogPostNode'
import { StateHandler } from '../providers/hooks/useStateHandler'
import { useStateHandler } from '../providers/hooks/useStateHandler'
import { i18nLanguages, i18nDefaultLanguage } from '../../i18nLanguages'

/** 2. Types **/
type Props = {
  location: {
    search: string
    pathname: string
  }
  data: {
    locales: LocaleData
    popularTags: PopularTag
    archives: {
      nodes: BlogPostNode[]
    }
    allMarkdownRemark: {
      nodes: BlogPostNode[]
    }
  }
  pageContext: PageContext
}

type ComponentProps = {
  metaTag: object[]
  queryData: Props['data']
  pageContext: PageContext
  searchedPosts: BlogPostNode[] | null
  searchInputHandler: StateHandler<string>
}

/** 3. Base component **/
const Component = ({
  metaTag,
  queryData,
  pageContext,
  searchedPosts,
  searchInputHandler,
}: ComponentProps) => (
  <Layout>
    <MetaTag meta={metaTag} />
    <WithSideBar ad searchInputHandler={searchInputHandler} popularTags={queryData.popularTags}>
      {searchedPosts ? (
        <SearchedBlogPostList blogPosts={searchedPosts} />
      ) : (
        <BlogPostList blogPosts={queryData.allMarkdownRemark.nodes} />
      )}
    </WithSideBar>
    <PaginationBar pageContext={pageContext} />
  </Layout>
)

/** 5. Container **/
const BlogPostListTemplate = (props: Props) => {
  const searchInputHandler = useStateHandler<string>('')
  const searchedPostsHandler = useStateHandler<BlogPostNode[] | null>(null)

  const userLang =
    typeof window !== 'undefined'
      ? navigator.language || navigator.userLanguage || i18nDefaultLanguage
      : null

  // Navigate to the certain language page if it's not default language
  const metaTag =
    userLang &&
    props.location.pathname === '/' &&
    userLang !== i18nDefaultLanguage &&
    i18nLanguages.includes(userLang)
      ? [{ 'http-equiv': 'refresh', content: `2;url=/${userLang}` }]
      : []

  // Type search input according to query param
  useEffect(() => {
    const param = new URLSearchParams(props.location.search)
    const tagParam = param.get('tag')

    if (tagParam) {
      searchInputHandler.setValue(`#${tagParam}`)
    } else {
      searchInputHandler.setValue('')
    }
  }, [props.location])

  useEffect(() => {
    const t = setTimeout(() => {
      searchBlogPosts()
    }, 300)

    return () => clearTimeout(t)
  }, [searchInputHandler.value])

  const searchBlogPosts = () => {
    if (!searchInputHandler.value) return searchedPostsHandler.setValue(null)

    const keywords = searchInputHandler.value.trim().toLowerCase().split(' ')

    let searched = props.data.archives.nodes

    for (let keyword of keywords) {
      if (!keyword) continue

      searched = searched.filter(
        (b) =>
          b.frontmatter.title.toLowerCase().includes(keyword) ||
          ('#' + b.frontmatter.tags.join('#').toLowerCase()).includes(keyword) ||
          b.frontmatter.description.toLowerCase().includes(keyword)
      )
    }

    searchedPostsHandler.setValue(searched)
  }

  return (
    <Component
      {...props}
      metaTag={metaTag}
      queryData={props.data}
      pageContext={props.pageContext}
      searchInputHandler={searchInputHandler}
      searchedPosts={searchedPostsHandler.value}
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
    archives: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { language: { eq: $language } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 160)
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
    allMarkdownRemark(
      limit: $limit
      skip: $offset
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { language: { eq: $language } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 160)
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
    popularTags(language: $language) {
      language
      tags {
        value
        count
      }
    }
  }
`
