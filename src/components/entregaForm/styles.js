import styled from 'styled-components'
import { cores } from '../../globalCss'
import InputMask from 'react-input-mask'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  &.hideForm {
    display: none;
  }

  h4 {
    font-size: 16px;
    color: ${cores.vermelhoClaro};
    margin-bottom: 16px;
    display: flex;
  }
  small {
    color: ${cores.vermelhoClaro};
    font-weight: bold;
    font-size: 12px;
  }

  .concludeText {
    color: ${cores.vermelhoClaro};
    line-height: 22px;
    margin-bottom: 16px;
  }
`
export const InputForm = styled(InputMask)`
  margin: 8px 0;

  &#numberCard {
    margin-right: 13px;
  }

  width: ${(props) => props.inputwidth || '100%'};
  height: 32px;
  border: none;
  background-color: ${cores.vermelhoClaro};

  font-size: 14px;
  font-weight: bold;
  padding: 16px;
`
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const LabelForm = styled.label`
  color: ${cores.vermelhoClaro};
  font-size: 14px;
  font-weight: bold;
`

export const InputSmall = styled.div`
  display: flex;
  flex-direction: column;

  &.marginRight {
    margin-right: 34px;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;

  button {
    background-color: ${cores.vermelhoClaro};
    border: none;
    cursor: pointer;
    height: 24px;
    margin-bottom: 8px;
    color: ${cores.vermelho};
    font-size: 14px;
    font-weight: bold;
  }
`
