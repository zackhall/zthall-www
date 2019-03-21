import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled, { css } from 'styled-components'

// Components
import Layout from '../components/Layout'
import { mobile, phone } from '../utils/media'
import { LeadH1, LeadH2, LeadParagraph } from '../components/Lead'
import { Card, CardGallery } from '../components/Card'

// Assets
import headerImage from '../img/zack-hall-zthall.png'
import amazon from '../img/social/amazon.svg'
import microsoft from '../img/social/microsoft.svg'
import burpee from '../img/social/burpee.svg'
import lodash from '../img/social/lodash.svg'
import postImage from '../img/JS.png'

const HeaderContainer = styled.div`
  text-align: center;
  margin-top: 5rem;
`

const HeaderImage = styled.img`
  margin: 5rem 0;
  max-width: 100%;
`

const LightParagraph = styled.p`
  opacity: 0.75;
`

const Icon = styled.img`
  height: 2.5rem;
  margin: 4rem;
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
  margin: 7rem 0;
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
        <LeadH1>
          {heading.split('*').map((val, i) => {
            return i % 2 === 0 ? <>{val}</> : <em>{val}</em>
          })}
        </LeadH1>
        <LeadParagraph>{subheading}</LeadParagraph>
        {/* <LightParagraph>{description}</LightParagraph> */}
      </div>
      <div>
        <HeaderImage src={headerImage} alt="" />
      </div>
      <Centered>
        <Small>My work can be found on</Small>
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
        Useful tips, insights, and knowledge from my experience in building user
        experiences.
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
      filter: { frontmatter: { templateKey: { in: "blog-post" } } }
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
