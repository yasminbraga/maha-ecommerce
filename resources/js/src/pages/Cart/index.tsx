import React from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import Product from '../../components/Product'
import { useCartContext } from '../../contexts/CartContext'
import api from '../../services/api'
import { CartContent, PrimaryButton, Summary, TotalContainer } from './styles'

export type ProductType = {
  id: number
  name: string
  description: string
  price: number
  file: { url: string }
  quantity: number
}

const Cart = () => {
  const { user, cartProducts, total } = useCartContext()
  const navigate = useNavigate()

  const handleSubmit = async () => {
    try {
      const productsIds = cartProducts.map((item) => ({
        id: item.id,
        quantity: item.quantity,
      }))
      const data = { total, productsIds }
      const response = await api.post('/order', { data })
      navigate({
        pathname: '/payment',
        search: createSearchParams({ orderId: response.data.orderId }).toString(),
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h1>Carrinho</h1>
      <CartContent>
        <div>
          <h2>Informações do usuário</h2>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
        <Summary>
          <h3>Resumo do pedido</h3>
          {cartProducts.map((product: ProductType) => (
            <div key={product.id}>
              <Product {...product} />
            </div>
          ))}

          <TotalContainer>
            <h5>Subtotal</h5>
            <h5>{total}</h5>
          </TotalContainer>
          <TotalContainer>
            <h5>Total</h5>
            <h5>{total}</h5>
          </TotalContainer>
          <PrimaryButton type="button" onClick={handleSubmit}>
            Confirmar pedido
          </PrimaryButton>
        </Summary>
      </CartContent>
    </>
  )
}
export default Cart
