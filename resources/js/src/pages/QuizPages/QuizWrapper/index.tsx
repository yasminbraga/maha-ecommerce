import React, { ReactNode } from 'react'
import { Container, Subtitle, Title } from './styles'
interface QuizWrapperType {
  title: string
  subtitle: string
  children: ReactNode
}

const QuizWrapper: React.FC<QuizWrapperType> = ({ title, subtitle, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      {children}
    </Container>
  )
}

export default QuizWrapper
