import React from 'react'
import logo from '../../assets/logo.png'
import { HeaderDiv, Logo, Texto } from "./styled";

const Header = () => {
  return (
    <HeaderDiv>
      <Logo src={logo} alt="" />
      <Texto>Viva experiências gastronômicas<br/>no conforto da sua casa</Texto>
    </HeaderDiv>
  );
}

export default Header