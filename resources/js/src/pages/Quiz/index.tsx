import React, { useContext, useState } from 'react'
import { QuizContext, validations } from '../../contexts/QuizContext'
import api from '../../services/api'
import { Button, ButtonContainer, FormContainer, Header } from './styles'

export const Quiz: React.FC = () => {
  const { data, step, setStep, pages, totalPages } = useContext(QuizContext)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await api.post('/quiz', { data })
      window.location.replace('/result')
    } catch (error) {
      return console.log(error)
    }
  }

  const disabledNext = () => {
    const validation = validations[step]
    if (validation) {
      const validate = validation(data[Object.keys(data)[step]])
      if (validate.error) {
        setError(validate.message)
        return
      }
    }
    setStep(step + 1)
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
        {step > 0 ? (
          <Button disabled={step <= 0} type="button" onClick={() => setStep(step - 1)}>
            Voltar
          </Button>
        ) : null}

        {step < totalPages - 1 ? (
          <Button type="button" onClick={disabledNext}>
            Avançar
          </Button>
        ) : (
          <button type="submit">Enviar</button>
        )}
      </ButtonContainer>
    </FormContainer>
  )
}
