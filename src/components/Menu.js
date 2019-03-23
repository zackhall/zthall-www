import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'gatsby'
import styled, { keyframes } from 'styled-components'
import transition from 'styled-transition-group'

const Root = styled.div`
  --timeout: 400ms;
  --timeout-half: 200ms;
  --toggler-height: 3rem;
  --toggler-width: 3rem;
  --menu-starting-top: 0;
  --menu-ending-top: 4.5rem;
  --menu-max-height: 30rem;
  --menu-width: 16rem;
  --menu-shadow-x: 0;
  --menu-shadow-y: 0;
  --menu-shadow-blur: 1rem;
  --menu-shadow-color: rgba(0, 0, 0, 0.25);
  --fade-from-color: transparent;
  --fade-to-color: var(--color-neutral);

  // position: absolute;
  position: relative;
  font-family: sans-serif;
  font-weight: 700;
  letter-spacing: 0.15em;

  ul {
    padding: 0;
    list-style-type: none;
  }

  li {
    padding: 1rem 0;
    font-size: 20px;
  }

  a {
    text-decoration: none;
    color: var(--color-neutral);
    display: inline;
    background-size: 1px 1em;
    padding: 0 0.25rem;
    overflow: hidden;
    transition: all 350ms;

    &:after {
      content: '→';
      display: inline-block;
      padding-left: 0.5rem;
      opacity: 0;
      transform: translateX(300px);
      transition: all var(--timeout);
    }

    &:hover {
      color: var(--color-primary);
      box-shadow: inset 0 -0.075em white,
        inset 0 -0.5em var(--color-primary-xxlight);

      &:after {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
`

const MenuButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 99;
  padding: calc(var(--toggler-height) / 2) calc(var(--toggler-width) / 2);
  border: none;
  cursor: pointer;
  position: relative;
  border-radius: 50%;
  background: ${props =>
    props.expanded ? 'var(--color-primary)' : 'var(--color-background)'};
  transition: all 100ms ease-in-out;
  border: 2px solid transparent;

  &:focus {
    outline: none;
    border: 2px solid var(--color-primary-xlight);
    box-shadow: 0 0 10px var(--color-primary-xlight);
  }

  &::before,
  &::after {
    content: ' ';
    display: block;
    position: absolute;
    height: 2px;
    width: calc(var(--toggler-width) * 1 / 2);
    background: ${props =>
      props.expanded ? 'var(--color-background)' : 'var(--color-primary)'};
    top: 50%;
    left: 50%;
    transition: all 100ms ease-in-out;
  }

  &::before {
    transform: ${props =>
      props.expanded
        ? 'translateX(-50%) translateY(0) rotate(-45deg)'
        : 'translateX(-50%) translateY(0.25rem)'};
  }
  &::after {
    transform: ${props =>
      props.expanded
        ? 'translateX(-50%) translateY(0) rotate(45deg)'
        : 'translateX(-50%) translateY(-0.25rem)'};
  }
`

const MenuItemsContainer = transition.div`
  position: absolute;
  top: var(--menu-ending-top);
  right: 0;
  max-height: var(--menu-max-height);
  width: var(--menu-width);
  z-index: 1;
  box-sizing: border-box;
  padding: 0 2rem;
  overflow: hidden;
  background-color: var(--color-background);
  color: var(--fade-to-color);
  opacity: 1;
  box-shadow: var(--menu-shadow-x) var(--menu-shadow-y) var(--menu-shadow-blur) var(--menu-shadow-color);
  white-space: nowrap;
  ul {
    transform: scale(1);
  }

  &:enter {
    top: var(--menu-starting-top);
    width: var(--toggler-width);
    max-height: var(--toggler-height);
    box-shadow: none;
    opacity: 0;
    * {
      color: var(--fade-from-color);
    }
    ul {
      transform: scale(0);
    }
  }

  &:enter-active {
    top: var(--menu-ending-top);
    width: var(--menu-width);
    max-height: var(--menu-max-height);
    opacity: 1;
    box-shadow: var(--menu-shadow-x) var(--menu-shadow-y) var(--menu-shadow-blur) var(--menu-shadow-color);
    transition: all var(--timeout);
    * {
      color: var(--fade-to-color);
      transition: all var(--timeout-half);
    }
    ul {
      transform: scale(1);
    }
  }

  &:exit {
    top: var(--menu-ending-top);
    width: var(--menu-width);
    max-height: var(--menu-max-height);
    opacity: 1;
    box-shadow: var(--menu-shadow-x) var(--menu-shadow-y) var(--menu-shadow-blur) var(--menu-shadow-color);
    * {
      color: var(--fade-to-color);
    }
    ul {
      transform: scale(1);
    }
  }

  &:exit-active {
    top: var(--menu-starting-top);
    width: var(--toggler-width);
    max-height: var(--toggler-height);
    opacity: 0;
    box-shadow: none;
    transition: color 500ms, all var(--timeout);
    * {
      color: var(--fade-from-color);
      transition: all var(--timeout-half);
    }
    ul {
      transform: scale(0);
    }
  }
`

const MenuArrow = transition.div`
  position: absolute;
  z-index: 2;
  top: var(--menu-ending-top);
  right: calc(var(--toggler-width) / 2);
  transform: translateY(-100%) translateX(50%);
  width: 0;
  height: 0;
  border-left: 0.5rem solid transparent;
  border-right: 0.5rem solid transparent;
  border-bottom: 0.5rem solid #fff;

  &:enter {
    top: var(--menu-starting-top);
    border-bottom: 0.5rem solid transparent;
  }

  &:enter-active {
    top: var(--menu-ending-top);
    border-bottom: 0.5rem solid #fff;
    transition: top var(--timeout), border-bottom 100ms);
  }

  &:exit {
    top: var(--menu-ending-top);
    border-bottom: 0.5rem solid #fff;
  }

  &:exit-active {
    top: var(--menu-starting-top);
    border-bottom: 0.5rem solid transparent;
    transition: all var(--timeout);
  }
`

const MenuItems = props => (
  <>
    <MenuArrow {...props} />
    <MenuItemsContainer {...props}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/contact/examples">Form Examples</Link>
        </li>
      </ul>
    </MenuItemsContainer>
  </>
)

export default () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <Root>
      <MenuButton expanded={showMenu} onClick={() => setShowMenu(!showMenu)} />
      <MenuItems
        in={showMenu}
        timeout={400}
        unmountOnExit
        // Need to fix on-click to animate before page navigation
        onClick={() => setShowMenu(false)}
      />
    </Root>
  )
}
