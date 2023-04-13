import React, { useContext } from 'react'
import { QuizContext } from '../../contexts/QuizContext'
import { Button, ButtonContainer, Container, Header } from './styles'

export const Quiz: React.FC = () => {
  const { step, setStep, pages, totalPages } = useContext(QuizContext)
  return (
    <Container>
      <Header>
        <h2>
          {step}/{totalPages}
        </h2>
      </Header>

      {pages[step]}
      <ButtonContainer>
        <Button onClick={() => setStep(step - 1)}>Voltar</Button>
        <Button onClick={() => setStep(step + 1)}>Avançar</Button>
        {/* <button className=''>Submeter</button> */}
      </ButtonContainer>
    </Container>
  )
}
