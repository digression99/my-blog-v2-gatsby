import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';

import { GlobalStyle } from "../styles/global"
import "normalize.css"
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

// const Layout = ({ children }) => {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)
//
//   return (
//     <>
//       <Header siteTitle={data.site.siteMetadata.title} />
//       <div
//         style={{
//           margin: `0 auto`,
//           maxWidth: 960,
//           padding: `0 1.0875rem 1.45rem`,
//         }}
//       >
//         <main>{children}</main>
//         <footer>
//           © {new Date().getFullYear()}, Built with
//           {` `}
//           <a href="https://www.gatsbyjs.org">Gatsby</a>
//         </footer>
//       </div>
//     </>
//   )
// }
//

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

