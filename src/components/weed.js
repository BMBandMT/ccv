import React, { Component } from "react"
import BackgroundImage from "gatsby-background-image"
import styled, { keyframes } from "styled-components"
import Img from "gatsby-image"
import { Link, StaticQuery, graphql } from "gatsby"
import Container from "./container"
import * as variable from "./variables"
import AnchorLink from "react-anchor-link-smooth-scroll"

const WeedStyle = styled.div`
  .weed-top {
    padding: 115px 20px;
    @media (max-width: ${variable.mobileWidthSmall}) {
      padding: 50px 20px;
    }
  }
  .weed-image {
    display: flex;
    justify-content: center;
    @media (max-width: ${variable.mobileWidthSmall}) {
      .gatsby-image-wrapper {
        width: 125px !important;
        height: 106px !important;
      }
    }
  }
  .weed-title {
    max-width: 650px;
    margin: 0 auto;
    font-size: 24px;
    line-height: 32px;
    font-weight: bold;
    text-align: center;
    margin-top: 10px;
    @media (max-width: ${variable.mobileWidthSmall}) {
      display: none;
    }
  }
  .mobile-weed-title {
    display: none;
    @media (max-width: ${variable.mobileWidthSmall}) {
      display: block;
      font-size: 19px;
      line-height: 25px;
      font-weight: bold;
      text-align: center;
      margin: 10px 0px;
    }
  }
  .weed-2021 {
    margin-top: 20px;
    p {
      font-size: 18px;
      line-height: 24px;
      text-align: center;
      @media (max-width: ${variable.mobileWidthSmall}) {
        font-size: 15px;
        line-height: 20px;
      }
      :nth-child(2) {
        @media (max-width: ${variable.mobileWidthSmall}) {
          display: none;
        }
      }
    }
  }
  .weed-gram-container {
    display: flex;
    justify-content: space-between;
    max-width: 900px;
    margin: 80px auto 0px auto;
    @media (max-width: ${variable.mobileWidthSmall}) {
      flex-direction: column;
      margin: 60px auto 0px auto;
    }
    .weed-lb {
      width: 50%;
      max-width: 415px;
      text-align: center;
      @media (max-width: ${variable.mobileWidthSmall}) {
        width: 100%;
      }
    }
    .weed-gram {
      width: 50%;
      max-width: 415px;
      text-align: center;
      @media (max-width: ${variable.mobileWidthSmall}) {
        width: 100%;
        margin-top: 40px;
      }
    }
    h3 {
      font-size: 24px;
      margin: 0px;
      @media (max-width: ${variable.mobileWidthSmall}) {
        font-size: 19px;
        line-height: 25px;
      }
    }
    p {
      font-size: 18px;
      line-height: 24px;
      margin: 10px 0px 0px 0px;
      @media (max-width: ${variable.mobileWidthSmall}) {
        font-size: 15px;
        line-height: 20px;
      }
    }
  }
  .weed-million {
    text-align: center;
    max-width: 900px;
    margin: 60px auto 0px auto;
    @media (max-width: ${variable.mobileWidthSmall}) {
      margin: 40px auto 0px auto;
    }
    h3 {
      font-size: 24px;
      margin: 0px;
      @media (max-width: ${variable.mobileWidthSmall}) {
        font-size: 19px;
        line-height: 25px;
      }
    }
    p {
      font-size: 18px;
      line-height: 24px;
      margin: 10px 0px 0px 0px;
      @media (max-width: ${variable.mobileWidthSmall}) {
        font-size: 15px;
        line-height: 20px;
      }
    }
  }
  .mt-mobile-logos {
    margin-top: 80px;
    opacity: 0.5;
    @media (max-width: ${variable.mobileWidthSmall}) {
      margin-top: 60px;
    }
    > div {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 10px;
      align-items: center;
      > div {
        margin: 5px 15px;
      }
      &:nth-child(1) {
        > div {
          &:nth-child(1) {
            width: 80px !important;
            img {
              width: 100%;
              height: auto !important;
            }
          }
          &:nth-child(2) {
            width: 100px !important;
            img {
              width: 100%;
              height: auto !important;
            }
          }
        }
      }
      &:nth-child(2) {
        > div {
          &:nth-child(1) {
            width: 120px !important;
            img {
              width: 100%;
              height: auto !important;
            }
          }
          &:nth-child(2) {
            width: 120px !important;
            img {
              width: 100%;
              height: auto !important;
            }
          }
        }
      }
    }
  }
  .mt-mobile-jamaican {
    margin: 80px auto 0px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 850px;
    @media (max-width: ${variable.mobileWidthSmall}) {
      margin-top: 60px;
    }
    .gatsby-image-wrapper {
      width: 238px;
      opacity: 0.75;
      @media (max-width: ${variable.mobileWidthSmall}) {
        width: 75px !important;
        height: 35px !important;
        img {
          width: 100%;
          height: auto !important;
        }
      }
    }
    .mt-mobile-jamailcan-copy {
      width: calc(100% - 275px);
      border-left: 2px solid black;
      padding-left: 45px;
      font-size: 18px;
      line-height: 24px;
      @media (max-width: ${variable.mobileWidthSmall}) {
        width: calc(100% - 100px);
        font-size: 14px;
        line-height: 19px;
        padding-left: 20px;
      }
    }
  }
  #middle {
    color: white;
    text-align: center;
    padding: 100px 0px;
    @media (max-width: ${variable.mobileWidthSmall}) {
      padding: 75px 0px;
    }
    h2 {
      font-size: 24px;
      line-height: 32px;
      @media (max-width: ${variable.mobileWidthSmall}) {
        display: none;
      }
    }
    h2.mobile-h2 {
      display: none;
      @media (max-width: ${variable.mobileWidthSmall}) {
        display: block;
        font-size: 19px;
        line-height: 25px;
      }
    }
    p {
      font-size: 18px;
      line-height: 24px;
      @media (max-width: ${variable.mobileWidthSmall}) {
        font-size: 19px;
        line-height: 25px;
        font-weight: 500;
      }
    }
    .middle-link {
      display: flex;
      justify-content: center;
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
  }
`

