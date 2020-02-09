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

const Link = styled.a`
  color: #963d5a;
  text-decoration: none;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <OuterContainer>
        <Container>
          <Description>
            <p>
              Sometimes I write code, other times I write music.<br></br>
              I'm working towards writing words one of these days.
            </p>
            <p>
              Currently Boston-based working in software engineering and genomics. <br></br> 
              Helping to organize local events with <Link href='https://neurotechx.com/'>NeuroTechX</Link>.<br></br>
            </p>
            <p>
              Please reach out at <Link href='mailto:keaton@ksarmentrout.com'>keaton@ksarmentrout.com</Link>!
            </p>
          </Description>
        </Container>
      </OuterContainer>
  </Layout>
)

export default IndexPage
