import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import dribbble from '../img/social/dribbble.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import github from '../img/social/github.svg'

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: var(--color-neutral-light);
`

const SocialIcon = styled.img`
  width: 1em;
  height: 1em;
  opacity: 0.5;
  margin: 1rem;
  &:hover {
    cursor: pointer;
    opacity: 1;
    filter: invert(0.3) sepia(1) saturate(60) hue-rotate(200deg);
  }
`

const Footer = class extends React.Component {
  render() {
    return (
      <FooterContainer>
        <div>
          <a title="dribbble" href="https://facebook.com">
            <SocialIcon src={dribbble} alt="Dribbble" />
          </a>
          <a title="twitter" href="https://twitter.com">
            <SocialIcon src={twitter} alt="Twitter" />
          </a>
          <a title="instagram" href="https://instagram.com">
            <SocialIcon src={instagram} alt="Instagram" />
          </a>
          <a title="github" href="https://vimeo.com">
            <SocialIcon src={github} alt="Github" />
          </a>
        </div>
        <div>
          <small>Copyright © 2019 Zack Hall</small>
        </div>
      </FooterContainer>
    )
  }
}

export default Footer
