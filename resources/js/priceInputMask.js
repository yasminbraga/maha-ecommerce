const priceInput = document.querySelector('#price')

priceInput.addEventListener('keyup', () => {
  let price = priceInput.value

  price = price.replace(/\D/g, '')
  price = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price / 100)
  priceInput.value = price
})
