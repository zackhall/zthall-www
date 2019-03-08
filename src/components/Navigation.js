import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

import logo from '../img/logo.svg'
import { mobile, phone } from '../utils/media'

const Nav = styled.nav`
  background: var(--color-background);
  border-bottom: 1px solid var(--color-neutral-xlight);
`

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 3.25rem;
  max-width: 960px;
  margin: 0 auto;

  ${phone(css`
    display: block;
  `)}
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile(css`
    padding-left: 1rem;
  `)}
`

const LogoImg = styled.img`
  height: 2rem;
`

const MainNav = styled.div`
  display: flex;
`

const HamburgerMenu = styled.a`
  display: none;
  height: 3.25rem;
  width: 3.25rem;
  margin-left: auto;
  position: relative;
  cursor: pointer;

  &:hover {
    background: var(--color-neutral-xlight);
  }

  ${phone(css`
    display: block;
  `)}

  span {
    background-color: var(--color-primary);
    display: block;
    height: 1px;
    width: 16px;
    position: absolute;
    left: calc(50% - 8px);
  }

  span:nth-child(1) {
    top: calc(50% - 4px);
  }

  span:nth-child(2) {
    top: calc(50%);
  }

  span:nth-child(3) {
    top: calc(50% + 4px);
  }
`

const NavItems = styled.div`
  display: flex;

  ${phone(css`
    display: ${props => (props.visible ? 'block' : 'none')};
  `)}

  > * {
    padding: .75rem 1rem;
    line-height: 1.5
    display: flex;
    align-items: flex-end;
    justify-content: center;
    text-decoration: none;
    font-weight: 300;
    color: var(--color-neutral);

    &:hover {
      color: var(--color-primary);
    }
  }
`

const Navigation = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { expanded: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    return (
      <Nav role="navigation">
        <NavContainer>
          <MainNav>
            <LogoContainer>
              <Link to="/" title="Logo">
                <LogoImg src={logo} alt="Zack Hall" />
              </Link>
            </LogoContainer>
            <HamburgerMenu onClick={this.handleClick}>
              <span />
              <span />
              <span />
            </HamburgerMenu>
          </MainNav>
          <NavItems visible={this.state.expanded}>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/contact/examples">Form Examples</Link>
          </NavItems>
        </NavContainer>
      </Nav>
    )
  }
}

export default Navigation
