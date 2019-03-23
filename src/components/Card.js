import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { phone, mobile } from '../utils/media'

const CardImageContainer = styled.div`
  display: inline-block;
  height: 6rem;
  width: 6rem;
  margin: 0 2rem 2rem 0;
  position: relative;
  transform: translate(0.25rem, 0.25rem);
  transition: all 200ms ease-in-out;

  &:hover {
    transform: translate(0, 0);
  }

  ${phone(`
    height: 4rem;
    width: 4rem;
    margin: 0 1rem 1rem 0;
  `)}

  &::after {
    content: ' ';
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: var(--color-secondary);
    z-index: -1;
    transform: translateX(1.5rem) translateY(1.5rem);

    ${phone(`
      transform: translateX(0.75rem) translateY(0.75rem) !important;
    `)}
  }
`

const CardImage = styled.div`
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  transition: all 200ms ease-in-out;

  &:hover {
    transform: translate(-0.35rem, -0.35rem) scale(1.075);
    box-shadow: 0.25rem 0.25rem 1rem rgba(0, 0, 0, 0.25);
  }
`

const CardContent = styled.div`
  display: inline-block;
  width: 67%;
  margin: 0 0 0 5%;
`

export const Card = ({ title, description, image, href }) => (
  <div>
    <Link to={href}>
      <CardImageContainer>
        <CardImage style={{ backgroundImage: `url(${image})` }} />
      </CardImageContainer>
    </Link>
    <CardContent>
      <Link to={href}>
        <h4>{title}</h4>
      </Link>
      <p>
        {description} <Link to={href}>Read more.</Link>
      </p>
    </CardContent>
  </div>
)
