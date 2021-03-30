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
    padding: 115px 0px;
  }
  .weed-image {
    display: flex;
    justify-content: center;
  }
  .weed-title {
    max-width: 650px;
    margin: 0 auto;
    font-size: 24px;
    line-height: 32px;
    font-weight: bold;
    text-align: center;
    margin-top: 10px;
  }
  .weed-2021 {
    margin-top: 20px;
    p {
      font-size: 18px;
      line-height: 24px;
      text-align: center;
    }
  }
  .weed-gram-container {
    display: flex;
    justify-content: space-between;
    max-width: 900px;
    margin: 100px auto 0px auto;
    .weed-lb {
      width: 50%;
      max-width: 415px;
      text-align: center;
    }
    .weed-gram {
      width: 50%;
      max-width: 415px;
      text-align: center;
    }
    h3 {
      font-size: 24px;
      margin: 0px;
    }
    p {
      font-size: 18px;
      line-height: 24px;
      margin: 10px 0px 0px 0px;
    }
  }
  .weed-million {
    text-align: center;
    max-width: 900px;
    margin: 60px auto 0px auto;
    h3 {
      font-size: 24px;
      margin: 0px;
    }
    p {
      font-size: 18px;
      line-height: 24px;
      margin: 10px 0px 0px 0px;
    }
  }
  .mt-mobile-logos {
    margin-top: 100px;
    opacity: 0.5;
    > div {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 10px;
      align-items: center;
      > div {
        margin: 5px 15px;
      }
    }
  }
  .mt-mobile-jamaican {
    margin: 100px auto 0px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 850px;
    .gatsby-image-wrapper {
      width: 238px;
      opacity: 0.75;
    }
    .mt-mobile-jamailcan-copy {
      width: calc(100% - 275px);
      border-left: 2px solid black;
      padding-left: 45px;
      font-size: 18px;
      line-height: 24px;
    }
  }
  #middle {
    color: white;
    text-align: center;
    padding: 100px 0px;
    h2 {
      font-size: 24px;
      line-height: 32px;
    }
    p {
      font-size: 18px;
      line-height: 24px;
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

class Bm extends Component {
  render() {
    return (
      <WeedStyle>
        <Container className="weed-top">
          <div className="weed-image">
            <Img fixed={this.props.data.coffee.childImageSharp.fixed} />
          </div>
          <div className="weed-title">
            Blue Mountain coffee is rare and sought after. Modern cultivation is
            renewing the industry.
          </div>
          <div className="weed-2021">
            <p>
              Jamaican Blue Mountain coffee is among the world’s oldest and most
              expensive luxury coffees. Commercial production and farm
              syndication is introducing investors to the historic profits of
              this luxury product, championing worldwide retail growth and
              direct trade.
            </p>
          </div>
          <div className="weed-gram-container">
            <div className="weed-lb">
              <h3>$120/lb</h3>
              <p>
                Valued over $120/lb at market, Jamaican Blue Mountain coffee is
                one of the rarest and most sought after luxury coffees.
              </p>
            </div>
            <div className="weed-gram">
              <h3>2.5x</h3>
              <p>
                Commercial cultivation, farm syndication, and equitable
                partnerships with local farms is more than doubling historic
                Blue Mountain coffee yields.
              </p>
            </div>
          </div>
          <div className="weed-million">
            <h3>$70 million</h3>
            <p>
              Drawing on 1,500+ acres of corporate cultivation and partnered
              local farms, a modern Blue Mountain coffee producer can process a
              retail value of $70 million of luxury coffee each year.
            </p>
          </div>
          <div className="mt-mobile-logos">
            <div>
              <Img fixed={this.props.data.yahoo.childImageSharp.fixed} />
              <Img fixed={this.props.data.benz.childImageSharp.fixed} />
            </div>
          </div>
          <div className="mt-mobile-jamaican">
            <Img fixed={this.props.data.benzlarge.childImageSharp.fixed} />
            <div className="mt-mobile-jamailcan-copy">
              <p>
                “Decades ago, Blue Mountain coffee’s exclusivity would have been
                disqualifying for worldwide retail growth and direct trade with
                luxury coffee companies.
              </p>
              <p>
                But if new market trends suggest anything, those days are over.
                In Jamaica, responsible commercial producers are opening the
                industry to the profits of international specialty coffee
                consumption.”
              </p>
            </div>
          </div>
        </Container>
      </WeedStyle>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query BmQuery {
        coffee: file(relativePath: { eq: "coffeebranch.png" }) {
          childImageSharp {
            fixed(width: 220, height: 120) {
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
        benzlarge: file(relativePath: { eq: "BenzingaMid.png" }) {
          childImageSharp {
            fixed(width: 234, height: 32) {
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
    render={data => <Bm data={data} {...props} />}
  />
)
