import { NodePluginArgs } from 'gatsby'
import { BlogPostNode } from '../types/blogPostNode'
import { i18nDefaultLanguage } from '../../../i18nLanguages'

type Props = {
  data: BlogPostNode[]
  lang: string
  component: string
  postsPerPage: number
  createPage: NodePluginArgs['actions']['createPage']
}

export const createBlogPostPagination = ({
  data,
  lang,
  component,
  postsPerPage,
  createPage,
}: Props) => {
  if (!data.length) return

  const totalCount = data.length
  const numberOfPages = Math.ceil(totalCount / postsPerPage)

  if (lang === i18nDefaultLanguage) {
    createPage({
      path: `/`,
      component,
      context: {
        currentPage: 0,
        limit: postsPerPage,
        offset: 0,
        prevPagePath: `/`,
        nextPagePath: `/page/1/`,
        hasPrevPage: false,
        hasNextPage: numberOfPages >= 2,
        numberOfPages,
        language: lang,
      },
    })
  }

  createPage({
    path: `/${lang}/`,
    component,
    context: {
      currentPage: 0,
      limit: postsPerPage,
      offset: 0,
      prevPagePath: `/${lang}/`,
      nextPagePath: `/page/1/`,
      hasPrevPage: false,
      hasNextPage: numberOfPages >= 2,
      numberOfPages,
      language: lang,
    },
  })

  for (let i = 0; i < numberOfPages; i++) {
    createPage({
      path: `/page/${i}/`,
      component,
      context: {
        currentPage: i,
        limit: postsPerPage,
        offset: i * postsPerPage,
        prevPagePath: i <= 1 ? `/` : `/page/${i - 1}/`,
        nextPagePath: `/page/${i + 1}/`,
        hasPrevPage: i !== 0,
        hasNextPage: i !== numberOfPages - 1,
        numberOfPages,
        language: lang,
      },
    })
  }
}
