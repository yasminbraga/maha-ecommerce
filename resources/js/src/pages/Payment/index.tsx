import React from 'react'

import QrCode from '../../assets/qrCode.png'
import { useCartContext } from '../../contexts/CartContext'
import { QRCodeImage } from './styles'

const Payment: React.FC = () => {
  const { total } = useCartContext()

  const handleSubmit = () => {}

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
        <input type="file" name="receipt" id="receipt" />
        <button>Finalizar</button>
      </form>
    </div>
  )
}

export default Payment
