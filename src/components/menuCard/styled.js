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
  object-fit: cover;
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

export const Fade = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0,0,0,0.8);
z-index: 5;

`
export const Modal = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  background-color: ${cores.vermelho};
  height: 344px;
  width: 1024px;
  
    #fechar {
    position: fixed;
    top: 0;
    right: 0;
    margin: 8px;
    height: 16px;
    width: 16px;
    cursor: pointer;

    }
  
    div {
    margin-top: 32px;
    margin-bottom: 32px;

    background-color: ${cores.vermelho};
    display: flex;
    color: ${cores.vermelhoClaro};

    img {
      margin-left: 32px;
      width: 280px;
      height: 280px;
      object-fit: cover;
    }

    div {
      width: 100%;
      height: auto;
      display: block;
      margin-left: 24px;

      p {
        margin-top: 16px;
        margin-right: 32px;
      }

      button {
        border: none;
        background-color: ${cores.vermelhoClaro};
        color: ${cores.vermelho};
        font-size: 14px;
        font-weight: bold;
        padding: 4px 7px;
        margin-top: 16px;
        cursor: pointer;
       
      }
    }
  }
`;


;





