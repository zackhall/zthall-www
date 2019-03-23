import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { phone, mobile } from '../utils/media'

const CardContainer = styled.div``

const CardImage = styled.div`
  display: inline-block;
  height: 8rem;
  width: 8rem;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  margin-right: 2rem;

  ${phone(`
    height: 4rem;
    width: 4rem;
    margin-right: 1rem;

    &::before {
      transform: translateX(1rem) translateY(1rem) !important;
    }
  `)}

  &::before {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: var(--color-secondary);
    z-index: -1;
    transform: translateX(2rem) translateY(2rem);
  }
`

const CardContent = styled.div`
  display: inline-block;
  width: 67%;
  margin: 0 0 0 5%;
`

export const Card = ({ title, description, image, href }) => (
  <CardContainer>
    <Link to={href}><CardImage style={{ backgroundImage: `url(${image})` }} /></Link>
    <CardContent>
      <Link to={href}><h4>{title}</h4></Link>
      <p>{description} <Link to={href}>Read more.</Link></p>
    </CardContent>
  </CardContainer>
)
