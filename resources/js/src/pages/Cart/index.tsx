import React from 'react'
import { FiMail, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Product from '../../components/Product'
import { useCartContext } from '../../contexts/CartContext'
import { formatPrice } from '../../utils/formatPrice'

import AddToCart from '../../components/AddToCart'
import { CartContent, InfoContainer, ListProducts, Summary, TotalContainer } from './styles'

export type ProductType = {
  id: number
  name: string
  description: string
  price: number
  file: { url: string }
  quantity: number
}

const Cart = () => {
  const { user, allProducts, cartProducts, total, increaseQuantity } = useCartContext()

  const listProducts = allProducts.filter((product) => {
    return !cartProducts.some((item) => item.id === product.id)
  })

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
          <Link to={'/payment'}>Pagar</Link>
        </Summary>
      </CartContent>
      {listProducts.length > 0 ? (
        <div>
          <h2>Adicione mais produtos</h2>
          <ListProducts>
            {listProducts.map((item) => (
              <AddToCart
                id={item.id}
                key={item.id}
                file={item.file}
                name={item.name}
                description={item.description}
                increaseQuantity={increaseQuantity}
                price={item.price}
              />
            ))}
          </ListProducts>
        </div>
      ) : null}
    </>
  )
}
export default Cart
