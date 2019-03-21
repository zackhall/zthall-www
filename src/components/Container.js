import React from 'react'
import styled, { css } from 'styled-components'
import { mobile } from '../utils/media'

export default styled.div`
  max-width: 960px;
  margin: 0 auto;
  position: relative;
  ${mobile(css`
    width: 100%;
    padding: 2rem;
  `)}
`
