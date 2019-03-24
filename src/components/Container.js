import styled from 'styled-components'
import { mobile } from '../utils/media'

export default styled.div`
  max-width: 960px;
  margin: 0 auto;
  position: relative;
  ${mobile(`
    width: 100%;
    padding: 1rem;
  `)}
`
