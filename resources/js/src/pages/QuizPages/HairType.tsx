import React, { FormEvent, useContext } from 'react'
import styled from 'styled-components'
import { QuizContext } from '../../contexts/QuizContext'

const Title = styled.h2`
  text-transform: uppercase;
  font-weight: 200;
  padding: 1rem 0;
`

const RadioWrapper = styled.div`
  display: flex;
  gap: 1rem;
`

const Field = styled.div`
  display: flex;
  gap: 0.3rem;
`

const HairType: React.FC = () => {
  const { setData } = useContext(QuizContext)
  const handleSetValue = (e: FormEvent<HTMLDivElement>) => {
    const target = e.target as HTMLInputElement
    setData({ ['hairType']: target.value })
  }

  return (
    <div>
      <Title>Qual o seu tipo de cabelo?</Title>
      <RadioWrapper onChange={(e) => handleSetValue(e)}>
        <Field>
          <input type="radio" id="straight" value="straight" />
          <label htmlFor="straight">Liso</label>
        </Field>

        <Field>
          <input type="radio" id="wavy" value="wavy" />
          <label htmlFor="wavy">Ondulado</label>
        </Field>
      </RadioWrapper>
    </div>
  )
}

export default HairType
