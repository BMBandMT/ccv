import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Container from "./container"
import * as variable from "../components/variables"
import handleViewport from "react-in-viewport"
import down from "../images/downcaret.png"

const LpfooterStyle = styled.div`
  #lpfooter {
    padding: 100px 0px 60px 0px;
    @media (max-width: ${variable.mobileWidth}) {
      padding: 45px 0px 45px 0px;
    }
    h2 {
      color: #000000;
      text-align: center;
      font-size: 24px;
      line-height: 32px;
      font-weight: 700;
      max-width: 500px;
      margin: 0 auto;
      padding-bottom: 3px;
      @media (max-width: ${variable.mobileWidth}) {
        font-size: 23px;
        line-height: 23px;
        // font-weight: 400;
      }
    }
    .centergrow-initial {
      margin: 0 auto;
      max-width: 500px;
      display: block;
      &:after {
        border-bottom: solid 2px #000000;
      }
    }
    p {
      text-align: center;
      font-size: 17px;
      line-height: 23px;
      font-weight: 400;
      max-width: 815px;
      margin: 20px auto 0px auto;
      @media (max-width: ${variable.mobileWidth}) {
        font-size: 15px;
        line-height: 20px;
      }
      span.footer-mt {
        color: #23a455;
      }
      span.footer-bmb {
        color: #164871;
      }
    }
    form.mobile-form-footer {
      display: none;
    }
    form.desktop-form-footer {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      flex-direction: column;
      max-width: 730px;
      margin: 40px auto;
      position: relative;
      left: -80px;
      @media (max-width: ${variable.tabletWidth}) {
        left: auto;
      }
      .form-row {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        margin-bottom: 24px;
        @media (max-width: ${variable.mobileWidth}) {
          flex-direction: column;
        }
        label {
          width: 160px;
          font-size: 17px;
          line-height: 23px;
          font-weight: bold;
          @media (max-width: ${variable.mobileWidth}) {
            width: 100%;
            text-align: center;
          }
        }
        .form-row-inputs {
          width: calc(100% - 160px);
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          align-items: center;
          @media (max-width: ${variable.mobileWidth}) {
            flex-direction: column;
            width: 100%;
          }
          &.form-row-inputs-certify {
            @media (max-width: ${variable.mobileWidth}) {
              flex-direction: row;
            }
          }
          &.form-row-inputs-name {
            input {
              width: calc(100% / 2 - 10px);
              @media (max-width: ${variable.mobileWidth}) {
                width: 100%;
                margin: 10px 0px;
              }
            }
          }
          &.form-row-inputs-city {
            input {
              width: calc(100% / 3 - 10px);
              @media (max-width: ${variable.mobileWidth}) {
                width: 100%;
                margin: 10px 0px;
              }
            }
          }
          &.form-row-inputs-email {
            justify-content: flex-start;
            input {
              width: calc(100% / 2 - 10px);
              @media (max-width: ${variable.mobileWidth}) {
                width: 100%;
                margin: 10px 0px;
              }
            }
          }
          &.form-row-inputs-phone {
            justify-content: flex-start;
            input {
              width: calc(100% / 2 - 10px);
              @media (max-width: ${variable.mobileWidth}) {
                width: 100%;
                margin: 10px 0px;
              }
            }
          }
          &.form-row-inputs-hear {
            justify-content: flex-start;
            select {
              width: calc(100% / 2 - 10px);
              position: relative;
              &:before {
                content: "\u2193";
                font-size: 20px;
                position: absolute;
                top: 20px;
                right: 20px;
                color: black;
              }
              @media (max-width: ${variable.mobileWidth}) {
                width: 100%;
                margin: 10px 0px;
              }
            }
          }
          &.form-row-inputs-submit {
            justify-content: center;
          }
          &.form-row-inputs-certify {
            justify-content: center;
          }
          &.form-row-inputs-time {
            .radio-container {
              width: calc(100% / 4 - 10px);
              display: flex;
              align-items: center;
              position: relative;
              @media (max-width: ${variable.mobileWidth}) {
                width: 100%;
                margin: 10px 0px;
              }
              input {
                height: 41px;
                margin: 0px;
                cursor: pointer;
                &:checked {
                  border: #23a455 2px solid;
                }
                &:focus {
                  outline: none;
                }
              }
              div {
                position: absolute;
                left: 50%;
                margin-left: -40px;
                width: 80px;
                text-align: center;
                z-index: -10;
              }
            }
          }
        }
        input[type="text"] {
          background: transparent;
          width: 100%;
          -webkit-appearance: none;
          border: 2px solid #000000;
          border-radius: 5px;
          padding: 9px 20px;
          font-size: 17px;
          font-weight: 400;
          &:focus {
            outline: none;
          }
          &::placeholder {
            color: #000000;
            font-size: 17px;
            font-weight: 400;
          }
        }
        input[type="email"] {
          background: transparent;
          width: 100%;
          -webkit-appearance: none;
          border: 2px solid #000000;
          border-radius: 5px;
          padding: 9px 20px;
          font-size: 17px;
          font-weight: 400;
          &:focus {
            outline: none;
          }
          &::placeholder {
            color: #000000;
            font-size: 17px;
            font-weight: 400;
          }
        }
        input[type="phone"] {
          background: transparent;
          width: 100%;
          -webkit-appearance: none;
          border: 2px solid #000000;
          border-radius: 5px;
          padding: 9px 20px;
          font-size: 17px;
          font-weight: 400;
          &:focus {
            outline: none;
          }
          &::placeholder {
            color: #000000;
            font-size: 17px;
            font-weight: 400;
          }
        }
        input[type="radio"] {
          background: transparent;
          width: 100%;
          -webkit-appearance: none;
          border: 2px solid #000000;
          border-radius: 5px;
          padding: 9px 20px;
          font-size: 17px;
          font-weight: 400;
          &:focus {
            outline: none;
          }
          &::placeholder {
            color: #000000;
            font-size: 17px;
            font-weight: 400;
          }
        }
        input[type="checkbox"] {
          background: transparent;
          -webkit-appearance: none;
          border: 2px solid #000000;
          margin-right: 5px;
          padding: 5px;
          position: relative;
          margin-right: 15px;
          &:checked {
            &:before {
              content: "x";
              position: absolute;
              top: -3px;
              left: 2px;
            }
          }
          &:focus {
            outline: none;
          }
        }
        input.contact-submit {
          background: transparent;
          color: #000000;
          -webkit-appearance: none;
          border: 2px solid #000000;
          border-radius: 5px;
          padding: 9px 30px;
          font-size: 17px;
          font-weight: 400;
          display: inline-block;
          cursor: pointer;
          &:focus {
            outline: none;
          }
          &::placeholder {
            color: #000000;
            font-size: 17px;
            font-weight: 400;
          }
          &:hover {
            color: white;
            background-color: #000000;
          }
        }
        select {
          background: transparent;
          width: 100%;
          -webkit-appearance: none;
          border: 2px solid #000000;
          border-radius: 5px;
          padding: 9px 20px;
          font-size: 17px;
          font-weight: 400;
          background-image: url(${down});
          background-size: 20px;
          background-position: right 20px center;
          background-repeat: no-repeat;
          &:focus {
            outline: none;
          }
          &::placeholder {
            color: #000000;
            font-size: 17px;
            font-weight: 400;
          }
        }
        .hidden {
          display: none;
          -webkit-appearance: none;
        }
        .contact-submit {
          color: white;
          background-color: #1e5b8d;
          padding: 12px 70px;
          font-size: 21px;
          font-weight: bold;
          &:focus {
            outline: none;
          }
        }
      }
    }
  }
  @media (max-width: ${variable.mobileWidth}) {
    .desktop-form-footer {
      display: none !important;
    }
    .mobile-form-footer {
      display: block !important;
      box-shadow: #00000046 0px 3px 6px;
      padding: 20px 10px 30px 10px;
      display: flex;
      flex-direction: column;
      margin-top: 40px;
      background-color: white;
      h4 {
        width: 100%;
        text-align: center;
        margin: 0px 0px 20px 0px;
      }

      .form-row {
        margin-bottom: 5px;
        input {
          width: 100%;
          box-shadow: #00000029 0px 3px 6px;
          border: 1px solid #919191;
          border-radius: 5px;
          padding: 10px 10px;
        }
        .form-row-inputs-city {
          display: flex;
          justify-content: space-between;
          margin-bottom: 30px;
          input {
            width: calc(100% / 3 - 5px);
          }
        }
        select {
          width: 100%;
          box-shadow: #00000029 0px 3px 6px;
          border: 1px solid #919191;
          border-radius: 5px;
          padding: 10px 10px;
          color: #919191;
        }
        &.form-row-hear {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 30px;
          label {
            width: 175px;
            max-width: 50%;
          }
          .form-row-inputs {
            width: calc(100% - 200px);
            min-width: 48%;
          }
        }
        &.form-row-time {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
          label {
            width: 175px;
            max-width: 50%;
          }
          .form-row-inputs {
            width: calc(100% - 200px);
            min-width: 48%;
          }
        }
        &.form-row-certify {
          margin-top: 30px;
          .form-row-inputs-certify {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            input {
              width: 10px;
              height: 10px;
              margin-right: 10px;
            }
          }
        }
        .form-row-inputs-submit {
          display: flex;
          justify-content: center;
          margin-top: 30px;
          input {
            border: 2px solid black;
            width: auto;
            background-color: white;
            padding: 10px 20px;
          }
        }
      }
    }
  }
  .mobile-form-copy {
    display: none;
  }
  @media (max-width: ${variable.mobileWidthSmall}) {
    .mobile-form-copy {
      display: block;
    }
    .desktop-form-copy {
      display: none;
    }
  }
`

