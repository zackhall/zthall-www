import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { css } from 'styled-components'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import GlobalStyle from '../components/GlobalStyle'
import { mobile } from '../utils/media'

import 'prismjs/themes/prism-tomorrow.css'

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  min-height: 80vh;
  ${mobile(css`
    width: 100%;
    padding: 2rem;
  `)}
`

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

            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/img/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              href="/img/favicon-32x32.png"
              sizes="32x32"
            />
            <link
              rel="icon"
              type="image/png"
              href="/img/favicon-16x16.png"
              sizes="16x16"
            />

            <link
              rel="mask-icon"
              href="/img/safari-pinned-tab.svg"
              color="#ff4400"
            />
            <meta name="theme-color" content="#fff" />

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
