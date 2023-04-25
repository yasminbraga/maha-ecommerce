import React, { useContext, useState } from 'react'
import { QuizContext } from '../../contexts/QuizContext'
import api from '../../services/api'
import { Button, ButtonContainer, FormContainer, Header } from './styles'

export const Quiz: React.FC = () => {
  const { data, step, setStep, pages, totalPages } = useContext(QuizContext)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      return api.post('/quiz', { data })
    } catch (error) {
      return console.log(error)
    }
  }

  const disabledNext = () => {
    if (
      data[Object.keys(data)[step]] === null ||
      (data[Object.keys(data)[step]].length === 0 && Object.keys(data)[step] !== 'goals')
    ) {
      setError('Campo vazio')
    } else if (Object.keys(data)[step] === 'goals' && data['goals'].length < 5) {
      setError('Selecione 5')
    } else {
      setStep(step + 1)
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <p>{error}</p>
      <Header>
        <h2>
          {step + 1}/{totalPages}
        </h2>
      </Header>

      {pages[step]}
      <ButtonContainer>
        <Button type="button" onClick={() => setStep(step - 1)}>
          Voltar
        </Button>
        <Button type="button" onClick={disabledNext}>
          Avançar
        </Button>
        <button type="submit">Submeter</button>
      </ButtonContainer>
    </FormContainer>
  )
}
