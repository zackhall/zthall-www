import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

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
  padding-top: 3rem;
  margin-bottom: 8rem;

  ${mobile(`
    padding: 3rem 1rem 0;
    margin-bottom: 3rem;
  `)}
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const DesktopOnlyLogoContainer = styled(LogoContainer)`
  ${phone(`
    display: none;
    visibility: hidden;
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
    <DesktopOnlyLogoContainer>
      <Link to="/" title="Logo">
        <LogoImg src={logoType} alt="Zack Hall" />
      </Link>
    </DesktopOnlyLogoContainer>
    <LogoContainer>
      <Link to="/" title="Logo">
        <LogoImg src={logo} alt="Zack Hall" />
      </Link>
    </LogoContainer>
    <Menu />
  </Nav>
)

export default Navigation
