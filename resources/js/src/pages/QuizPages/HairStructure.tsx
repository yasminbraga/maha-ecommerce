import React, { FormEvent, useContext } from 'react'
import styled from 'styled-components'
import { QuizContext } from '../../contexts/QuizContext'
import QuizWrapper from './QuizWrapper'

const RadioWrapper = styled.div`
  display: flex;
  gap: 1rem;
`

const Field = styled.div`
  display: flex;
  gap: 0.3rem;
`

const HairStructure: React.FC = () => {
  const { setData } = useContext(QuizContext)
  const handleSetValue = (e: FormEvent<HTMLDivElement>) => {
    const target = e.target as HTMLInputElement
    setData({ ['hairStructure']: target.value })
  }

  return (
    <QuizWrapper
      title="Qual a espessura do seu fio?"
      subtitle="a expessura do seu fio é importante para a viscosidade"
    >
      <RadioWrapper className="radio-wrapper" onChange={(e) => handleSetValue(e)}>
        <Field>
          <input type="radio" id="straight" value="straight" />
          <label htmlFor="straight">Fino</label>
        </Field>

        <Field>
          <input type="radio" id="wavy" value="wavy" />
          <label htmlFor="wavy">Médio</label>
        </Field>
      </RadioWrapper>
    </QuizWrapper>
  )
}

export default HairStructure
