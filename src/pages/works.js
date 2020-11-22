import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import { Content, PageHeader } from "../components/style-blocks"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./works.css"


const WorkHeader = styled.h3`
  display: inline;
  border-radius: 1em 0 1em 0;
  font-family: Raleway;
`

const WorkDate = styled.h5`
  display: inline;
  color: #606060;
`

const WorksPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Works" />
      <Content>
        <PageHeader>Works</PageHeader>
          <a
            href="https://wisdomoftheflock.com"
            css={css`
              text-decoration: none;
              color: inherit;
            `}
          >
            <WorkHeader>Wisdom of the Flock</WorkHeader>
            <div>
              <WorkDate>2020</WorkDate>
            </div>
            <p>
              A curated collection of tweets that each ask what "should" or "must" be. The collection as a whole investigates how people use their Twitter audience as a collective intelligence to answer primarily moral questions.
            </p>
          </a>
      </Content>
    </Layout>
  )
}

export default WorksPage
