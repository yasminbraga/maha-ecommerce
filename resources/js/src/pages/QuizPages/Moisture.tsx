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

const Moisture: React.FC = () => {
  const { data, setData } = useContext(QuizContext)

  const handleSetValue = (e: FormEvent<HTMLDivElement>) => {
    const target = e.target as HTMLInputElement
    setData({ ...data, ['moisture']: target.value })
  }
  return (
    <QuizWrapper
      title="Como é a oleosidade do seu cabelo?"
      subtitle="Quanto a oleosidade do seu cabelo no momento"
    >
      <RadioWrapper onChange={(e) => handleSetValue(e)}>
        <Field>
          <input type="radio" id="dry" value="dry" checked={data['moisture'] === 'dry'} />
          <label htmlFor="dry">Seca</label>
        </Field>

        <Field>
          <input
            type="radio"
            id="balanced"
            value="balanced"
            checked={data['moisture'] === 'balanced'}
          />
          <label htmlFor="balanced">Normal</label>
        </Field>

        <Field>
          <input type="radio" id="oily" value="oily" checked={data['moisture'] === 'oily'} />
          <label htmlFor="oily">Oleosa</label>
        </Field>
      </RadioWrapper>
    </QuizWrapper>
  )
}

export default Moisture
