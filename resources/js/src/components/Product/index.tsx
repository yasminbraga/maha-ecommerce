import React, { PropsWithChildren } from 'react'
import { FiTrash2 } from 'react-icons/fi'
import { useCartContext } from '../../contexts/CartContext'
import { formatPrice } from '../../utils/formatPrice'
import {
  ButtonsContainer,
  Container,
  DescriptionContainer,
  InfoContainer,
  PriceContainer,
  ProductImage,
  QuantityBtn,
  QuantityContainer,
  RemoveBtn,
} from './styles'
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
    <Container>
      <ProductImage src={file.url} alt={name} />
      <InfoContainer>
        <h5>{name}</h5>
        <DescriptionContainer>{description}</DescriptionContainer>
        <PriceContainer>{formatPrice(price)}</PriceContainer>
      </InfoContainer>
      <div>
        {quantity === 0 ? (
          <button type="button" onClick={() => increaseQuantity(id)}>
            Adicionar ao carrinho
          </button>
        ) : (
          <ButtonsContainer>
            <QuantityContainer>
              <QuantityBtn type="button" onClick={() => decreaseQuantity(id)}>
                -
              </QuantityBtn>
              <p>{quantity}</p>
              <QuantityBtn type="button" onClick={() => increaseQuantity(id)}>
                +
              </QuantityBtn>
            </QuantityContainer>
            <RemoveBtn type="button" onClick={() => removeFromCart(id)}>
              <FiTrash2 />
              Remover
            </RemoveBtn>
          </ButtonsContainer>
        )}
      </div>
    </Container>
  )
}

export default Product
