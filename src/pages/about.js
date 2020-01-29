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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <OuterContainer>
        <Container>
          <Description>
            <p>Sometimes I write code, other times I write music.</p>
            <p>I'm working towards writing words one of these days.</p>
          </Description>
        </Container>
      </OuterContainer>
  </Layout>
)

export default IndexPage
