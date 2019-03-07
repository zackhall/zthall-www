import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --color-primary: #3956A3;
    --color-background: #FFFFFF;
    --color-neutral: rgba(51, 51, 51, 1.0);
    --color-neutral-light: rgba(200, 200, 200, 1.0);
    --color-neutral-xlight: rgba(240, 240, 240, 1.0);
  }
  * {
    box-sizing: border-box;
  }
  html {
    overflow: hidden;
  }
  body {
    margin: 0;
    font-family: sans-serif;
  }
`
