import React from 'react'
import styled from 'styled-components'
import transition from 'styled-transition-group'
import { phone } from '../utils/media'

const Wrapper = transition.div`
  --timeout: 350ms;

  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--color-primary);
  height: 100vh;
  width: 100vw;
  z-index: 1000;
  transition: all ease-in-out var(--timeout);

  &:enter {
    background-color: transparent;
    & > div {
      opacity: 0;
      top: 60%;
    }
  }

  &:enter-active {
    background-color: var(--color-primary);
    & > div {
      opacity: 1;
      top: 50%;
    }
  }

  &:exit {
    background-color: var(--color-primary);
    & > div {
      opacity: 1;
      top: 50%;
    }
  }

  &:exit-active {
    background-color: transparent;
    & > div {
      opacity: 0;
      top: 60%;
    }
  }

`

const ModalBox = transition.div`
  width: 600px;
  padding: 2rem;
  background: var(--color-background);
  text-align: left;
  border-radius: 0.25rem;
  opacity: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all var(--timeout);

  ${phone(`
    max-width: 90%;
  `)}

  h1, h2, h3, h4, h5, h6 {
    text-align: center;
  }
`

const ModalContent = styled.div`
  padding-bottom: 2rem;
`

const ModalFooter = styled.div`
  background: var(--color-neutral-xlight);
  margin: 0 -2rem -2rem -2rem;
  padding: 1rem 2rem;
  border-radius: 0 0 0.25rem 0.25rem;
  text-align: right;
`

const Modal = ({ visible, children, onClose }) => {
  return (
    <Wrapper in={visible} timeout={400} unmountOnExit>
      <ModalBox>
        <ModalContent>{children}</ModalContent>
        <ModalFooter>
          <button onClick={onClose}>Close</button>
        </ModalFooter>
      </ModalBox>
    </Wrapper>
  )
}

export default Modal
