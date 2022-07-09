import { css } from 'styled-components'

export const theme = {
  breakPoint: {
    l: 992,
  },

  mainWith: 960,
  contentWidth: 1360,
  headerHeight: 296,
  footerHeight: 220,
  sideSpace: 16,

  serifFamily: `'Georgia', 'Hiragino Mincho ProN', '游明朝', serif`,

  color: {
    subTextGrey: `hsl(0, 0%, 50%)`,
    regularBlack: `hsl(0, 0%, 13%)`,
    backgroundWhite: `hsl(0, 0%, 98%)`,
    highlightMagenta: `hsla(300, 85%, 50%, 60%)`,
  },

  get centeredStyle() {
    return css`
      max-width: ${this.contentWidth}px;
      margin: 0 auto;
      padding: 0 ${this.sideSpace}px;
    `
  },

  get highlight() {
    return css`linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, ${this.color.highlightMagenta} 50%)`
  },
}
