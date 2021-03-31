/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import Container from "../components/container"
import styled from "styled-components"
import "./layout.css"
import * as variable from "../components/variables"

const LayoutStyle = styled.div`
  .footer-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: ${variable.mobileWidth}) {
      flex-direction: column;
    }
  }
  .footer-inner div:nth-child(1) {
    width: calc(100% - 200px);
    @media (max-width: ${variable.mobileWidth}) {
      width: 100%;
    }
  }
  .footer-inner div:nth-child(2) {
    width: 200px;
    a {
      color: #707070;
    }
    @media (max-width: ${variable.mobileWidth}) {
      width: 100%;
      margin-top: 20px;
    }
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      heroBg: file(relativePath: { eq: "herobg.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <LayoutStyle>
        <main>{children}</main>
        <footer>
          <Container>
            <div className="footer-inner">
              <div>
                &copy; {new Date().getFullYear()} Coffee Cannabis Ventures | All
                Rights Reserved
              </div>
            </div>
          </Container>
        </footer>
      </LayoutStyle>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
