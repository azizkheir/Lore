import React from "react"
import GlobalFonts from "../../fonts/fonts"
import styled from "styled-components"
import { Link } from "gatsby"

const HeaderMainStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`

const ShopName = styled.h1`
  background: white;
  padding: 10px;
  width: 50%;
  text-align: center;
  font-family: Estilo;
  border: 0px solid ${props => props.theme.colors.secondaryAccent};
  font-size: 3.5em;
  font-weight: 300;
  @media (max-width: 600px) {
    width: 100%;
  }
`

const LinkStyled = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`

const headerMain = props => {
  return (
    <HeaderMainStyled>
      <ShopName>
        <GlobalFonts />
        <LinkStyled to="/">{props.shopName}</LinkStyled>
      </ShopName>
      <soft>preview menu</soft>
    </HeaderMainStyled>
  )
}

export default headerMain
