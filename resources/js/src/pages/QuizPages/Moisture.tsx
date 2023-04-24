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
  const handleSetValue = (e: FormEvent<HTMLDivElement>, field: string) => {
    const target = e.target as HTMLInputElement
    setData({ ...data, [field]: target.value })
  }
  return (
    <QuizWrapper
      title="Como é a oleosidade do seu cabelo na raiz?"
      subtitle="Quanto a oleosidade do seu cabelo no momento"
    >
      <h3>raiz</h3>

      <RadioWrapper onChange={(e) => handleSetValue(e, 'scalpMoisture')}>
        <Field>
          <input
            name="scalpMoisture"
            type="radio"
            id="dry"
            value="dry"
            checked={data['scalpMoisture'] === 'dry'}
          />
          <label htmlFor="dry">Seca</label>
        </Field>

        <Field>
          <input
            name="scalpMoisture"
            type="radio"
            id="balanced"
            value="balanced"
            checked={data['scalpMoisture'] === 'balanced'}
          />
          <label htmlFor="balanced">Normal</label>
        </Field>

        <Field>
          <input
            name="scalpMoisture"
            type="radio"
            id="oily"
            value="oily"
            checked={data['scalpMoisture'] === 'oily'}
          />
          <label htmlFor="oily">Oleosa</label>
        </Field>
      </RadioWrapper>

      <h3>Pontas</h3>
      <RadioWrapper onChange={(e) => handleSetValue(e, 'endsMoisture')}>
        <Field>
          <input type="radio" id="ends_dry" value="dry" checked={data['endsMoisture'] === 'dry'} />
          <label htmlFor="ends_dry">Seca</label>
        </Field>

        <Field>
          <input
            type="radio"
            id="ends_balanced"
            value="balanced"
            checked={data['endsMoisture'] === 'balanced'}
          />
          <label htmlFor="ends_balanced">Normal</label>
        </Field>

        <Field>
          <input
            type="radio"
            id="ends_oily"
            value="oily"
            checked={data['endsMoisture'] === 'oily'}
          />
          <label htmlFor="ends_oily">Oleosa</label>
        </Field>
      </RadioWrapper>
    </QuizWrapper>
  )
}

export default Moisture
