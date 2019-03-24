import styled, { css } from 'styled-components'
import { mobile, phone } from '../utils/media'

const base = css`
  text-align: center;
  max-width: 750px;
  ${mobile(`
    max-width: 100%;
  `)}
`

export const LeadH1 = styled.h1`
  ${base}
  margin: 3rem auto 1.5rem;
`

export const LeadH2 = styled.h2`
  ${base}
  margin: 1rem auto 2rem;
`

export const LeadParagraph = styled.p`
  ${base}
  line-height: 1.5;
  font-size: 26px;
  font-weight: 200;
  margin: 1rem auto 2rem;
  ${phone(`
    font-size: 20px;
  `)}
`
