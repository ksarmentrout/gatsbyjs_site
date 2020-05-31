import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"
import { Container, OuterContainer } from "../components/style-blocks"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./about.css"

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  max-width: 70vw;
  max-width: 650px;
`

const ExLink = styled.a`
  color: #d1567f;
  text-decoration: none;
`

const NavLink = styled(Link)`
  color: #d1567f;
  text-decoration: none;
`

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
      <OuterContainer>
        <Container>
          <h1>About</h1>
          <Description className='about_content'>
            <p>
              Sometimes I write code, other times I write music.
              I'm working towards writing words one of these days.
            </p>
            <p>
              Originally pursuing neural engineering, I've transitioned into working as a backend Python developer for
              Boston area biotech startups over the past few years. Currently working on bioinformatics at <ExLink href='https://readcoor.com/'>ReadCoor</ExLink>.
            </p>
            <p>
              Also interested in how people interact in online spaces. New projects in that domain 
              will show up on the <NavLink to="/works">works page</NavLink>.
            </p>
            <p>
              Always open for collaboration, 
              please reach out at <ExLink href='mailto:keaton@ksarmentrout.com'>keaton@ksarmentrout.com</ExLink>!
            </p>
          </Description>
        </Container>
      </OuterContainer>
  </Layout>
)

export default AboutPage
