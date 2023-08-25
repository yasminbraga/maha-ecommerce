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

const HairSize: React.FC = () => {
  const { data, setData } = useContext(QuizContext)
  const handleSetValue = (e: FormEvent<HTMLDivElement>) => {
    const target = e.target as HTMLInputElement
    setData({ ...data, ['hairSize']: target.value })
  }

  return (
    <QuizWrapper title="Qual o comprimento do seu cabelo?" subtitle="">
      <RadioWrapper onChange={(e) => handleSetValue(e)}>
        <Field>
          <input type="radio" id="short" value="short" checked={data['hairSize'] === 'short'} />
          <label htmlFor="short">Curto</label>
        </Field>

        <Field>
          <input type="radio" id="medium" value="medium" checked={data['hairSize'] === 'medium'} />
          <label htmlFor="medium">Médio</label>
        </Field>

        <Field>
          <input type="radio" id="long" value="long" checked={data['hairSize'] === 'long'} />
          <label htmlFor="long">Longo</label>
        </Field>

        <Field>
          <input
            type="radio"
            id="very_long"
            value="very_long"
            checked={data['hairSize'] === 'very_long'}
          />
          <label htmlFor="very_long">Muito Longo</label>
        </Field>
      </RadioWrapper>
    </QuizWrapper>
  )
}

export default HairSize
