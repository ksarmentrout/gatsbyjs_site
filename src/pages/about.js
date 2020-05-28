import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled.div`
  text-align: center;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
`

const ExLink = styled.a`
  color: #963d5a;
  text-decoration: none;
`

const NavLink = styled(Link)`
  color: #963d5a;
  text-decoration: none;
`

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
      <OuterContainer>
        <Container>
          <h1>About</h1>
          <Description>
            <p>
              Sometimes I write code, other times I write music.<br/>
              I'm working towards writing words one of these days.
            </p>
            <p>
              Originally pursuing neural engineering, I've transitioned into working as a backend Python developer for
              Boston-area startups over the past few years. Currently working on bioinformatics at <ExLink href='https://readcoor.com/'>ReadCoor</ExLink>.
            </p>
            <br/>
              Also interested in how people interact in online spaces. New projects in that domain 
              will show up on the <NavLink to="/works">works page</NavLink>.
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
