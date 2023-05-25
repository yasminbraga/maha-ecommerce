import React, { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react'
import api from '../services/api'

interface CartContextType {
  cartProducts: Array<ProductType>
  setCartProducts: React.Dispatch<React.SetStateAction<ProductType[]>>

  total: number
  user: Auth
  getQuantity: (id: number) => number
  increaseQuantity: (id: number) => void
  decreaseQuantity: (id: number) => void
  removeFromCart: (id: number) => void
}
type ProductType = {
  id: number
  name: string
  description: string
  price: number
  file: { url: string }
  quantity: number
}

type Auth = {
  id: number
  name: string
  email: string
}
type CartProviderProps = {
  auth: Auth
}
export const CartContext = createContext({} as CartContextType)

export const CartProvider: React.FC<PropsWithChildren<CartProviderProps>> = ({
  children,
  auth,
}) => {
  const [cartProducts, setCartProducts] = useState<Array<ProductType>>([])
  const [allProducts, setAllProducts] = useState<Array<ProductType>>([])

  const getQuantity = (id: number) => {
    return cartProducts.find((product) => product.id === id)?.quantity || 1
  }

  useEffect(() => {
    api
      .get('/products')
      .then((response) => {
        const products = response.data.map((product: ProductType) => {
          return { ...product, quantity: 1 }
        })
        setCartProducts(products)
        setAllProducts(products)
      })
      .catch((err) => console.log(err))
  }, [])

  const increaseQuantity = (id: number) => {
    setCartProducts((currentProducts) => {
      return currentProducts.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity + 1 }
        } else {
          return product
        }
      })
      // if (!currentProducts.find((product) => product.id === id)) {
      //   const product = allProducts.find((carProduct) => carProduct.id === id)
      //   return [...currentProducts, { ...product, quantity: 1 }]
      // } else {
      //   return currentProducts.map((product) => {
      //     if (product.id === id) {
      //       return { ...product, quantity: product.quantity + 1 }
      //     } else {
      //       return product
      //     }
      //   })
      // }
    })
  }

  const decreaseQuantity = (id: number) => {
    setCartProducts((currentProducts) => {
      if (currentProducts.find((product) => product.id === id)?.quantity === 1) {
        return currentProducts.filter((product) => product.id !== id)
      } else {
        return currentProducts.map((product) => {
          if (product.id === id) {
            return { ...product, quantity: product.quantity - 1 }
          } else {
            return product
          }
        })
      }
    })
  }

  const removeFromCart = (id: number) => {
    setCartProducts((currentProducts) => {
      return currentProducts.filter((product) => product.id !== id)
    })
  }
  const total = cartProducts.reduce((acumulator, product) => {
    return acumulator + product.price * product.quantity
  }, 0)

  return (
    <CartContext.Provider
      value={{
        user: auth,
        cartProducts,
        setCartProducts,
        total,
        getQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  return useContext(CartContext)
}