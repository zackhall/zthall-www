import React from 'react';
import { Link, graphql } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../components/layout';
import SectionHeading from '../components/sectionHeading';
import SEO from '../components/seo';

const Homepage = ({ data, location }) => {
  let posts = data.allMarkdownRemark.edges;

  const header = (
    <div className="bg-green-800 py-8 mb-16">
      <div className="container px-4 block md:grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col justify-center -mb-12 md:mb-0">
          <span className="font-display text-red-600 text-base font-bold mb-2">
            Zack Hall
          </span>
          <h1 className="text-xxl">Front-end developer in Boston, MA.</h1>
          <p>
            Currently, engineer at Smartsheet. Formerly AWS, Alexa, Amazon.com, Edge
            browser, and Windows.
          </p>
        </div>
        <div className="max-w-full">
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            imgStyle={{ marginBottom: 0 }}
            className="border-white border-8 max-w-full"
            style={{
              transform: 'translateY(20%)',
            }}
          />
        </div>
      </div>
    </div>
  );

  posts = posts
    .map(x => x.node)
    .map(post => (
      <div>
        <h4 className="font-body font-normal h-10 mb-2">
          <Link
            className="hover:text-green-200 hover:z-underline"
            to={post.fields.slug}
          >
            {post.frontmatter.title}
          </Link>
        </h4>
        <p className="text-green-300 text-sm font-display my-2">
          {post.frontmatter.date}
        </p>
        <p className="text-green-300 text-sm">{post.frontmatter.description}</p>
      </div>
    ));

  return (
    <Layout location={location} header={header} dark="true">
      <SEO title="Home" />
      <SectionHeading>Experience</SectionHeading>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 row-gap-8 mb-24">
          <img
            className="max-w-full max-h-16 mb-6 grayscale"
            src={data.amazon.publicURL}
          />
          <img
            className="max-w-full mb-6 grayscale"
            src={data.microsoft.publicURL}
          />
          <img
            className="max-w-full mb-6 grayscale"
            src={data.smartsheet.publicURL}
          />
          <a href="https://sketchupforwoodworkers.com">
            <img
              aria-label="SketchUp Tutorials For Woodworkers"
              className="max-w-full mb-6 grayscale"
              src={data.sfw.publicURL}
            />
          </a>
      </div>
      <SectionHeading to="/notes">Notes</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-24">
        {posts}
      </div>
    </Layout>
  );
};

export default Homepage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 480, height: 600, cropFocus: ATTENTION) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    amazon: file(absolutePath: { regex: "/amazon.svg/" }) {
      publicURL
    }
    microsoft: file(absolutePath: { regex: "/microsoft.svg/" }) {
      publicURL
    }
    smartsheet: file(absolutePath: { regex: "/smartsheet.svg/" }) {
      publicURL
    }
    sfw: file(absolutePath: { regex: "/sketchup-for-woodworkers.svg/" }) {
      publicURL
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
