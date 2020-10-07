import React from "react"
import styled from "styled-components"
import HamburgerIcon from "./Icons/Hamburger"
import CloseLogo from "./Icons/Close"

const LogoWrapper = styled.div`
  width: 100%;
  position: relative;
  z-index: 100;
  display: flex;
  padding: 0 1.5rem;
  justify-content: space-between;
  @media (min-width: 786px) {
    height: auto;
    width: auto;
    z-index: 0;
    padding-left: 0;
    padding-right: 2rem;
  }
`

const NavButton = styled.button`
  padding: 0;
  cursor: pointer;
  border: none;
  background: none;
  appearance: none;
  justify-self: end;
  &:focus {
    outline: transparent;
  }
  @media (min-width: 786px) {
    display: none;
  }
`

const Logo = styled.h1`
  color: white;
`
//INTERFACES
interface ILogoContainer {
  activateNav: React.Dispatch<React.SetStateAction<boolean>>
  toggle: boolean
}

//React Component
const LogoContainer: React.FC<ILogoContainer> = ({ activateNav, toggle }) => {
  return (
    <LogoWrapper>
      <Logo>HomeBase</Logo>
      <NavButton
        aria-label="Navigation Toggle Dropdown"
        onClick={() => activateNav(!toggle)}
      >
        {!toggle ? <HamburgerIcon /> : <CloseLogo />}
      </NavButton>
    </LogoWrapper>
  )
}
export default LogoContainer
