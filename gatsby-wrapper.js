import React from 'react'
import { ThemeProvider } from 'styled-components'
import { CssReset } from './src/styles/cssReset'
import { CustomGlobalCss } from './src/styles/customGlobalCss'
import { theme } from './src/styles/theme'

// Set up any Provider components that will wrap the application.
export const rootWrapper = ({ element }) => <>{element}</>

// Set wrapper components around pages that won’t get unmounted on page changes.
export const pageWrapper = ({ element }) => (
  <>
    {/* Global CSS must belong here not in rootWrapper otherwise CSS loading delay occurs */}
    <CssReset />
    <CustomGlobalCss />
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </>
)
