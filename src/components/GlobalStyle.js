import { createGlobalStyle, css } from 'styled-components'
import { desktop, mobile, phone } from '../utils/media'

const baseFont = {
  phone: 16,
  mobile: 18,
  desktop: 18,
}

// Inspiration: https://medium.com/sketch-app-sources/exploring-responsive-type-scales-cf1da541be54
const fontScale = {
  phone: 1.15,
  mobile: 1.25,
  desktop: 1.25,
}

const heading = headingLevel => css`
  ${desktop(
    `font-size: ${baseFont.desktop *
      Math.pow(fontScale.desktop, 7 - headingLevel)}px;`
  )}
  ${mobile(
    `font-size: ${baseFont.mobile *
      Math.pow(fontScale.mobile, 7 - headingLevel)}px;`
  )}
  ${phone(
    `font-size: ${baseFont.phone *
      Math.pow(fontScale.phone, 7 - headingLevel)}px;`
  )}
`

export default createGlobalStyle`
  :root {
    --color-primary: rgba(11, 36, 251, 1.00);
    --color-primary-light: rgba(11, 36, 251, 0.5);
    --color-primary-xlight: rgba(11, 36, 251, 0.25);
    --color-primary-xxlight: rgba(11, 36, 251, 0.15);
    --color-secondary: rgba(245, 238, 218, 1.00);
    --color-background: rgba(255, 255, 255, 1.00);
    --color-neutral: rgba(28, 47, 89, 1.00);
    --color-neutral-light: rgba(200, 200, 200, 1.00);
    --color-neutral-xlight: rgba(240, 240, 240, 1.00);
    --color-neutral-xxlight: rgba(250, 250, 250, 1.00);

    --font-family-primary: proxima-nova, -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --font-family-display: warnock-pro, serif;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: var(--font-family-primary);
    font-weight: 300;
    letter-spacing: 0.01em;
    line-height: 1.7
    font-size: ${baseFont.desktop}px;
    ${mobile(`
      font-size: ${baseFont.mobile}px;
    `)}
    ${phone(`
      font-size: ${baseFont.phone}px;
    `)}
  }

  ::selection {
    background: var(--color-primary);
    color: var(--color-background);
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--color-neutral);
    font-weight: 800;
    letter-spacing: -0.02em;
    margin-block-start: 1.5em;
    margin-block-end: 0.5em;
  }

  h1 {
    font-family: var(--font-family-display);
    line-height: 1.2;
    ${heading(1)};
  }

  h2 {
    line-height: 1.1;
    ${heading(2)};
  }

  h3 {
    line-height: 1.1;
    ${heading(3)};
  }

  h4 {
    line-height: 1.1;
    ${heading(4)};
  }

  h5 {
    line-height: 1.1;
    ${heading(5)};
  }

  h6 {
    line-height: 1.1;
    ${heading(6)};
  }

  pre {
    border-radius: 5px;
    margin: 2rem 0 !important;
  }

  label {
    font-weight: 600;
    display: block;
    margin: 0.75rem 0 0.25rem;
    color: var(--color-neutral);
  }

  input,
  textarea,
  button {
    font-size: 100%;
    outline: 0;
    padding: .5rem;
    border-radius: .25rem!important;
    border: 1px solid var(--color-neutral-light);
    background-color: var(--color-background);
    &:focus {
      border-color: var(--color-primary);
      box-shadow: inset 0 1px 2px var(--color-neutral-light), 0 0 0 0.2em var(--color-neutral-xlight);
    }
  }

  button {
    padding: .5rem 1rem;
    &:hover {
      cursor: pointer;
    }
  }

  textarea {
    height: 8rem;
    resize: none;
    padding: .5rem 2.5rem .5rem 1rem;
    &:focus {
      border-color: var(--color-primary);
      box-shadow: inset 0 1px 2px var(--color-neutral-light), 0 0 0 0.2em var(--color-neutral-xlight);
    }
  }

  select {
    cursor: pointer;
    -moz-appearance: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-appearance: none;
    -webkit-user-select: none;
    appearance: none;
    font-size: 100%;
    outline: 0;
    padding: .5rem 2.5rem .5rem 1rem;
    border: 1px solid var(--color-neutral-light);
    border-radius: .25rem!important;
    background-color: transparent;
    background-color: var(--color-background);
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='32px' height='32px' viewBox='0 0 32 32' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg transform='translate(-736.000000, -1016.000000)' fill='%234D4D4D' fill-rule='nonzero'%3E%3Cpolygon points='736.108962 1016.5 766.8393 1016.5 751.474131 1039.83452'%3E%3C/polygon%3E%3C/g%3E%3C/svg%3E");
    background-position: center right 1rem;
    background-size: .5rem .5rem;
    background-repeat: no-repeat;
    &:focus {
      border-color: var(--color-primary);
      box-shadow: inset 0 1px 2px var(--color-neutral-light), 0 0 0 0.2em var(--color-neutral-xlight);
    }
    &:hover {
      background-color: var(--color-background);
      border-color: var(--color-primary);
    }
  }
`
