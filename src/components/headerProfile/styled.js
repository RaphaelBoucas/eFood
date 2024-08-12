import styled from "styled-components";
import fundo from "../../assets/fundo.png";
import { cores } from "../../globalCss";
import { Link } from "react-router-dom";

export const HeaderDiv = styled.header`
  background-image: url(${fundo});
  //   height: 384px;
  height: 160px;
  display: flex;
  //flex-direction: column;
  align-items: center;
  justify-content: space-between;
  

`;

export const ImgHeader = styled.div`
  height: 280px;
  position: relative;
  img {
    height: 280px;
    width: 100%;
    object-fit: cover;
    position: relative;
    filter: brightness(50%);
  }`


export const TextContainer = styled.div`
  position: absolute;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;
  
  
`;

export const HeaderText = styled.p`
  color: ${cores.branco};
  font-size: 32px;
  font-weight: 100;
`;

export const HeaderTitle = styled.h3`
  color: ${cores.branco};
  font-size: 32px;
  font-weight: 900;
  padding-top: 156.5px;
`;

export const Logo = styled.img`
  margin-top: 0px;
`;

export const ParagrafoHeader = styled.p`
  color: ${cores.vermelho};
  font-size: 18px;
  font-weight: bold;
  a {
    text-decoratiom: none;
  }
  display: flex;
  //flex-direction: column;
  align-items: center;
  justify-content: space-between;
  span {
    cursor: pointer;
  }
`;

export const StyledLink = styled(Link)`
color: ${cores.vermelho}  
text-decoratiom: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: ${cores.vermelho}  
  }
`;