import styled from 'styled-components';
import { cores } from '../../globalCss';

export const Lista = styled.div`
  background-color: ${cores.bege};
  height: 100%;

  overflow: auto;
  padding-top: 80px;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px 80px;
    margin-bottom: 120px;
  }
`;