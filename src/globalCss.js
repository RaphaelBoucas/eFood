import { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelho: '#E66767',
  vermelhoClaro: ' #FFEBD9',
  bege: ' #F5F5F5',
  branco: '#FFFFFF',
  dourado: '#FFB930',
}

export const GlobalCSS = createGlobalStyle`

* {
padding: 0;
margin: 0;
box-sizing: border-box;
list-style: none;
font-family: Roboto, sans-serif; 

}

.container {
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;

  
  }


`
