import { createGlobalStyle, css, keyframes } from 'styled-components'
import { mobile, phone } from '../utils/media'

const backgroundKeyframes = keyframes`
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
`

export default createGlobalStyle`
  :root {
    --color-primary: rgba(11, 36, 251, 1.00);
    --color-primary-light: rgba(11, 36, 251, 0.5);
    --color-primary-xlight: rgba(11, 36, 251, 0.25);
    --color-primary-xxlight: rgba(11, 36, 251, 0.15);
    --color-background: rgba(255, 255, 255, 1.00);
    --color-neutral: rgba(35, 35, 35, 1.00);
    --color-neutral-light: rgba(200, 200, 200, 1.00);
    --color-neutral-xlight: rgba(240, 240, 240, 1.00);

    --font-family-primary: -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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
  }

  ::selection {
    background: var(--color-primary);
    color: var(--color-background);
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--color-neutral);
    font-family: var(--font-family-primary);
    font-weight: 800;
    letter-spacing: -0.02em;
  }

  h1 {
    font-size: 72px;
    line-height: 1.2;
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

  em {
    color: var(--color-background);
    background: linear-gradient(-45deg, #342FD4, #2DB3C7, #2EC2A8);
    padding: 0.5rem;
    border-radius: 5px;
    background-size: 400% 400%;
    animation: ${backgroundKeyframes} 15s ease infinite;
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
  textarea {
    font-size: 100%;
    outline: 0;
    padding: .5rem 2.5rem .5rem 1rem;
    border: 1px solid currentColor;
    border-radius: .25rem!important;
    background-color: transparent;
    border: 1px solid var(--color-neutral-light);
    background-color: var(--color-background);
    &:focus {
      border-color: var(--color-primary);
      box-shadow: inset 0 1px 2px var(--color-neutral-light), 0 0 0 0.2em var(--color-neutral-xlight);
    }
  }

  textarea {
    height: 8rem;
    resize: none;
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
