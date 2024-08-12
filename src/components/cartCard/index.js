import React from 'react'
import { Card,Preco,Titulo,ImagemComida, Lixeira } from './styles'
import lixeira from '../../assets/lixeira.svg'
import { useDispatch } from 'react-redux'
import { removeItem } from '../../reducers/carrinhoSlice'




const CartCard = ({foto, nome, preco, id})  => {
  const dispatch = useDispatch()

  function handleDeletar(id) {
    console.log(`deletando ${id}`)
    dispatch(removeItem(id))
  }

  return (
  <Card>
    <ImagemComida src={foto}></ImagemComida>
    <div>
    <Titulo>{nome}</Titulo>
    <Preco>
     R$ {parseFloat(preco).toFixed(2).replace('.',',')}
    </Preco>
    </div>
    <Lixeira onClick={() => handleDeletar(id)} src={lixeira} />
  </Card>
  )
}

export default CartCard