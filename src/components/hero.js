import React, { Component } from "react"
import BackgroundImage from "gatsby-background-image"
import styled, { keyframes } from "styled-components"
import Img from "gatsby-image"
import { Link, StaticQuery, graphql } from "gatsby"
import Container from "../components/container"
import * as variable from "../components/variables"
import AnchorLink from "react-anchor-link-smooth-scroll"
import "react-html5video/dist/styles.css"
import downarrow from "../images/down-arrow.png"

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const FadeIn = ({ duration = 800, delay = 1000, children, ...delegated }) => {
  return (
    <Wrapper
      {...delegated}
      style={{
        ...(delegated.style || {}),
        animationDuration: duration + "ms",
        animationDelay: delay + "ms",
      }}
    >
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${fadeIn};
    animation-fill-mode: backwards;
  }
`

const HeroStyle = styled.div`
  #hero {
    transition: 0.5s;
    min-height: 700px;
    color: white;
    padding-bottom: 40px;
    padding-top: 50px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    @media (max-width: ${variable.mobileWidthSmall}) {
      align-items: center;
    }
    .hero-content {
      width: 100%;
      max-width: 850px;
      padding: 0px 20px;
      @media (max-width: ${variable.mobileWidthSmall}) {
        max-width: 390px;
        margin: 0 auto;
      }
      .hero-weed-coffee {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        h3 {
          font-size: 35px;
          line-height: 45px;
          font-weight: 500;
          margin-bottom: 13px;
        }
        .hero-weed {
          width: 50%;
          max-width: 345px;
          display: flex;
          flex-direction: column;
          .gatsby-image-wrapper {
            align-self: center;
            @media (max-width: ${variable.mobileWidthSmall}) {
              width: 149px !important;
              height: 153px !important;
            }
          }
        }
        .hero-coffee {
          width: 50%;
          max-width: 345px;
          text-align: right;
          display: flex;
          flex-direction: column;
          .gatsby-image-wrapper {
            align-self: center;
            @media (max-width: ${variable.mobileWidthSmall}) {
              width: 122px !important;
              height: 120px !important;
            }
          }
        }
      }
    }
    .hero-copy {
      font-size: 18px;
      line-height: 24px;
      text-align: center;
      @media (max-width: ${variable.mobileWidthSmall}) {
        display: none;
      }
    }
    .mobile-hero-copy {
      display: none;
    }
  }
  .hero-link {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    a {
      border: 1px solid rgb(255, 255, 255);
      padding: 10px 25px;
      border-radius: 5px;
      color: white;
      font-size: 20px;
      line-height: 26px;
      font-weight: 500;
      margin: 0px 20px;
      display: inline-block;
      width: auto;
      &:hover {
        color: black;
        background-color: white;
      }
    }
  }
  .mobile-hero-title {
    display: none;
  }
  @media (max-width: ${variable.mobileWidthSmall}) {
    .hero-weed-coffee {
      h3 {
        display: none;
      }
    }
    .mobile-hero-title {
      display: block;
      font-size: 25px;
      line-height: 30px;
      font-weight: 500;
      text-align: center;
      margin: 40px auto 15px auto;
    }
    .mobile-hero-copy {
      font-size: 15px;
      line-height: 18px;
      text-align: center;
      margin: 0 auto;
      font-weight: 400;
      display:block !important;
    }
    #hero {
      > div {
        width: 100%;
      }
    }
  }
  .hero-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    img {
      width: 20px;
      height: auto;
    }
  }
`

class Hero extends Component {
  render() {
    return (
      <HeroStyle>
        <BackgroundImage
          id="hero"
          fluid={this.props.data.heroBg.childImageSharp.fluid}
        >
          {" "}
          <FadeIn delay={2000}>
            <div className="hero-content">
              <div className="hero-weed-coffee">
                <div className="hero-weed">
                  <Img fixed={this.props.data.leaf.childImageSharp.fixed} />
                  <h3>Commercial Cannabis</h3>
                </div>
                <div className="hero-coffee">
                  <Img fixed={this.props.data.bean.childImageSharp.fixed} />
                  <h3>Blue Mountain Coffee</h3>
                </div>
              </div>
              <div className="mobile-hero-title">
                Invest in Commercial Cannabis and Luxury Coffee
              </div>
              <div className="hero-copy">
                Cannabis cultivation in Jamaica solves high supply chain costs
                for the global cannabis market. In the Blue Mountains,
                sustainable, commercial coffee production modernizes cultivation
                of the world’s most sought after luxury coffee.
              </div>
              <div className="mobile-hero-copy">
                Secure a stake in cannabis production just as the global market
                turns to Jamaica for supply solutions. Invest in the island’s
                historic luxury product.
              </div>
              <div className="hero-link">
                <AnchorLink href="#lpfooter">Get Started to Invest</AnchorLink>
              </div>
              <div className="hero-arrow">
                <img src={downarrow} />
              </div>
            </div>
          </FadeIn>
        </BackgroundImage>
      </HeroStyle>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query HerosQuery {
        heroBg: file(relativePath: { eq: "hero.png" }) {
          childImageSharp {
            fluid(maxWidth: 3840) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        leaf: file(relativePath: { eq: "CannabisLeaf.png" }) {
          childImageSharp {
            fixed(width: 199, height: 204) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        bean: file(relativePath: { eq: "Bean.png" }) {
          childImageSharp {
            fixed(width: 146, height: 145) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Hero data={data} {...props} />}
  />
)
