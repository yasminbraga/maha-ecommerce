export const formatPriceToCreate = (price: string) => {
  price = price.replace(/\D/g, '')
  const priceToNumber = Number(price) / 100
  return priceToNumber
}
