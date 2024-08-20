import { useDispatch } from 'react-redux'
import { addItem } from '../../reducers/carrinhoSlice'
import { showCart, fecha } from '../../reducers/carrinhoFlowSlice'
import { Card, Titulo, Texto, Botao, Imagem, Fade, Modal } from './styled'
import { useState } from 'react'
import fechar from '../../assets/close.svg'

const MenuCard = ({ foto, preco, id, nome, descricao, porcao }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)

  const dispatch = useDispatch()

  function handleAdicionar() {
    dispatch(
      addItem({
        foto,
        preco,
        id,
        nome,
        descricao,
        porcao,
      })
    )
    dispatch(showCart())
    fechaModal()
  }

  function abreModal(card) {
    setSelectedCard(card)
    setModalOpen(true)
  }

  function fechaModal() {
    setModalOpen(false)
    setSelectedCard(null)
  }

  return (
    <>
      <Card>
        <Imagem src={foto} alt='Restaurante' />

        <Titulo>{nome}</Titulo>

        <Texto>{`${descricao.substring(0, 200)}(...)`}</Texto>
        <Botao
          onClick={() =>
            abreModal({ foto, preco, id, nome, descricao, porcao })
          }
        >
          Mais detalhes
        </Botao>
      </Card>
      {modalOpen && (
        <>
          <Fade onClick={fechaModal} />

          <Modal>
            <img onClick={fechaModal} id='fechar' src={fechar} alt='' />
            <div>
              <img src={selectedCard.foto} alt='' />
              <div>
                <h3>{selectedCard.nome}</h3>
                <p>{selectedCard.descricao}</p>
                <p>{selectedCard.porcao}</p>
                <button onClick={handleAdicionar}>
                  Adicionar ao carrinho - R${' '}
                  {parseFloat(selectedCard.preco).toFixed(2).replace('.', ',')}
                </button>
              </div>
            </div>
          </Modal>
        </>
      )}
    </>
  )
}

export default MenuCard
