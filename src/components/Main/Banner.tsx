import React from "react"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"
import useImageHook from "../../utils/hooks/use-imagehook"

//Styled Components
const ImageBackground = styled(BackgroundImage)`
  background-size: cover;
  height: 50vh;
`

const TextBox = styled.div`
  margin-top: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.primary};
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
`

const Banner = () => {
  const data = useImageHook()

  return (
    <>
      <ImageBackground Tag="section" fluid={data[0].fluid}>
        {console.log(data)}
        <TextBox>
          <Title>Organic Fair Trade Coffee</Title>
        </TextBox>
      </ImageBackground>
    </>
  )
}

export default Banner
