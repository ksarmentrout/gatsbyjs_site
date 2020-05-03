import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

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
  font-size: 1.4rem;
`

const NameHeader = styled.h1`
  font-size: 3.2rem;
  font-weight: normal;
  margin-bottom: 0.5rem;
`

const NameFade1 = styled(NameHeader)`
  opacity: 0.5;
`

const NameFade2 = styled(NameHeader)`
  opacity: 0.2;
`

const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <Container>
          <NameFade2>Keaton Armentrout</NameFade2>
          <NameFade1>Keaton Armentrout</NameFade1>
          <NameHeader>Keaton Armentrout</NameHeader>
          {/*<NameFade1>Keaton Armentrout</NameFade1>*/}
          {/*<NameFade2>Keaton Armentrout</NameFade2>*/}
          <Description>
              {/*hey.*/}
          </Description>
        </Container>
      </OuterContainer>
    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
}

export default LandingBio
