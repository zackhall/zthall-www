import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled, { css } from 'styled-components'

// Components
import Layout from '../components/Layout'
import { mobile, phone } from '../utils/media'
import { LeadH2, LeadParagraph } from '../components/Lead'
import { Card, CardGallery } from '../components/Card'

// Assets
import headerImage from '../img/pages.svg'
import amazon from '../img/social/amazon.svg'
import microsoft from '../img/social/microsoft.svg'
import burpee from '../img/social/burpee.svg'
import lodash from '../img/social/lodash.svg'
import postImage from '../img/JS.png'

const HeaderContainer = styled.div`
  text-align: center;
  p {
    line-height: 1.5;
    font-size: 26px;
    font-weight: 200;
    max-width: 750px;
    margin: auto;
    ${phone(css`
      font-size: 20px;
    `)}
  }
  img {
    max-width: 100%;
  }
`

const Icon = styled.img`
  height: 2rem;
  margin: 2rem;
  opacity: 0.75;
`

const Centered = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Small = styled.p`
  && {
    text-align: center;
    font-size: 14px;
    font-weight: 300;
    font-color: var(--color-neutral-light);
  }
`

const Section = styled.section`
  margin: 5rem 0;
  ${phone(css`
    margin: 1.5rem 0;
  `)}
`

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  description,
  main,
  posts,
}) => (
  <>
    <HeaderContainer>
      <div>
        <h1>{heading}</h1>
        <p>{subheading}</p>
      </div>
      <div>
        <img src={headerImage} alt="" />
      </div>
      <Centered>
        <Small>Trusted by</Small>
      </Centered>
      <Centered>
        <Icon src={amazon} />
        <Icon src={microsoft} />
        <Icon src={burpee} />
        <Icon src={lodash} />
      </Centered>
    </HeaderContainer>
    <Section>
      <LeadH2>Writing</LeadH2>
      <LeadParagraph>
        Build bridges, not walls. Sharing openly my explorations in designing
        and coding user experiences.
      </LeadParagraph>
      <CardGallery>
        {posts.map(post => (
          <Card
            title={post.node.frontmatter.title}
            image={postImage}
            href={post.node.fields.slug}
          />
        ))}
      </CardGallery>
    </Section>
  </>
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
  posts: PropTypes.array,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { edges } = data.allMarkdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        description={frontmatter.description}
        posts={edges}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
    allMarkdownRemark: PropTypes.object,
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
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 4
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
