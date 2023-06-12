import React, { PropsWithChildren } from 'react'

import { formatPrice } from '../../utils/formatPrice'
import { Container, Image } from './styles'
interface PropsType {
  key: number
  id: number
  file: { url: string }
  name: string
  description: string
  increaseQuantity: (id: number) => void
  price: number
}

const AddToCart: React.FC<PropsWithChildren<PropsType>> = ({
  id,
  file,
  name,
  description,
  increaseQuantity,
  price,
}) => {
  return (
    <Container>
      <Image src={file.url} alt={name} />
      <h5>{name}</h5>
      <p>{description}</p>
      <h4>{formatPrice(price)}</h4>
      <button type="button" onClick={() => increaseQuantity(id)}>
        Adicionar ao carrinho
      </button>
    </Container>
  )
}

export default AddToCart
