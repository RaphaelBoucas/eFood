import styled from "styled-components";
import { cores } from "../../globalCss";

export const Loader = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 10px solid ${cores.vermelhoClaro};
  border-top-color: ${cores.vermelho};
  animation: loader-circle 0.5s linear infinite;


  @keyframes loader-circle {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh; 
  background-color: ${cores.bege}
`;