import React from 'react'
import ReactDOM from 'react-dom/client'
import { ProductProvider } from '../../contexts/ProductContext'
import { CartContent } from './styles'

interface PropsType {
  authData: {
    name: string
    email: string
  }
  products: Array<{
    name: string
    description: string
    price: number
    file: {
      url: string
    }
  }>
}

const Cart = ({ authData, products }: PropsType) => {
  return (
    <>
      <h1>Carrinho</h1>
      <CartContent>
        <div>
          <h2>Informações do usuário</h2>
          <p>{authData.name}</p>
          <p>{authData.email}</p>
        </div>
        <div>
          <h2>Resumo do pedido</h2>
          {products.map((product) => (
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span>{product.price}</span>
              <div>
                <button type="button">+</button>
                <p>1</p>
                <button type="button">-</button>
              </div>
            </div>
          ))}
        </div>
      </CartContent>
    </>
  )
}

const container = document.getElementById('cart')
if (container) {
  const root = ReactDOM.createRoot(container)
  const authData = container.getAttribute('auth-data')
  const products = container.getAttribute('data-products')
  if (authData && products) {
    root.render(
      <ProductProvider>
        <Cart
          authData={JSON.parse(decodeURI(authData))}
          products={JSON.parse(decodeURI(products))}
        />
      </ProductProvider>
    )
  }
}
