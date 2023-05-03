import React, { FormEvent, useContext } from 'react'
import { QuizContext } from '../../contexts/QuizContext'
import QuizWrapper from './QuizWrapper'

const Email: React.FC = () => {
  const { data, setData } = useContext(QuizContext)
  const handleSetValue = (e: FormEvent<HTMLDivElement>) => {
    const target = e.target as HTMLInputElement
    setData({ ...data, ['email']: target.value })
  }

  return (
    <QuizWrapper
      title="Descubra seu resultado?"
      subtitle="Digite seu email e enviaremos sua fórmula personalizada."
    >
      <label htmlFor="formula_name">Email</label>
      <input
        type="email"
        name="email"
        id="formula_name"
        onChange={handleSetValue}
        value={data['email']}
      />
    </QuizWrapper>
  )
}

export default Email
