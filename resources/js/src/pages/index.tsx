import React from 'react'
import ReactDOM from 'react-dom/client'
import { QuizProvider } from '../contexts/QuizContext'
import Ingredients from './Ingredients'
import { Quiz } from './Quiz'

const pages = [
  {
    Component: (
      <QuizProvider>
        <Quiz />
      </QuizProvider>
    ),
    id: 'quiz',
  },
  {
    Component: <Ingredients />,
    id: 'ingredients',
  },
]

pages.forEach(({ id, Component }) => {
  const container = document.getElementById(id)

  if (container) {
    ReactDOM.createRoot(container).render(<React.StrictMode>{Component}</React.StrictMode>)
  }
})
