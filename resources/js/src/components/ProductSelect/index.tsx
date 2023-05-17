import React from 'react'
import ReactDOM from 'react-dom/client'
import Select from 'react-select'

interface ProductType {
  id: number
  name: string
}
interface PropsType {
  data: Array<Object>
  createdProducts?: Array<Object> | null
}

const ProductSelect = (props: PropsType) => {
  const options = props.data.map((product: ProductType) => {
    return { value: product.id, label: product.name }
  })

  let createdOptions = props.createdProducts?.map((product: ProductType) => {
    return { value: product.id, label: product.name }
  })

  return (
    <div className="field">
      <label htmlFor="productIds">Produtos do kit</label>
      <Select
        options={options}
        name="productIds[]"
        id="productIds"
        isMulti
        isSearchable
        defaultValue={createdOptions ?? null}
      />
    </div>
  )
}

const container = document.getElementById('product-select-input')
if (container) {
  const allProducts = container.getAttribute('data-products')
  const createdProducts = container.getAttribute('created-products')
  const root = ReactDOM.createRoot(container)
  if (allProducts) {
    root.render(
      <ProductSelect
        data={JSON.parse(decodeURI(allProducts))}
        createdProducts={createdProducts ? JSON.parse(decodeURI(createdProducts)) : null}
      />
    )
  }
}
