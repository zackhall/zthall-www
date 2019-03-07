import React from 'react'
import { graphql, Link } from "gatsby"

import Layout from '../../components/Layout'

export default class BlogIndexPage extends React.Component {
  render() {
    const edges = this.props.data.allMarkdownRemark.edges
    console.log(edges)
    const Posts = edges
      .filter(edge => !!edge.node.frontmatter.date)
      .map(edge => (
        <Link to={edge.node.fields.slug}>
          {edge.node.frontmatter.title} ({edge.node.frontmatter.date})
        </Link>
      ))

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <div
                className="full-width-image-container margin-top-0"
                style={{
                  backgroundImage: `url('/img/blog-index.jpg')`,
                }}
              >
                <h1
                  className="has-text-weight-bold is-size-1"
                  style={{
                    boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                    backgroundColor: '#f40',
                    color: 'white',
                    padding: '1rem',
                  }}
                >
                  Latest Stories
                </h1>
              </div>
            </div>
          </div>
        </section>
        <div>
          {Posts}
        </div>
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