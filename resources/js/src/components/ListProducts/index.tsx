import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import { ProductContext, ProductProvider } from '../../contexts/ProductContext'
import { Container, ProductImage } from './styles'

interface ProductType {
  id: string
  name: string
  description: string
  formatedPrice: string
  file: { url: string }
}
interface PropsType {
  data: Array<ProductType>
}

const ListProducts = (props: PropsType) => {
  const { setProducts, products } = useContext(ProductContext)
  console.log(products)

  const handleAddToCart = (product: ProductType) => {
    setProducts((currentList) => [...currentList, product])
  }

  return (
    <Container>
      {props.data.map((product) => (
        <div key={product.id}>
          <ProductImage src={product.file.url} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <h3>{product.formatedPrice}</h3>
          <button type="button" onClick={() => handleAddToCart(product)}>
            Adicionar no carrinho
          </button>
        </div>
      ))}
    </Container>
  )
}

const container = document.getElementById('list-products')
if (container) {
  const allProducts = container.getAttribute('data-products')
  const root = ReactDOM.createRoot(container)
  if (allProducts) {
    root.render(
      <ProductProvider>
        <ListProducts data={JSON.parse(decodeURI(allProducts))} />
      </ProductProvider>
    )
  }
}
