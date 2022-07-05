import { createGlobalStyle } from 'styled-components'

export const CustomGlobalCss = createGlobalStyle`
  html {
    height: 100%;
    font-size: 62.5%;
  }
  
  body {
    height: 100%;
    font-family: 'Roboto', 'Helvetica', 'Hiragino Sans', 'Meiryo', sans-serif;
    background-color: hsl(0, 0%, 98%);
    color: hsl(0, 0%, 13%);
  }
  
  #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
  }
`
