import React from "react"

import ErrorBoundary from "../components/ErrorBoundary"
// import LandingBio from "../components/landing-bio"
import {AboutContent} from "../pages/about"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <ErrorBoundary>
    <Layout>
      <SEO title="Home"/>
      {/* <LandingBio /> */}
      <AboutContent />
    </Layout>
  </ErrorBoundary>
);

export default IndexPage
