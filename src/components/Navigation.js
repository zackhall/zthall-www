import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

import Menu from '../components/Menu'

import logo from '../img/logo.svg'
import logoType from '../img/logo-type.svg'
import { mobile, phone } from '../utils/media'

const Nav = styled.nav`
  background: var(--color-background);
  display: flex;
  justify-content: space-between;
  min-height: 3.5rem;
  max-width: 960px;
  margin: 0 auto;
  position: relative;
  padding-top: 5rem;

  ${phone(css`
    padding: 3rem 1rem 0;
  `)}
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile(css`
    padding-left: auto 1rem;
  `)}
`

const LogoImg = styled.img`
  height: 2rem;
`

const MainNav = styled.div`
  display: flex;
`
const Navigation = () => (
  <Nav role="navigation">
    <LogoContainer>
      <Link to="/" title="Logo">
        <LogoImg src={logoType} alt="Zack Hall" />
      </Link>
    </LogoContainer>
    <LogoContainer>
      <Link to="/" title="Logo">
        <LogoImg src={logo} alt="Zack Hall" />
      </Link>
    </LogoContainer>
    <Menu />
  </Nav>
)

export default Navigation
