import React from 'react'
import { graphql, Link } from 'gatsby'
import styled, { css } from 'styled-components'

import Layout from '../../components/Layout'
import {phone, mobile } from '../../utils/media'

import postImage from '../../img/JS.png'

const CardGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;
  margin: 2rem 0;
  ${mobile(css`
    grid-template-columns: 1fr;
  `)}
`

const Card = styled.div`
  border-radius: 10px;
  padding: 1rem;
  border: 1px solid var(--color-neutral-xlight);
  transition: 0.25s;
  &:hover {
    box-shadow: 0 10px 20px rgba(0,0,0,.1);
    border: 1px solid rgba(0,0,0,0);
  }
`
const CardGraphicContainer = styled.div`
  display: inline-block;
  width: 28%;
  overflow: hidden;
  vertical-align: top;
`

const CardGraphic = styled.div`
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  padding-top: 100%;
  border-radius: 10px;
`

const CardContent = styled.div`
  display: inline-block;
  width: 67%;
  margin: 0 0 0 5%;
`

export default class BlogIndexPage extends React.Component {
  render() {
    const Posts = this.props.data.allMarkdownRemark.edges
      .filter(edge => !!edge.node.frontmatter.date)
      .map(edge => (
        <Link to={edge.node.fields.slug}>
          <Card>
            <CardGraphicContainer>
              <CardGraphic style={{ backgroundImage: `url(${postImage})` }} />
            </CardGraphicContainer>
            <CardContent>
              <h4>{edge.node.frontmatter.title}</h4>
            </CardContent>
          </Card>
        </Link>
      ))

    return (
      <Layout>
        <h1>Blog Posts</h1>
        <CardGallery>{Posts}</CardGallery>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query BlogIndexPage {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
