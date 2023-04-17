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

const HairType: React.FC = () => {
  const { data, setData } = useContext(QuizContext)
  const handleSetValue = (e: FormEvent<HTMLDivElement>) => {
    const target = e.target as HTMLInputElement
    setData({ ...data, ['hairType']: target.value })
  }

  return (
    <QuizWrapper title="Qual o seu tipo de cabelo?" subtitle="Como é seu cabelo naturalmente?">
      <RadioWrapper onChange={(e) => handleSetValue(e)}>
        <Field>
          <input
            type="radio"
            id="straight"
            value="straight"
            checked={data['hairType'] === 'straight'}
          />
          <label htmlFor="straight">Liso</label>
        </Field>

        <Field>
          <input type="radio" id="wavy" value="wavy" checked={data['hairType'] === 'wavy'} />
          <label htmlFor="wavy">Ondulado</label>
        </Field>

        <Field>
          <input type="radio" id="curly" value="curly" checked={data['hairType'] === 'curly'} />
          <label htmlFor="curly">Cacheado</label>
        </Field>

        <Field>
          <input type="radio" id="coily" value="coily" checked={data['hairType'] === 'coily'} />
          <label htmlFor="coily">Crespo</label>
        </Field>
      </RadioWrapper>
    </QuizWrapper>
  )
}

export default HairType
