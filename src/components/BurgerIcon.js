import React from "react";
import styled from "@emotion/styled"
import "./BurgerIcon.css"

const SiteHeader = styled.header`
  background: transparent;
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 1rem 1.0875rem;
`

const Content = styled.div`
  font-size: 1.2rem;
`

export default ({ open, ...props }) => (
  <SiteHeader>
    <Content>
      <div className={open ? "burger-icon open" : "burger-icon"} {...props}>
        <div className="bar1" key="b1" />
        <div className="bar2" key="b2" />
        <div className="bar3" key="b3" />
      </div>
    </Content>
  </SiteHeader>
);
