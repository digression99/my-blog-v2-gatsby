import React from "react"
import styled from 'styled-components';
import "normalize.css"
import { GlobalStyle } from "../styles/global"
import { Footer } from "./Footer"

const Wrapper = styled.div`
  width : 100%;
  height : 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`

const Container = styled.main`
  width : 600px;
`

export const PageLayout = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Container>
          {children}
        </Container>
      </Wrapper>
      <Footer />
      <GlobalStyle />
    </>
  )
}
