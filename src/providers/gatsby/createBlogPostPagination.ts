import { NodePluginArgs } from 'gatsby'
import { BlogPostNode } from '../types/blogPostNode'

type Props = {
  data: BlogPostNode[]
  postsPerPage: number
  createPage: NodePluginArgs['actions']['createPage']
  component: string
  lang?: string
}

export const createBlogPostPagination = ({
  data,
  postsPerPage,
  createPage,
  lang,
  component,
}: Props) => {
  if (!data.length) return

  const totalCount = data.length
  const numberOfPages = Math.ceil(totalCount / postsPerPage)

  if (!lang) {
    return createPage({
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
      nextPagePath: `/${lang}/page/1/`,
      hasPrevPage: false,
      hasNextPage: numberOfPages >= 2,
      numberOfPages,
    },
  })

  for (let i = 0; i < numberOfPages; i++) {
    createPage({
      path: `/${lang}/page/${i}/`,
      component,
      context: {
        currentPage: i,
        limit: postsPerPage,
        offset: i * postsPerPage,
        prevPagePath: i <= 1 ? `/` : `/${lang}/page/${i - 1}/`,
        nextPagePath: `/${lang}/page/${i + 1}/`,
        hasPrevPage: i !== 0,
        hasNextPage: i !== numberOfPages - 1,
        numberOfPages,
      },
    })
  }
}
