export const translateStatus = (status: string) => {
  const statusTranslation = {
    pending: 'Pendente',
    confirmed: 'Confirmado',
    shipped: 'Enviado',
    cancelled: 'Cancelado',
  }

  return statusTranslation[status]
}
