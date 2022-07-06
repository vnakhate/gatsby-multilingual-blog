import { GatsbySSR } from 'gatsby'
import { rootWrapper, pageWrapper } from './gatsby-wrapper'

export const wrapRootElement: GatsbySSR['wrapRootElement'] = rootWrapper
export const wrapPageElement: GatsbySSR['wrapPageElement'] = pageWrapper
