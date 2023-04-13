import React, { useContext } from 'react'
import { QuizContext } from '../../contexts/QuizContext'
import { Container, Header } from './styles'

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
      <div>
        <button onClick={() => setStep(step - 1)}>Voltar</button>
        <button onClick={() => setStep(step + 1)}>Avançar</button>
        {/* <button className=''>Submeter</button> */}
      </div>
    </Container>
  )
}
