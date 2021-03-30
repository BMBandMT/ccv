import React, { Component } from "react"
import BackgroundImage from "gatsby-background-image"
import styled, { keyframes } from "styled-components"
import Img from "gatsby-image"
import { Link, StaticQuery, graphql } from "gatsby"
import Container from "../components/container"
import * as variable from "../components/variables"
import AnchorLink from "react-anchor-link-smooth-scroll"
import "react-html5video/dist/styles.css"

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
    display:flex;
    align-items:flex-end;
    justify-content:center;
    .hero-content{
      width:100%;
      max-width:850px;
      padding:0px 20px;
      .hero-weed-coffee{
        display:flex;
        justify-content:space-between;
        align-items:flex-end;
        h3{
          font-size:35px;
          line-height:45px;
          font-weight:500;
          margin-bottom:13px;
        }
        .hero-weed{
          width:50%;
          max-width:345px;
          display:flex;
          flex-direction:column;
         .gatsby-image-wrapper{
            align-self:center;
          }
        }
        .hero-coffee{
          width:50%;
          max-width:345px;
          text-align:right;
          display:flex;
          flex-direction:column;
         .gatsby-image-wrapper{
            align-self:center;
          }
        }

      }
    }
    .hero-copy{
      font-size:18px;
      line-height:24px;
      text-align:center;
    }
  }
  .hero-link{
    display:flex;
    justify-content:center;
    margin-top:40px;
    a{
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
      &:hover{
        color: black;
      background-color: white;
      }
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
        >              <FadeIn delay={2000}>
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
              <div className="hero-copy">
                Cannabis cultivation in Jamaica solves high supply chain costs for the global cannabis market. In the Blue Mountains, sustainable, commercial coffee production modernizes cultivation of the world’s most sought after luxury coffee.
              </div>
              <div className="hero-link">
                <AnchorLink href="#lpfooter">Get Started to Invest</AnchorLink>
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
            fixed(width: 199, height:204) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        bean: file(relativePath: { eq: "Bean.png" }) {
          childImageSharp {
            fixed(width: 146, height:145) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Hero data={data} {...props} />}
  />
)
