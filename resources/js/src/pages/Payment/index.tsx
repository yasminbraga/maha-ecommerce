import React, { ChangeEvent, useState } from 'react'

import { useNavigate, useSearchParams } from 'react-router-dom'
import QrCode from '../../assets/qrCode.png'
import { useCartContext } from '../../contexts/CartContext'
import api from '../../services/api'
import { QRCodeImage } from './styles'

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
    <div>
      <h1>Realize seu pagamento</h1>
      <p>Seu pedido saiu no valor total de {total}</p>
      <QRCodeImage src={QrCode} alt="" />
      <p>Aponte sua câmera para o QR code ou copie nossa chave</p>
      <div>
        <p>Chave CNPJ: 0559030939</p>
        <button type="button" onClick={() => navigator.clipboard.writeText('0559030939')}>
          copiar
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <h5>Por favor, Envie seu comprovante para confirmarmos seu pagamento</h5>
        <input type="file" name="file" onChange={handleSelectFile} />
        <button>Finalizar</button>
      </form>
    </div>
  )
}

export default Payment
