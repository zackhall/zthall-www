import React from 'react'
import styled, { css } from 'styled-components'

import { mobile, phone } from '../utils/media'

export const LeadHeading = styled.h1`
  text-align: center;
  // max-width: 75%;
  margin: 3rem auto 1.5rem;
  ${mobile(css`
    max-width: 100%;
  `)}
`

export const LeadParagraph = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 26px;
  font-weight: 200;
  // max-width: 75%;
  margin: 1rem auto 2rem;
  ${mobile(css`
    max-width: 100%;
  `)}
  ${phone(css`
    font-size: 20px;
  `)}
`