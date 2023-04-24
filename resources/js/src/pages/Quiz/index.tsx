import React, { FormEvent, useContext } from 'react'
import { QuizContext } from '../../contexts/QuizContext'
import api from '../../services/api'
import { Button, ButtonContainer, FormContainer, Header } from './styles'

export const Quiz: React.FC = () => {
  const { data, step, setStep, pages, totalPages } = useContext(QuizContext)

  const handleSubmit = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault()
    try {
      return api.post('/quiz', { data })
    } catch (error) {
      return console.log(error)
    }
  }
  return (
    <FormContainer onSubmit={handleSubmit}>
      <Header>
        <h2>
          {step}/{totalPages}
        </h2>
      </Header>

      {pages[step]}
      <ButtonContainer>
        <Button type="button" onClick={() => setStep(step - 1)}>
          Voltar
        </Button>
        <Button type="button" onClick={() => setStep(step + 1)}>
          Avançar
        </Button>
        <button type="submit">Submeter</button>
      </ButtonContainer>
    </FormContainer>
  )
}
