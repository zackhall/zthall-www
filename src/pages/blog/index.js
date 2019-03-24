import React from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/Card'

import postImage from '../../img/JS.png'

export default class BlogIndexPage extends React.Component {
  render() {
    const Posts = this.props.data.allMarkdownRemark.edges
      .filter(edge => !!edge.node.frontmatter.date)
      .map(edge => (
        <Card
          title={edge.node.frontmatter.title}
          image={postImage}
          href={edge.node.fields.slug}
        />
      ))

    return (
      <Layout>
        <h1>Blog Posts</h1>
        {Posts}
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
