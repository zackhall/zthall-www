import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Container from '../components/Container'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import GlobalStyle from '../components/GlobalStyle'

import 'prismjs/themes/prism-tomorrow.css'

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <div>
          <Helmet>
            <html lang="en" />
            <title>{data.site.siteMetadata.title}</title>
            <meta
              name="description"
              content={data.site.siteMetadata.description}
            />

            <link rel="icon" type="svg+xml" href="/img/favicon.svg" />
            <meta name="theme-color" content="#0000ff" />

            <meta property="og:type" content="business.business" />
            <meta property="og:title" content={data.site.siteMetadata.title} />
            <meta property="og:url" content="/" />
            <meta property="og:image" content="/img/og-image.jpg" />
          </Helmet>
          <Navigation />
          <Container>{children}</Container>
          <Footer />
        </div>
      </>
    )}
  />
)

export default TemplateWrapper
