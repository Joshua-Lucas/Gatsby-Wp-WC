import React from "react"
import styled from "styled-components"
import Navigation from "./navigation/navigation"

const HeaderContiner = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.accent};
`

const Header: React.FC = () => {
  return (
    <>
      <HeaderContiner>
        <Navigation />
      </HeaderContiner>
    </>
  )
}

export default Header
