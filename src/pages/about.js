import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"
import { Content, Container, OuterContainer, PageHeader } from "../components/style-blocks"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./about.css"

const Description = styled.p`
  padding: 0;
  margin-bottom: 2rem;
  max-width: 70vw;
  max-width: 650px;
  font-size: larger;
  text-align: justify;
  margin-left: auto;
  margin-right: auto;
`

const ExLink = styled.a`
  // color: #9B6A6C;
  color: #875A5B;
  text-decoration: none;
`

const NavLink = styled(Link)`
  // color: #9B6A6C;
  color: #875A5B;
  text-decoration: none;
`

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
      <Content>
        <PageHeader>About</PageHeader>
          <Description className='about_content'>
            <p>
              Hey there! Thanks for visiting this corner of the internet, I'm glad you're here. 
            </p>
            <p>
              I'm a software engineer and musician based in Seattle, Washington. 
              I make music as <ExLink href='https://mossives.com'>Moss Ives</ExLink> and I'm currently recording my 
              first EP, called "Forms".
            </p>
            <p>
              I started out studying neural engineering, researching brain-computer interfaces in 
              the <ExLink href='https://www.nicolelislab.net/'>Nicolelis Lab</ExLink>. 
              If you're interested in that field, I highly recommend checking out 
              the <ExLink href='https://neurotechx.com'>NeuroTechX</ExLink> community.
              Over the past few years though I've been in Boston working as a developer at
              biotech startups, now focused on genomics.
            </p>
            <p>
              Also interested in digital art and online spaces. New projects in that domain 
              will show up on the <NavLink to="/works">works page</NavLink>.
            </p>
            <p>
              Always open to collaboration, say hi 
              at <ExLink href='mailto:keaton@ksarmentrout.com'>keaton@ksarmentrout.com</ExLink> or 
              DM me on <ExLink href='https://twitter.com/keaton_sa'>Twitter</ExLink>.
            </p>
          </Description>
      </Content>
  </Layout>
)

export default AboutPage
