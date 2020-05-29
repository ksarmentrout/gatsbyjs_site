/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import Media from 'react-media';
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import Popup from "reactjs-popup";
import BurgerIcon from "./BurgerIcon";
import BurgerMenu from "./BurgerMenu";

import Header from "./header"
import "./layout.css"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 0 1.0875rem 1rem;
  padding-top: 0;
`
const popUpContentStyle = {
  background: "rgba(255,255,255,0)",
  width: "80%",
  border: "none"
};

const Footer = styled.footer`
  display: flex;
  justify-content: center;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={ () => (
      <>
      <Media queries={{ small: { maxWidth: 800 } }}>
          {matches =>
            matches.small ? (
              <div classname='hamburger_header'>
                <Popup
                modal
                overlayStyle={{ background: "#f9f8f2" }}
                contentStyle={popUpContentStyle}
                closeOnDocumentClick={false}
                trigger={open => <BurgerIcon open={open} />}
                >
                {close => <BurgerMenu close={close} />}
                </Popup>
              </div>
            ) : (
              <Header/>
            )
          }
        </Media>
        <Content>
          <main>{children}</main>
          {/* <Footer>
            © {new Date().getFullYear()}, All Rights Reserved
          </Footer> */}
        </Content>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
