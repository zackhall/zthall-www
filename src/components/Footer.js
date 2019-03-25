import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

import ButtonLink from '../components/ButtonLink'
import Container from '../components/Container'
import Modal from '../components/Modal'
import InputGroup from '../components/InputGroup'
import { phone } from '../utils/media'

import dribbble from '../img/social/dribbble.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import github from '../img/social/github.svg'

const FooterContainer = styled.footer`
  padding: 1rem;
  background: var(--color-primary);
  h1,
  a,
  * {
  }
  h1 {
    text-align: center;
  }
`
const light = css`
  color: var(--color-background);
`

const LightH1 = styled.h1`
  ${light}
`
const LightSmall = styled.small`
  ${light}
`

const SubFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  color: var(--color-neutral-light);
  ${phone(`
    display: block;
    text-align: center;
  `)}
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
const Footer = () => {
  const [isModalVisible, setModalVisible] = useState(false)
  return (
    <FooterContainer>
      <Container>
        <LightH1>
          Get in touch.
          <br />
          <ButtonLink onClick={() => setModalVisible(true)}>
            zack@zthall.com
          </ButtonLink>
        </LightH1>
        <SubFooter>
          <div>
            <Link title="dribbble" href="https://dribbble.com/zthall">
              <SocialIcon src={dribbble} alt="Dribbble" />
            </Link>
            <Link title="twitter" href="https://twitter.com/zthall">
              <SocialIcon src={twitter} alt="Twitter" />
            </Link>
            <Link title="instagram" href="https://instagram.com/zthall">
              <SocialIcon src={instagram} alt="Instagram" />
            </Link>
            <Link title="github" href="https://github.com/zackhall">
              <SocialIcon src={github} alt="Github" />
            </Link>
          </div>
          <div>
            <LightSmall>Copyright © 2019 Zack Hall</LightSmall>
          </div>
        </SubFooter>
      </Container>
      <Modal visible={isModalVisible} onClose={() => setModalVisible(false)}>
        <h4>Copy to clipboard.</h4>
        <p>
          You know it. I know it. Mailto links are broken. Nothing worse than a
          link that annoyingly opens a computer's default mail client.
        </p>
        <p>
          Use the link below to copy and paste my e-mail address into your
          preferred e-mail service. Can't wait to hear from you!
        </p>
        <InputGroup addOn="Copy" value="zack@zthall.com" />
      </Modal>
    </FooterContainer>
  )
}

export default Footer
