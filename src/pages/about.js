import React from "react"
import styled from "@emotion/styled"
import { Content, PageHeader, StyledExLink, StyledInLink } from "../components/style-blocks"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./about.css"

const Description = styled.p`
  padding: 0;
  margin-bottom: 2rem;
  max-width: 70vw;
  max-width: 650px;
  text-align: justify;
  margin-left: auto;
  margin-right: auto;
`

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
      <Content>
        <PageHeader>About</PageHeader>
          <Description className='about_content'>
            <p>
              Hey there! Thanks for visiting my site, I'm glad you're here.
            </p>
            <p>
              I'm a software engineer, musician, and artist based in Seattle, Washington. 
              I make music as <StyledExLink href='https://mossives.com'>Moss Ives</StyledExLink> and released my 
              debut EP, "Forms" in April 2021. Check it out on <StyledExLink href='https://mossives.bandcamp.com/album/forms'>
                Bandcamp
              </StyledExLink>, <StyledExLink href='https://open.spotify.com/album/1wzzFNyJEoxZLnwLDAArPV?si=Lr6rb6yxSpShkfYDpAkg4Q'>
                Spotify
              </StyledExLink>, or <StyledExLink href='https://audius.co/mossives/album/forms-43564'>
                Audius
              </StyledExLink>.
            </p>
            <p>
              I started out studying neural engineering, researching brain-computer interfaces in 
              the <StyledExLink href='https://www.nicolelislab.net/'>Nicolelis Lab</StyledExLink>, then
              kept up with neurotech as an organizer of the <StyledExLink href='https://neurotechx.com'>NeuroTechX</StyledExLink> Boston 
              chapter. Over the past few years I've been working as a developer at
              biotech startups, now focused on genomics.
            </p>
            <p>
              I'm also interested in digital art and online spaces. My recent work "Place Memory" was featured in 
              the <StyledExLink href='https://www.sciartmagazine.com/movement-mapped.html'>
                2021 Spring issue of SciArt Magazine
              </StyledExLink>. The full list of my projects is on 
              the <StyledInLink to="/works">works page</StyledInLink>, and I've been doing some writing
              over at the <StyledInLink to="/blog">blog</StyledInLink>.
            </p>
            <p>
              Always open to collaboration, say hi 
              at <StyledExLink href='mailto:keaton@ksarmentrout.com'>keaton@ksarmentrout.com</StyledExLink> or 
              DM me on <StyledExLink href='https://twitter.com/keaton_sa'>Twitter</StyledExLink>.
            </p>
          </Description>
      </Content>
  </Layout>
)

export default AboutPage
