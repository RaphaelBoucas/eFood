import styled from 'styled-components'
import { cores } from '../../globalCss'

export const Overlay = styled.div`
  background-color: rgb(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
`

export const CartList = styled.div`
  background-color: ${cores.vermelho};
  width: 380px;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 8px;
  overflow-y: auto;

  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  p.totalValue {
    color: ${cores.vermelhoClaro};
    margin-top: 40px;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    line-height: 24px;
  }
`
export const ValorTotal = styled.p`
  margin-top: 40px;
  font-size: 14px;
  font-weight: 700;
  color: ${cores.vermelhoClaro};
`

export const BotaoCart = styled.button`
  background-color: ${cores.vermelhoClaro};
  color: ${cores.vermelho};
  border: none;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 0;
  width: 100%;
  margin-top: 16px;
  cursor: pointer;
`
