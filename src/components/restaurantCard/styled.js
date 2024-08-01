import styled from 'styled-components';
import { Link } from "react-router-dom";
import { cores } from '../../globalCss';



export const Card = styled.div`
  background-color: ${cores.branco};
  height: 398px;
  width: 472px;
  border: 1px solid ${cores.vermelho};
  color: ${cores.vermelho};
  position: relative;
  
`;

export const Imagem = styled.img`
width: 470px;
height: 217px;
`

export const Titulo = styled.h3`
  margin-top: 8px;
  margin-right: 7px;
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`;

export const Texto = styled.p`
  font-size: 14px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 16px;
`;

export const Botao = styled(Link)`
color: ${cores.vermelhoClaro};
background-color: ${cores.vermelho};
border: none;
padding: 4px 6px;
font-size: 14px;
font-weight: bold;

margin-left: 8px;
cursor: pointer;
text-decoration: none;
`
export const TextoSuperior = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

export const Avaliacao = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 8px;
  font-weight: bold;
  font-size: 18px;
  img {
    margin-left: 8px;
  }
`;

export const Tag = styled.div`
  color: ${cores.vermelhoClaro};

  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 12px;
  padding: 6px 4px;

  div {
    display: inline;
    margin-left: 8px;
    background-color: ${cores.vermelho};
    padding: 6px 4px;
  }
`;



