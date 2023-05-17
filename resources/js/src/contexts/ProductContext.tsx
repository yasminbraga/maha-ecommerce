import React, { createContext, useState } from 'react'

interface ProductContextType {
  products: Array<ProductType>
  setProducts: React.Dispatch<React.SetStateAction<{}>>
}
export interface ProductType {
  id: string
  name: string
  description: string
  formatedPrice: string
  file: { url: string }
}
export const ProductContext = createContext({} as ProductContextType)

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState<Array<ProductType>>([])
  return (
    <ProductContext.Provider value={{ products, setProducts }}>{children}</ProductContext.Provider>
  )
}