const LpFooter = () => {
  const data = useStaticQuery(graphql`
    query LpQuery {
      footerBg: file(relativePath: { eq: "footerbg.png" }) {
        childImageSharp {
          fluid(maxWidth: 3840) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <LpfooterStyle>
      <BackgroundImage
        id="lpfooter"
        fluid={data.footerBg.childImageSharp.fluid}
      >
        <Container>
          <div className="form-copy">
            <h2>A unique opportunity for accredited investors.</h2>
            <div className="desktop-form-copy">
              <p>
                Secure a stake in cannabis production just as the global market
                turns to Jamaica for supply solutions. Invest in the island’s
                historic luxury product.
              </p>
              <p>
                If you’re an accredited investor and interested in learning more
                about investing in our companies, fill out the form below and
                our team will reach out to you shortly.
              </p>
            </div>
            <div className="mobile-form-copy">
              <p>
                Secure a stake in global cannabis growth. Invest in a historic
                luxury product.
              </p>
              <p>
                If you’re an accredited investor, fill out the form below and
                our team will reach out to you shortly.
              </p>
            </div>
          </div>
          <form
            name="contact"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
            action="/thanks"
            className="desktop-form-footer"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>
            <div className="form-row">
              <label>Your Name*</label>
              <div className="form-row-inputs form-row-inputs-name">
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="First"
                  required
                />
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Last"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <label>Your City</label>
              <div className="form-row-inputs form-row-inputs-city">
                <input type="text" id="city" name="city" placeholder="City" />
                <input
                  type="text"
                  id="state"
                  name="state"
                  placeholder="State"
                />
                <input
                  type="text"
                  id="country"
                  name="country"
                  placeholder="Country"
                />
              </div>
            </div>
            <div className="form-row">
              <label>Your Email*</label>
              <div className="form-row-inputs form-row-inputs-email">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="e.g. hello@email.com"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <label>Your Phone*</label>
              <div className="form-row-inputs form-row-inputs-phone">
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  placeholder="####"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <label>Best Time to Call</label>
              <div className="form-row-inputs form-row-inputs-time">
                <div className="radio-container">
                  <input type="radio" value="morning" name="times" />
                  <div>Morning</div>
                </div>
                <div className="radio-container">
                  <input type="radio" value="noon" name="times" />
                  <div>Noon</div>
                </div>
                <div className="radio-container">
                  <input type="radio" value="afternoon" name="times" />
                  <div>Afternoon</div>
                </div>
                <div className="radio-container">
                  <input type="radio" value="evening" name="times" />
                  <div>Evening</div>
                </div>
              </div>
            </div>
            <div className="form-row form-row-certify">
              <label></label>
              <div className="form-row-inputs form-row-inputs-certify">
                <input type="checkbox" id="certify" name="certify" required />{" "}
                *I certify that I am an accredited investor.
              </div>
            </div>
            <div className="form-row">
              <label></label>
              <div className="form-row-inputs form-row-inputs-submit">
                <input
                  type="submit"
                  className="contact-submit"
                  value="Submit"
                />
              </div>
            </div>
          </form>
          <form
            name="contact"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
            action="/thanks"
            className="mobile-form-footer"
          >
            <h4>*are required fields</h4>
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>
            <div className="form-row">
              <div className="form-row-inputs form-row-inputs-name">
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="First Name*"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-row-inputs form-row-inputs-lname">
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Last Name*"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-row-inputs form-row-inputs-city">
                <input type="text" id="city" name="city" placeholder="City" />
                <input
                  type="text"
                  id="state"
                  name="state"
                  placeholder="State"
                />
                <input
                  type="text"
                  id="country"
                  name="country"
                  placeholder="Country"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-row-inputs form-row-inputs-phone">
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  placeholder="Phone*"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-row-inputs form-row-inputs-email">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email*"
                  required
                />
              </div>
            </div>
            <div className="form-row form-row-hear">
              <label>How did you hear about us?*</label>
              <div className="form-row-inputs form-row-inputs-hear">
                <select name="hear" id="hear" required>
                  <option value="">Select...</option>
                  <option value="Forbes">Forbes</option>
                  <option value="Reuters">Reuters</option>
                  <option value="Entrepreneur">Entrepreneur</option>
                  <option value="Investing">Investing.com</option>
                  <option value="Benzinga">Benzinga</option>
                  <option value="CEO Magazine">CEO Magazine</option>
                  <option value="Equities">Equities.com</option>
                  <option value="Google">Google</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Facebook">Facebook</option>
                  <option value="YouTube">YouTube</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Email">Email</option>
                  <option value="Referral">Referral</option>
                </select>
              </div>
            </div>
            <div className="form-row form-row-time">
              <label>Best Time to Call?</label>
              <div className="form-row-inputs form-row-inputs-time">
                <select name="time" id="time">
                  <option value="">Select...</option>
                  <option value="Morning">Morning</option>
                  <option value="Noon">Noon</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                </select>
              </div>
            </div>
            <div className="form-row form-row-certify">
              <label></label>
              <div className="form-row-inputs form-row-inputs-certify">
                <input type="checkbox" id="certify" name="certify" required />{" "}
                *I certify that I am an accredited investor.
              </div>
            </div>
            <div className="form-row">
              <label></label>
              <div className="form-row-inputs form-row-inputs-submit">
                <input
                  type="submit"
                  className="contact-submit"
                  value="Submit"
                />
              </div>
            </div>
          </form>
        </Container>
      </BackgroundImage>
    </LpfooterStyle>
  )
}

export default LpFooter
