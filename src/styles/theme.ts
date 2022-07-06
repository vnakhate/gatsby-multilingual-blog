import { css } from 'styled-components'

export const theme = {
  contentWidth: 1360,
  breakPoint: {
    l: 1040,
  },
  headerHeight: 296,
  footerHeight: 220,
  get centeredStyle() {
    return css`
      max-width: ${this.contentWidth}px;
      margin: 0 auto;
      padding: 0 16px;
    `
  },

  color: {
    subGreyText: `hsl(0, 0%, 50%)`,
  },
}