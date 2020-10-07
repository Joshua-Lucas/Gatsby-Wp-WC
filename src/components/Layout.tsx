import React from "react"
import Helment from "react-helmet"
import styled, { ThemeProvider } from "styled-components"
import { rem } from "polished"
import GlobalStyle from "../utils/styles/GlobalStyles"
import Theme from "../utils/styles/Theme"

import Header from "../components/Header/Header"

import useSiteMetadata from "../utils/hooks/use-sitemetadata"

// Style Components
const MainContent = styled.main`
  margin-top: 0;
`

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <>
      <GlobalStyle />
      <Helment>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helment>
      <ThemeProvider theme={Theme}>
        <Header />
        <MainContent>{children}</MainContent>
      </ThemeProvider>
    </>
  )
}

export default Layout
