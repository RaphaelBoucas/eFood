import React from 'react'
import { useSelector } from 'react-redux';

import logo from "../../assets/logo.png";

import {
  HeaderDiv,
  Logo,
  ParagrafoHeader,
  ImgHeader,
  StyledLink,
  TextContainer,
  HeaderText,
  HeaderTitle,
} from "./styled";
import { GlobalCSS } from '../../globalCss';


const HeaderProfile = ({img, tag, nome}) => {
  const produtos = useSelector(state => state.carrinho)
  console.log("Produtos: " + {produtos})

    
    return (
      <>
        <GlobalCSS />

        <HeaderDiv>
          <div className='container'>
            <ParagrafoHeader>
              <StyledLink to="/">Restaurantes</StyledLink>
              <Logo src={logo} alt="" />
              {produtos.length} produto(s) no carrinho
            </ParagrafoHeader>
          </div>
        </HeaderDiv>

        <ImgHeader>
          <img src={img} alt={nome} />
          <TextContainer>
            <HeaderText>{tag.length > 0 ? tag[1] : tag}</HeaderText>
            <HeaderTitle>{nome}</HeaderTitle>
          </TextContainer>
        </ImgHeader>
      </>
    );
}

export default HeaderProfile