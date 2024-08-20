import React, { useState } from 'react'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../api/api'
import { closeCart, showDeliveryForm } from '../../reducers/carrinhoFlowSlice'
import { useNavigate } from 'react-router-dom'
import { resetCart } from '../../reducers/carrinhoSlice'

import {
  FormContainer,
  LabelForm,
  InputForm,
  InputGroup,
  InputSmall,
  ButtonGroup,
} from './styles'

const EntregaForm = () => {
  const navigate = useNavigate()
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const dispatch = useDispatch()

  const handleCloseDeliveryForm = () => {
    dispatch(showDeliveryForm(false))
  }

  const carrinho = useSelector((state) => state.carrinho)

  const valorTotal = carrinho.reduce((accumulator, item) => {
    return accumulator + item.preco
  }, 0)

  const formik = useFormik({
    initialValues: {
      receiverName: '',
      descriptionAddress: '',
      cityAddress: '',
      zipCodeAddress: '',
      numberAddress: '',
      complementAddress: '',
      nameCard: '',
      numberCard: '',
      codeCard: '',
      monthCard: '',
      yearCard: '',
    },
    validationSchema: Yup.object({
      receiverName: Yup.string()
        .min(3, 'O nome precisa ter pelo menos 3 caracteres.')
        .required('O campo é obrigatório.'),

      descriptionAddress: Yup.string().required('O campo é obrigatório.'),
      cityAddress: Yup.string().required('O campo é obrigatório.'),
      zipCodeAddress: Yup.string()
        .required('O campo é obrigatório.')
        .typeError('Esse campo precisa ser um número.'),
      numberAddress: Yup.number()
        .required('O campo é obrigatório.')
        .typeError('Esse campo precisa ser um número.'),
      complementAddress: Yup.string(),
      nameCard: Yup.string().required('O campo é obrigatório.'),
      numberCard: Yup.number()
        .required('O campo é obrigatório.')
        .typeError('Esse campo precisa ser um número.'),
      codeCard: Yup.number()
        .required('O campo é obrigatório.')
        .typeError('Esse campo precisa ser um número.'),
      monthCard: Yup.number()
        .required('O campo é obrigatório.')
        .typeError('Esse campo precisa ser um número.'),
      yearCard: Yup.number()
        .required('O campo é obrigatório.')
        .typeError('Esse campo precisa ser um número.'),
    }),
    onSubmit: (values) => {
      purchase({
        products: carrinho.map((item) => ({
          id: item.id,
          price: item.preco,
        })),

        delivery: {
          receiver: values.receiverName,
          address: {
            description: values.descriptionAddress,
            city: values.cityAddress,
            zipCode: values.zipCodeAddress,
            number: values.numberAddress,
            complement: values.complementAddress,
          },
        },

        payment: {
          card: {
            name: values.nameCard,
            number: values.numberCard,
            code: values.codeCard,
            expires: {
              month: values.expires,
              year: values.yearCard,
            },
          },
        },
      }) //purchase
    },
  })

  const handlePaymentFlow = () => {
    if (
      formik.values.receiverName &&
      formik.values.descriptionAddress &&
      formik.values.cityAddress &&
      formik.values.zipCodeAddress &&
      formik.values.numberAddress
    ) {
      setShowAddressForm(false)
    } else {
      alert('Preencha os campos obrigatórios para prosseguir.')
    }
  }

  const handlePayment = () => {
    // setPaymentFinished(false)
  }

  // const showAddressForm = useSelector(
  //   (state) => state.carrinhoFlow.showAddressForm
  // )

  // const showPaymentForm = useSelector(
  //   (state) => state.carrinhoFlow.showAddressForm
  //)
  //console.log('aa' + showAddressForm)
  const [showAddressForm, setShowAddressForm] = useState(true)
  const [showPaymentForm, setShowPaymentForm] = useState(true)

  const addressForm = () => {
    setShowAddressForm(true)
    //setShowPaymentForm(true)
  }

  const concludeCheckout = () => {
    dispatch(resetCart())
    dispatch(showDeliveryForm(false))
    dispatch(closeCart())
    navigate('/')
  }
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <FormContainer className={showAddressForm ? '' : 'hideForm'}>
          <h4>Entrega</h4>

          <InputGroup>
            <LabelForm htmlFor='receiverName'>Quem irá receber</LabelForm>
            <InputForm
              id='receiverName'
              name='receiverName'
              type='receiverName'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.receiverName}
            />
            {formik.errors.receiverName ? (
              <small>{formik.errors.receiverName}</small>
            ) : null}
          </InputGroup>

          <InputGroup>
            <LabelForm htmlFor='descriptionAddress'>Endereço</LabelForm>
            <InputForm
              id='descriptionAddress'
              name='descriptionAddress'
              type='descriptionAddress'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.descriptionAddress}
            />
            {formik.errors.descriptionAddress ? (
              <small>{formik.errors.descriptionAddress}</small>
            ) : null}
          </InputGroup>

          <InputGroup>
            <LabelForm htmlFor='cityAddress'>Cidade</LabelForm>
            <InputForm
              id='cityAddress'
              name='cityAddress'
              type='cityAddress'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.cityAddress}
            />
            {formik.errors.cityAddress ? (
              <small>{formik.errors.cityAddress}</small>
            ) : null}
          </InputGroup>
          <div>
            <InputSmall className='marginRight'>
              <LabelForm htmlFor='zipCodeAddress'>CEP</LabelForm>
              <InputForm
                id='zipCodeAddress'
                name='zipCodeAddress'
                type='zipCodeAddress'
                inputwidth='155px'
                mask='99999-999'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.zipCodeAddress}
              />
              {formik.errors.zipCodeAddress ? (
                <small>{formik.errors.zipCodeAddress}</small>
              ) : null}
            </InputSmall>
            <InputSmall>
              <LabelForm htmlFor='numberAddress'>Número</LabelForm>
              <InputForm
                id='numberAddress'
                name='numberAddress'
                type='numberAddress'
                inputWidth='155px'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.numberAddress}
              />
              {formik.errors.numberAddress ? (
                <small>{formik.errors.numberAddress}</small>
              ) : null}
            </InputSmall>
          </div>
          <InputGroup>
            <LabelForm htmlFor='complementAddress'>
              Complemento (opcional)
            </LabelForm>
            <InputForm
              id='complementAddress'
              name='complementAddress'
              type='complementAddress'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.complementAddress}
            />
            {formik.errors.complementAddress ? (
              <small>{formik.errors.complementAddress}</small>
            ) : null}
          </InputGroup>

          <ButtonGroup>
            <button type='button' onClick={handlePaymentFlow}>
              Continuar com o pagamento
            </button>
            <button type='button' onClick={handleCloseDeliveryForm}>
              Voltar para o carrinho
            </button>
          </ButtonGroup>
        </FormContainer>

        <FormContainer
          className={
            showPaymentForm && !showAddressForm && !isSuccess ? '' : 'hideForm'
          }
        >
          <h4>
            Pagamento - Valor a pagar R${' '}
            {parseFloat(valorTotal).toFixed(2).replace('.', ',')}{' '}
          </h4>

          <InputGroup>
            <LabelForm htmlFor='nameCard'>Nome no cartão</LabelForm>
            <InputForm
              id='nameCard'
              name='nameCard'
              type='nameCard'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.nameCard}
            />
            {formik.errors.nameCard ? (
              <small>{formik.errors.nameCard}</small>
            ) : null}
          </InputGroup>

          <div>
            <InputSmall className='marginRight'>
              <InputGroup>
                <LabelForm htmlFor='numberCard'>Número do cartão</LabelForm>
                <InputForm
                  id='numberCard'
                  name='numberCard'
                  type='numberCard'
                  inputwidth='228px;'
                  mask='9999 9999 9999 9999'
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.numberCard}
                />{' '}
                {formik.errors.numberCard ? (
                  <small>{formik.errors.numberCard}</small>
                ) : null}
              </InputGroup>
            </InputSmall>

            <InputSmall>
              <InputGroup>
                <LabelForm htmlFor='codeCard'>CVV</LabelForm>
                <InputForm
                  id='codeCard'
                  name='codeCard'
                  type='codeCard'
                  inputwidth='87px;'
                  mask='999'
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.codeCard}
                />{' '}
                {formik.errors.codeCard ? (
                  <small>{formik.errors.codeCard}</small>
                ) : null}
              </InputGroup>
            </InputSmall>
          </div>

          <div>
            <InputSmall className='marginRight'>
              <InputGroup>
                <LabelForm htmlFor='monthCard'>Mês de vencimento</LabelForm>
                <InputForm
                  id='monthCard'
                  name='monthCard'
                  type='monthCard'
                  mask='99'
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.monthCard}
                />{' '}
                {formik.errors.monthCard ? (
                  <small>{formik.errors.monthCard}</small>
                ) : null}
              </InputGroup>
            </InputSmall>

            <InputGroup>
              <LabelForm htmlFor='yearCard'>Ano de vencimento</LabelForm>
              <InputForm
                id='yearCard'
                name='yearCard'
                type='yearCard'
                mask='9999'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.yearCard}
              />{' '}
              {formik.errors.yearCard ? (
                <small>{formik.errors.yearCard}</small>
              ) : null}
            </InputGroup>
          </div>

          <ButtonGroup>
            <button type='submit' onClick={handlePayment}>
              Finalizar pagamento
            </button>
            <button type='button' onClick={addressForm}>
              Voltar para a edição de endereço
            </button>
          </ButtonGroup>
        </FormContainer>
      </form>

      <FormContainer className={!isSuccess ? 'hideForm' : ''}>
        {isLoading ? 'Processando o pagamento...' : ''}
        <h4>Pedido realizado - {isSuccess && data.orderId}</h4>
        <p className='concludeText'>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </p>

        <p className='concludeText'>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.{' '}
        </p>
        <p className='concludeText'>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </p>
        <p className='concludeText'>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>
        <ButtonGroup>
          <button type='submit' onClick={concludeCheckout}>
            Concluir
          </button>
        </ButtonGroup>
      </FormContainer>
    </>
  )
}

export default EntregaForm
