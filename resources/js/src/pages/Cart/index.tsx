import React from 'react'
import { FiMail, FiUser } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import Product from '../../components/Product'
import { useCartContext } from '../../contexts/CartContext'
import { formatPrice } from '../../utils/formatPrice'

import { CartContent, InfoContainer, Summary, TotalContainer } from './styles'

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

  // const handleSubmit = async () => {
  //   try {
  //     const productsIds = cartProducts.map((item) => ({
  //       id: item.id,
  //       quantity: item.quantity,
  //     }))
  //     const data = { total, productsIds }
  //     const response = await api.post('/order', { data })
  //     navigate({
  //       pathname: '/payment',
  //       search: createSearchParams({ orderId: response.data.orderId }).toString(),
  //     })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <>
      <h1>Carrinho</h1>
      <CartContent>
        <Summary>
          <h3>Informações do usuário</h3>
          <InfoContainer>
            <FiUser />
            {user.name}
          </InfoContainer>
          <InfoContainer>
            <FiMail />
            {user.email}
          </InfoContainer>
        </Summary>
        <Summary>
          <h3>Resumo do pedido</h3>
          {cartProducts.map((product: ProductType) => (
            <Product {...product} key={product.id} />
          ))}

          <TotalContainer>
            <h5>Subtotal</h5>
            <h5>{formatPrice(total)}</h5>
          </TotalContainer>
          <TotalContainer>
            <h5>Total</h5>
            <h5>{formatPrice(total)}</h5>
          </TotalContainer>
          {/* <PrimaryButton type="button" onClick={handleSubmit}>
            Ir para pagamento
          </PrimaryButton> */}
          <Link to={'/payment'}>Pagar</Link>
        </Summary>
      </CartContent>
    </>
  )
}
export default Cart
