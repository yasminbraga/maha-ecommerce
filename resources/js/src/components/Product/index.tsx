import React, { PropsWithChildren } from 'react'
import { useCartContext } from '../../contexts/CartContext'

export type ProductType = {
  id: number
  name: string
  description: string
  price: number
  file: { url: string }
}

const Product: React.FC<PropsWithChildren<ProductType>> = ({
  id,
  name,
  description,
  price,
  file,
}) => {
  const { getQuantity, increaseQuantity, decreaseQuantity, removeFromCart } = useCartContext()
  const quantity = getQuantity(id)
  return (
    <>
      <h3>{name}</h3>
      <p>{description}</p>
      <span>{price}</span>
      <div>
        {quantity === 0 ? (
          <button type="button" onClick={() => increaseQuantity(id)}>
            Adicionar ao carrinho
          </button>
        ) : (
          <div>
            <div>
              <button type="button" onClick={() => decreaseQuantity(id)}>
                -
              </button>
              <p>{quantity}</p>
              <button type="button" onClick={() => increaseQuantity(id)}>
                +
              </button>
            </div>
            <button type="button" onClick={() => removeFromCart(id)}>
              Remover
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default Product
