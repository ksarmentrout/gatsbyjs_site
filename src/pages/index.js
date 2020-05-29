import React from "react"

import ErrorBoundary from "../components/ErrorBoundary"
import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <ErrorBoundary>
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <LandingBio />
    </Layout>
  </ErrorBoundary>
);

export default IndexPage
