// A button styled as a link
import styled from 'styled-components'

const ButtonLink = styled.button`
  padding: 0;
  margin: 0;
  text-decoration: underline;
  border: 0;
  background: transparent;
  border-radius: 0;
  color: inherit;
  font-family: inherit;

  &:focus,
  &:hover {
    border: none;
    box-shadow: none;
  }
`

export default ButtonLink
