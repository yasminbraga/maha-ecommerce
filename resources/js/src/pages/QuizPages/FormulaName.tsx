import React, { FormEvent, useContext } from 'react'
import { QuizContext } from '../../contexts/QuizContext'
import QuizWrapper from './QuizWrapper'

const FormulaName: React.FC = () => {
  const { data, setData } = useContext(QuizContext)
  const handleSetValue = (e: FormEvent<HTMLDivElement>) => {
    const target = e.target as HTMLInputElement
    setData({ ...data, ['formulaName']: target.value })
  }

  return (
    <QuizWrapper
      title="Qual nome da sua fórmula?"
      subtitle="Digite o nome que virá impresso no seu produto personalizado"
    >
      <label htmlFor="formula_name">Nome da fórmula</label>
      <input type="text" name="formulaName" id="formula_name" onChange={handleSetValue} />
    </QuizWrapper>
  )
}

export default FormulaName
