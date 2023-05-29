import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { CartProvider } from '../../contexts/CartContext'
import Cart from '../Cart'
import Payment from '../Payment'
import Result from '../Result'

const router = createBrowserRouter(
  [
    { path: '/cart', element: <Cart /> },
    { path: '/payment', element: <Payment /> },
    { path: '/order-result', element: <Result /> },
  ],
  {
    basename: '/app',
  }
)

const container = document.getElementById('app')
if (container) {
  const root = ReactDOM.createRoot(container)
  const authData = container.getAttribute('auth-data')
  if (authData) {
    root.render(
      <CartProvider auth={JSON.parse(decodeURI(authData))}>
        <RouterProvider router={router}></RouterProvider>
      </CartProvider>
    )
  }
}