class Weed extends Component {
  render() {
    return (
      <WeedStyle>
        <Container className="weed-top">
          <div className="weed-image">
            <Img fixed={this.props.data.weed.childImageSharp.fixed} />
          </div>
          <div className="weed-title">
            Jamaica is positioned to supply the global cannabis market, solving
            high supply chain costs globally.
          </div>
          <div className="mobile-weed-title">
            Jamaica is positioned to supply the global cannabis market.
          </div>
          <div className="weed-2021">
            <p>
              In 2021, Jamaica will pass export legislation to produce and
              export medical-grade cannabis to legal markets around the world,
              becoming one of only 10 countries with a rigorous cannabis export
              regime.
            </p>
            <p>
              Jamaica-based producers are poised to solve high supply chain
              costs for countless global cannabis companies.
            </p>
          </div>
          <div className="weed-gram-container">
            <div className="weed-lb">
              <h3>$100/lb</h3>
              <p>
                A Jamaica-based cultivator can produce one pound of cannabis for
                roughly $100. That figure exceeds $400 in North America.
              </p>
            </div>
            <div className="weed-gram">
              <h3>$2/gram</h3>
              <p>
                Jamaican producers can sell cannabis for a wholesale price of
                $2/gram, roughly 1/3 the wholesale price of a North American
                producer.
              </p>
            </div>
          </div>
          <div className="weed-million">
            <h3>$46 million</h3>
            <p>
              A producer with 50 modern hybrid greenhouse can cultivate 23
              million grams of cannabis per year, a revenue surpassing $46
              million each year.
            </p>
          </div>
          <div className="mt-mobile-logos">
            <div>
              <Img fixed={this.props.data.yahoo.childImageSharp.fixed} />
              <Img fixed={this.props.data.benz.childImageSharp.fixed} />
            </div>
            <div>
              <Img fixed={this.props.data.chicago.childImageSharp.fixed} />
              <Img fixed={this.props.data.baltimore.childImageSharp.fixed} />
            </div>
          </div>
          <div className="mt-mobile-jamaican">
            <Img fixed={this.props.data.yahoolarge.childImageSharp.fixed} />
            <div className="mt-mobile-jamailcan-copy">
              <p>
                ???Jamaican export legislation [is] expected to be finalized in
                mid-2021, and the global industry???s need for a solution to quell
                supply shortages remains.
              </p>
              <p>
                Market stresses from COVID-19 have only inflamed a need for
                cost-effective supply and exposed the reality that licensed
                cultivation in North America is untenable to sustain market
                growth.???
              </p>
            </div>
          </div>
        </Container>
        <BackgroundImage
          id="middle"
          fluid={this.props.data.middlebg.childImageSharp.fluid}
        >
          <Container>
            <h2>
              Secure a stake in global cannabis growth. Invest in a historic
              luxury product.
            </h2>
            <p>Contact our investment team to get started.</p>
            <div className="middle-link">
              <AnchorLink href="#lpfooter">Invest Now</AnchorLink>
            </div>
          </Container>
        </BackgroundImage>
      </WeedStyle>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query WeedQuery {
        weed: file(relativePath: { eq: "LeafIllustration.png" }) {
          childImageSharp {
            fixed(width: 190, height: 160) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        yahoo: file(relativePath: { eq: "yahoosmall.png" }) {
          childImageSharp {
            fixed(width: 85, height: 31) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        yahoolarge: file(relativePath: { eq: "YahooFinanceMid.png" }) {
          childImageSharp {
            fixed(width: 238, height: 87) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        benz: file(relativePath: { eq: "benzsmall.png" }) {
          childImageSharp {
            fixed(width: 146, height: 19) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        baltimore: file(relativePath: { eq: "baltimoresmall.png" }) {
          childImageSharp {
            fixed(width: 269, height: 20) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        chicago: file(relativePath: { eq: "chicagosmall.png" }) {
          childImageSharp {
            fixed(width: 196, height: 30) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        middlebg: file(relativePath: { eq: "middlebg.png" }) {
          childImageSharp {
            fluid(maxWidth: 3840) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Weed data={data} {...props} />}
  />
)
