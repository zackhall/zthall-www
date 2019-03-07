import { createGlobalStyle, css } from 'styled-components'
import { mobile, phone } from '../utils/media'

export default createGlobalStyle`
  :root {
    --color-primary: #3956A3;
    --color-background: #FFFFFF;
    --color-neutral: rgba(51, 51, 51, 1.0);
    --color-neutral-light: rgba(200, 200, 200, 1.0);
    --color-neutral-xlight: rgba(240, 240, 240, 1.0);

    --font-family-primary: Helvetica, Arial, sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  html {
    overflow: hidden;
  }

  body {
    margin: 0;
    font-family: var(--font-family-primary);
    font-weight: 300;
  }

::selection {
  background: var(--color-primary);
  color: var(--color-background);
}

  h1, h2, h3, h4, h5, h6 {
    color: var(--color-neutral);
    font-family: var(--font-family-primary);
    font-weight: 700;
    letter-spacing: -0.025em;
  }

  h1 {
    font-size: 72px;
    line-height: 1;
    ${mobile(css`
      font-size: 56px;
    `)}
    ${phone(css`
      font-size: 48px;
    `)}
  }

  h2 {
    font-size: 58px;
    line-height: 1;
    ${mobile(css`
      font-size: 52px;
    `)}
    ${phone(css`
      font-size: 36px;
    `)}
  }

  h3 {
    font-size: 44px;
    line-height: 1.1;
    ${mobile(css`
      font-size: 36px;
    `)}
    ${phone(css`
      font-size: 26px;
    `)}
  }
`
