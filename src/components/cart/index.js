import { CartList, Overlay,BotaoCart, ValorTotal } from './styles'
import CartCard from '../cartCard'
import { useSelector, useDispatch } from 'react-redux'
import { fecha } from '../../reducers/abreCarrinhoSlice'


import {  } from 'react-redux'

const Cart = () => {
  
  const dispatch = useDispatch()
  const handleClose = () => {
    dispatch(fecha())
  }

  const carrinho = useSelector(state => state.carrinho)


  const valorTotal = carrinho.reduce((accumulator, item) => {
    return accumulator + item.preco
  }, 0)


  
  return (

      <div>
    <Overlay onClick={handleClose}/>
    <CartList>
        {carrinho.map((item) => 
        <CartCard key={item.id} nome={item.nome} foto={item.foto} preco={item.preco} id={item.id}/>
        )}
    
      <div>
      <ValorTotal>Valor total</ValorTotal>
      <ValorTotal>R$ {parseFloat(valorTotal).toFixed(2).replace('.',',')}</ValorTotal>
      </div>
      <BotaoCart>Continuar com a entrega</BotaoCart>

    </CartList>
    </div>
    
    
  )
}

export default Cart