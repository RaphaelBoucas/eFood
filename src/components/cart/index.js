import { CartList, Overlay, BotaoCart, ValorTotal } from './styles'
import CartCard from '../cartCard'
import { useSelector, useDispatch } from 'react-redux'
import { closeCart, showDeliveryForm } from '../../reducers/carrinhoFlowSlice'

import { useState } from 'react'
import EntregaForm from '../entregaForm'

const Cart = () => {
  const delivery = useSelector((state) => state.carrinhoFlow.fillDeliveryForm)

  //const [entrega, setEntrega] = useState(false)

  const dispatch = useDispatch()
  const handleClose = () => {
    dispatch(closeCart())
  }

  const carrinho = useSelector((state) => state.carrinho)

  const valorTotal = carrinho.reduce((accumulator, item) => {
    return accumulator + item.preco
  }, 0)

  const handleEntrega = () => {
    dispatch(showDeliveryForm(true))
  }

  const carrinhoCheio = (
    <>
      {carrinho.map((item) => (
        <CartCard
          key={item.id}
          nome={item.nome}
          foto={item.foto}
          preco={item.preco}
          id={item.id}
        />
      ))}

      <div>
        <ValorTotal>Valor total</ValorTotal>
        <ValorTotal>
          R$ {parseFloat(valorTotal).toFixed(2).replace('.', ',')}
        </ValorTotal>
      </div>
      <BotaoCart onClick={handleEntrega}>Continuar com a entrega</BotaoCart>
    </>
  )

  const carrinhoVazio = (
    <p className='totalValue'>
      O carrinho está vazio... :( <br />
      Por favor adicione algum item para continuar.
    </p>
  )

  return (
    <>
      <Overlay onClick={handleClose} />
      <CartList>
        {!delivery && (carrinho.length === 0 ? carrinhoVazio : carrinhoCheio)}
        {delivery && <EntregaForm />}
      </CartList>
    </>
  )
}

export default Cart
