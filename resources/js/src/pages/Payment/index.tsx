import React, { ChangeEvent, useState } from 'react'

import { FiCopy } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import QrCode from '../../assets/qrCode.png'
import { useCartContext } from '../../contexts/CartContext'
import api from '../../services/api'
import { formatPrice } from '../../utils/formatPrice'
import { Container, CopyBtn, KeyContainer, QRCodeImage } from './styles'

const Payment: React.FC = () => {
  const navigate = useNavigate()
  const { total, cartProducts } = useCartContext()
  // const [searchParams] = useSearchParams()
  const [file, setFile] = useState<File>()
  // const orderId = searchParams.get('orderId')

  const handleSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    const formData = new FormData()
    const productsIds = cartProducts.map((item) => ({
      id: item.id,
      quantity: item.quantity,
    }))

    try {
      if (file) {
        formData.append('file', file)
        formData.append('total', String(total))
        formData.append('productsIds', JSON.stringify(productsIds))
        await api.post('/order', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
      }
      navigate({
        pathname: '/order-result',
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <h1>Realize seu pagamento</h1>
      <p>Seu pedido saiu no valor total de {formatPrice(total)}</p>
      <QRCodeImage src={QrCode} alt="" />
      <h4>Aponte sua câmera para o QR code ou copie nossa chave</h4>
      <KeyContainer>
        <p>Chave CNPJ: 0559030939</p>
        <CopyBtn type="button" onClick={() => navigator.clipboard.writeText('0559030939')}>
          <FiCopy size="1.5em" />
        </CopyBtn>
      </KeyContainer>

      <form onSubmit={(ev) => handleSubmit(ev)}>
        <p>Por favor, Envie seu comprovante para confirmarmos seu pagamento</p>
        <input type="file" name="file" onChange={handleSelectFile} />
        <button type="submit">Finalizar</button>
      </form>
    </Container>
  )
}

export default Payment
