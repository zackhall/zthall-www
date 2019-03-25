import React, { useRef } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-content: stretch;
`

const Input = styled.input`
  flex: 1 0 auto;
  border-radius: 0 0.25rem 0.25rem 0 !important;
`

const AddOn = styled.span`
  background: var(--color-neutral-xlight);
  border: 1px solid var(--color-neutral-light);
  padding: 0.5em 1em;
  border-radius: 0.25rem 0 0 0.25rem;
  border-right: none;

  &:hover {
    cursor: pointer;
    background: var(--color-neutral-xxlight);
  }
`

const InputGroup = ({ addOn, value, disabled }) => {
  const inputEl = useRef(null)
  const onAddOnClick = () => {
    inputEl.current.select()
    document.execCommand('copy')
  }
  return (
    <Wrapper>
      <AddOn onClick={onAddOnClick}>{addOn}</AddOn>
      <Input type="text" value={value} disabled={disabled} ref={inputEl} />
    </Wrapper>
  )
}

export default InputGroup
