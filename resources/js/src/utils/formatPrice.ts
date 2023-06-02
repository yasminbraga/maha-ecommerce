const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: 'BRL',
  style: 'currency',
})

export const formatPrice = (price: number) => {
  return CURRENCY_FORMATTER.format(price)
}
