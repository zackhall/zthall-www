import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled, { css } from 'styled-components'

import Layout from '../components/Layout'
import { mobile, phone } from '../utils/media'
import headerImage from '../img/pages.svg'

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  ${phone(css`
    flex-direction: column-reverse;
  `)}
  > * {
    flex: 1 1 0;
    margin: auto;
  }
  & img {
    max-width: 100%;
    ${phone(css`
      max-height: 228px;
    `)}
  }
  > *:nth-child(2) {
    max-width: 50%;
    ${phone(css`
      max-width: 100%;
    `)}
  }
`

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  description,
  main,
}) => (
  <HeaderContainer>
    <div>
      <h1>
        {title}
      </h1>
    </div>
    <div>
      <img src={headerImage} alt="" />
    </div>
  </HeaderContainer>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        description={frontmatter.description}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        description
      }
    }
  }
`
