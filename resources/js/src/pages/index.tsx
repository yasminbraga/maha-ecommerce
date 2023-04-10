import React from 'react'
import ReactDOM from 'react-dom/client'
import { Form } from './Form'

const pages = [
  {
    Component: Form,
    id: 'form',
  },
]

pages.forEach(({ id, Component }) => {
  const container = document.getElementById(id)

  if (container) {
    ReactDOM.createRoot(container).render(
      <React.StrictMode>
        <Component />
      </React.StrictMode>
    )
  }
})
