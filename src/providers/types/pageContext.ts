export type PageContext = {
  currentPage: number
  limit: number
  offset: number
  prevPagePath: string
  nextPagePath: string
  hasPrevPage: boolean
  hasNextPage: boolean
  numberOfPages: number
  language: string
}
