/** 1. Imports **/
import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Layout } from '../components/layout'
import { MetaTag } from '../components/metaTag'
import { PaginationBar } from '../components/paginationBar'
import { WithSideBar } from '../components/withSideBar'
import { BlogPostList } from '../components/blogPost/blogPostList'
import { SearchedBlogPostList } from '../components/blogPost/searchedBlogPostList'

import { BlogPostNode } from '../providers/types/blogPostNode'
import { LocaleData } from '../providers/types/localeData'
import { PageContext } from '../providers/types/pageContext'
import { i18nLanguages, i18nDefaultLanguage } from '../../i18nLanguages'

/** 2. Types **/
type Props = {
  location: {
    pathname: string
    search: string
  }
  data: {
    locales: LocaleData
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
  blogPosts: BlogPostNode[]
  searchedPosts: BlogPostNode[] | null
  pageContext: PageContext
  metaTag: object[]
  searchInput: string
  onInputType?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

/** 3. Base component **/
const Component = ({
  blogPosts,
  searchedPosts,
  pageContext,
  metaTag,
  searchInput,
  onInputType,
}: ComponentProps) => (
  <Layout>
    <MetaTag title={'home'} meta={metaTag} />
    <WithSideBar onInputType={onInputType} searchInput={searchInput}>
      {searchedPosts ? (
        <SearchedBlogPostList blogPosts={searchedPosts} />
      ) : (
        <BlogPostList blogPosts={blogPosts} />
      )}
    </WithSideBar>
    <PaginationBar pageContext={pageContext} />
  </Layout>
)

/** 4. Styled component **/
const StyledComponent = styled(Component)``

/** 5. Container **/
const BlogPostListTemplate = (props: Props) => {
  const [searchInput, setSearchInput] = useState<string>('')
  const [searchedPosts, setSearchedPosts] = useState<BlogPostNode[] | null>(null)

  const userLang = navigator.language || navigator.userLanguage || i18nDefaultLanguage

  // navigate to the certain language page if it's not default language
  const metaTag =
    props.location.pathname === '/' &&
    userLang !== i18nDefaultLanguage &&
    i18nLanguages.includes(userLang)
      ? [{ 'http-equiv': 'refresh', content: `2;url=/${userLang}` }]
      : []

  useEffect(() => {
    const param = new URLSearchParams(props.location.search)
    const tagParam = param.get('tag')
    if (tagParam) {
      setSearchInput(`#${tagParam}`)
    }
  }, [])

  useEffect(() => {
    const t = setTimeout(() => {
      searchBlogPosts()
    }, 300)

    return () => clearTimeout(t)
  }, [searchInput])

  const searchBlogPosts = () => {
    if (!searchInput) return setSearchedPosts(null)

    const keywords = searchInput.trim().split(' ')

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

    setSearchedPosts(searched)
  }

  const onInputType = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e) return
    setSearchInput(e.target.value.toLowerCase())
  }

  return (
    <StyledComponent
      {...props}
      blogPosts={props.data.allMarkdownRemark.nodes}
      metaTag={metaTag}
      pageContext={props.pageContext}
      searchInput={searchInput}
      onInputType={onInputType}
      searchedPosts={searchedPosts}
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
