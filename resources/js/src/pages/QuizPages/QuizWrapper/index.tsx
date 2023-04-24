import React, { ReactNode } from 'react'
import { Container, Title } from './styles'
interface QuizWrapperType {
  title: string
  subtitle: string
  children: ReactNode
}

const QuizWrapper: React.FC<QuizWrapperType> = ({ title, subtitle, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <p>{subtitle}</p>
      {children}
    </Container>
  )
}

export default QuizWrapper
