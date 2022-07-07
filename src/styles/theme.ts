import { css } from 'styled-components'

export const theme = {
  breakPoint: {
    l: 992,
  },

  contentWidth: 1360,
  mainWith: 960,
  headerHeight: 296,
  footerHeight: 220,
  sideSpace: 16,

  get centeredStyle() {
    return css`
      max-width: ${this.contentWidth}px;
      margin: 0 auto;
      padding: 0 ${this.sideSpace}px;
    `
  },

  color: {
    subGreyText: `hsl(0, 0%, 50%)`,
    highlightMagenta: `hsla(300, 85%, 50%, 60%)`,
  },

  serifFamily: `'Georgia', 'Hiragino Mincho ProN', '游明朝', serif`,

  get highlight() {
    return css`linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, ${this.color.highlightMagenta} 50%)`
  },
}
