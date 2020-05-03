import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import { Content } from "../components/style-blocks"
import Layout from "../components/layout"
import SEO from "../components/seo"


const ProjectHeader = styled.h1`
  text-align: center;
`

const ProjectPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Projects" />
      <Content>
        <ProjectHeader>Projects</ProjectHeader>
      </Content>
    </Layout>
  )
}

export default ProjectPage
