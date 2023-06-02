import React, { ChangeEvent, useState } from 'react'

import { FiCopy } from 'react-icons/fi'
import { useNavigate, useSearchParams } from 'react-router-dom'
import QrCode from '../../assets/qrCode.png'
import { useCartContext } from '../../contexts/CartContext'
import api from '../../services/api'
import { formatPrice } from '../../utils/formatPrice'
import { PrimaryButton } from '../Cart/styles'
import { Container, CopyBtn, FormContainer, KeyContainer, QRCodeImage } from './styles'

const Payment: React.FC = () => {
  const navigate = useNavigate()
  const { total } = useCartContext()
  const [searchParams] = useSearchParams()
  const [file, setFile] = useState<File>()
  const orderId = searchParams.get('orderId')

  const handleSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = async () => {
    const formData = new FormData()

    try {
      if (file && orderId) {
        formData.append('file', file)
        formData.append('orderId', orderId)
        await api.post('/payment', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        navigate({
          pathname: '/order-result',
        })
      }
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

      <FormContainer onSubmit={handleSubmit}>
        <p>Por favor, Envie seu comprovante para confirmarmos seu pagamento</p>
        <input type="file" name="file" onChange={handleSelectFile} />
        <PrimaryButton>Finalizar</PrimaryButton>
      </FormContainer>
    </Container>
  )
}

export default Payment
