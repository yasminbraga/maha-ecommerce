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

const WashFrequence: React.FC = () => {
  const { data, setData } = useContext(QuizContext)
  const handleSetValue = (e: FormEvent<HTMLDivElement>) => {
    const target = e.target as HTMLInputElement
    setData({ ...data, ['washFrequence']: target.value })
  }
  return (
    <QuizWrapper title="Quantas vezes na semana você lava o cabelo?" subtitle="">
      <RadioWrapper onChange={(e) => handleSetValue(e)}>
        <Field>
          <input type="radio" id="x1" value="x1" checked={data['washFrequence'] === 'x1'} />
          <label htmlFor="x1">1X</label>
        </Field>

        <Field>
          <input type="radio" id="x2" value="x2" checked={data['washFrequence'] === 'x2'} />
          <label htmlFor="x2">2X</label>
        </Field>

        <Field>
          <input type="radio" id="x3" value="x3" checked={data['washFrequence'] === 'x3'} />
          <label htmlFor="x3">3X</label>
        </Field>

        <Field>
          <input type="radio" id="x4" value="x4" checked={data['washFrequence'] === 'x4'} />
          <label htmlFor="x4">4X</label>
        </Field>

        <Field>
          <input type="radio" id="x5" value="x5" checked={data['washFrequence'] === 'x5'} />
          <label htmlFor="x5">5X</label>
        </Field>
        <Field>
          <input type="radio" id="x6" value="x6" checked={data['washFrequence'] === 'x6'} />
          <label htmlFor="x6">6X</label>
        </Field>
        <Field>
          <input type="radio" id="x7" value="x7" checked={data['washFrequence'] === 'x7'} />
          <label htmlFor="x7">7X</label>
        </Field>
      </RadioWrapper>
    </QuizWrapper>
  )
}

export default WashFrequence
