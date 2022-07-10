import React from 'react'
import { GatsbyBrowser } from 'gatsby'
import { rootWrapper, pageWrapper } from './gatsby-wrapper'

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = rootWrapper
export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = pageWrapper

export const onClientEntry: GatsbyBrowser['onClientEntry'] = () => {
  if (process.env.NODE_ENV !== 'production') {
    const whyDidYouRender = require('@welldone-software/why-did-you-render')
    whyDidYouRender(React, {
      trackAllPureComponents: true,
    })
  }
}
