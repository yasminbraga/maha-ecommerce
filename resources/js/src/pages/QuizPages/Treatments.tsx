import React, { FormEvent, useContext } from 'react'
import { QuizContext } from '../../contexts/QuizContext'

// import { Container } from './styles';

const Treatments: React.FC = () => {
  const { setData } = useContext(QuizContext)
  const handleSetValue = (e: FormEvent<HTMLDivElement>) => {
    const target = e.target as HTMLInputElement
    setData({ ['treatments']: target.value })
  }
  return (
    <div>
      <h2>Qual o tratamento químico feito no seu cabelo?</h2>
      <div className="radio-wrapper" onChange={(e) => handleSetValue(e)}>
        <label htmlFor="straight">Liso</label>
        <input type="radio" id="straight" value="straight" />

        <label htmlFor="wavy">Ondulado</label>
        <input type="radio" id="wavy" value="wavy" />
      </div>
    </div>
  )
}

export default Treatments
