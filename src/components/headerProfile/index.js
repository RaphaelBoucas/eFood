import React from 'react'
import { useSelector } from 'react-redux';

import logo from "../../assets/logo.png";

import {
  HeaderDiv,
  Logo,
  ParagrafoHeader,
  ImgHeader,
  StyledLink,
} from "./styled";
import { GlobalCSS } from '../../globalCss';


const HeaderProfile = ({img, tag, nome}) => {
  const produtos = useSelector(state => state.carrinho)
  console.log("Produtos: " + {produtos})

    
    return (
      <>
        <GlobalCSS />
        <HeaderDiv>
          <ParagrafoHeader>
            <StyledLink to="/">Restaurantes</StyledLink>
          </ParagrafoHeader>
          <Logo src={logo} alt="" />
          <ParagrafoHeader>{produtos.length} produto(s) no carrinho</ParagrafoHeader>
        </HeaderDiv>

        <ImgHeader>
          <img src={img} alt={nome} />

          <p>{tag.length > 0 ? tag[1] : tag}</p>
          <h3>{nome}</h3>
        </ImgHeader>
      </>
    );
}

export default HeaderProfile