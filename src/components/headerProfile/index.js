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
import { useDispatch } from 'react-redux';
import { abre } from '../../reducers/abreCarrinhoSlice'


const HeaderProfile = ({img, tag, nome}) => {
  const produtos = useSelector(state => state.carrinho)
  const dispatch = useDispatch()
  const handleOpen = () => {
    dispatch(abre())
  }

    
    return (
      <>
        <GlobalCSS />

        <HeaderDiv>
          <div className='container'>
            <ParagrafoHeader>
              <StyledLink to="/">Restaurantes</StyledLink>
              <Logo src={logo} alt="" />
              <span onClick={handleOpen}>{produtos.length} produto(s) no carrinho</span>
            </ParagrafoHeader>
          </div>
        </HeaderDiv>

        <ImgHeader>
          <img src={img} alt={nome} />
          <TextContainer>
            <HeaderText>{tag}</HeaderText>
            <HeaderTitle>{nome}</HeaderTitle>
          </TextContainer>
        </ImgHeader>
      </>
    );
}

export default HeaderProfile