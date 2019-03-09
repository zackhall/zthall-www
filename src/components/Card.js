import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { phone, mobile } from '../utils/media'

export const CardGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;
  margin: 2rem 0;
  ${mobile(css`
    grid-template-columns: 1fr;
  `)}
`

const CardContainer = styled.div`
  border-radius: 10px;
  padding: 1rem;
  border: 1px solid var(--color-neutral-xlight);
  transition: 0.25s;
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0);
  }
`
const CardGraphicContainer = styled.div`
  display: inline-block;
  width: 28%;
  overflow: hidden;
  vertical-align: top;
`

const CardGraphic = styled.div`
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  padding-top: 100%;
  border-radius: 10px;
`

const CardContent = styled.div`
  display: inline-block;
  width: 67%;
  margin: 0 0 0 5%;
`

export const Card = ({ title, image, href }) => (
  <Link to={href}>
    <CardContainer>
      <CardGraphicContainer>
        <CardGraphic style={{ backgroundImage: `url(${image})` }} />
      </CardGraphicContainer>
      <CardContent>
        <h4>{title}</h4>
      </CardContent>
    </CardContainer>
  </Link>
)
