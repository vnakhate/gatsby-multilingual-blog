import { GatsbyBrowser } from 'gatsby'
import { rootWrapper, pageWrapper } from './gatsby-wrapper'
import './src/styles/prism.css'

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = rootWrapper
export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = pageWrapper
