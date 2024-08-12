import styled from 'styled-components'
import { cores } from '../../globalCss'




export const Card = styled.div`
    margin-top: 16px;
    width: 344px;
    height: 100px;
    color: ${cores.vermelho};
    background-color:  ${cores.vermelhoClaro};

    div {
        display: flex;
        flex-direction: column;
    }


`

export const ImagemComida = styled.img`
    height: 80px;
    width: 80px;
    margin: 8px 8px 12px 8px;


`

export const Titulo = styled.h3`
    font-size: 18px;
    margin-top: 8px;
`

export const Preco = styled.p`
  color: ${cores.vermelho};
  font-size: 14px;
  margin-bottom: 33px;
`

export const Lixeira = styled.img`
width: 16px;
height: 16px;
margin-top: 76px;
margin-right: 8px;
cursor: pointer;
`