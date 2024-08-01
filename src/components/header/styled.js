import styled from "styled-components";
import fundo from "../../assets/fundo.png"
import {cores} from '../../globalCss'

export const HeaderDiv = styled.div`
  background-image: url(${fundo});
//   height: 384px;
  height: 326px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Texto = styled.h2`
color: ${cores.vermelho};
margin-top: 120px;
text-align: center;
`

export const Logo = styled.img`
  margin-top: 6px;
`;

// export const Background = 
