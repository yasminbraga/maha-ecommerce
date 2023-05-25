import React from 'react'

// import { Container } from './styles';

const CartProduct: React.FC = () => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <span>{price}</span>
      <div>
        {/* {quantity === 0 ? (
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
        )} */}
      </div>
    </div>
  )
}

export default CartProduct
