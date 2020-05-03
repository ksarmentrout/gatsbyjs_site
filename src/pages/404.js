import React from "react"
import { Link } from "gatsby"

import { Container, Content } from "../components/style-blocks"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
      <Content>
          <Container>
              <h1>NOT FOUND</h1>
              <p>
                  Sorry, this page doesn't exist.<br/>
                  But if you want there to be one here, let me know?
              </p>
              <p>Home is <Link to='/'>this way</Link>.</p>
          </Container>
      </Content>
  </Layout>
)

export default NotFoundPage
