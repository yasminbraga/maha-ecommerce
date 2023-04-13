import React, { FormEvent, useContext } from 'react'
import { QuizContext } from '../../contexts/QuizContext'

// import { Container } from './styles';

const HairStructure: React.FC = () => {
  const { setData } = useContext(QuizContext)
  const handleSetValue = (e: FormEvent<HTMLDivElement>) => {
    const target = e.target as HTMLInputElement
    setData({ ['hairStructure']: target.value })
  }
  return (
    <div>
      <h1>Structure</h1>
      <div className="radio-wrapper" onChange={(e) => handleSetValue(e)}>
        <label htmlFor="fine">Liso</label>
        <input type="radio" id="fine" value="fine" />

        <label htmlFor="medium">Ondulado</label>
        <input type="radio" id="medium" value="medium" />
      </div>
    </div>
  )
}

export default HairStructure
