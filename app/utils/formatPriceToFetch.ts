export const formatPriceToFetch = (price: number) => {
  const priceToString = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price)
  return priceToString
}
