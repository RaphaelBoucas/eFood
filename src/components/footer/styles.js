import styled from'styled-components'
import { cores } from '../../globalCss'

export const Rodape = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: ${cores.vermelhoClaro};


p {

}
`;

export const Logo = styled.img`
  width: 125px;
  height: 57.6px;
  margin-top: 40px;
  margin-bottom: 32.5px;
`;

export const SocialMedia = styled.div`
margin-bottom: 80px;  
img {
    margin-left: 8px;
  }
`;

export const TextoRodape = styled.p`
  color: ${cores.vermelho};
  font-size: 10px;
  width: 480px;
  text-align: center;
  margin-bottom: 40px;
`;