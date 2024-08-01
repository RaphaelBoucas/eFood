import styled from 'styled-components';
import { cores } from '../../globalCss';



export const Card = styled.div`
  background-color: ${cores.vermelho};
  height: 338px;
  width: 320px;
  //border: 1px solid ${cores.vermelho};
  color: ${cores.vermelhoClaro};
  position: relative;
  
`;

export const Imagem = styled.img`
  width: 304px;
  height: 167px;
  margin: 8px;
`;

export const Titulo = styled.h3`

  margin-right: 7px;
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`;

export const Texto = styled.div`
  font-size: 14px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 16px;
  width: 304px;
  height: 74px;
`;

export const Botao = styled.div`
  color: ${cores.vermelho};
  background-color: ${cores.vermelhoClaro};
  
  margin: 8px 8px;
  border: none;
  padding: 4px 0px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
`;






