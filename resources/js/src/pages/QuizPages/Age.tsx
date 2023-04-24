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

const Age: React.FC = () => {
  const { data, setData } = useContext(QuizContext)
  const handleSetValue = (e: FormEvent<HTMLDivElement>) => {
    const target = e.target as HTMLInputElement
    setData({ ...data, ['age']: target.value })
  }

  return (
    <QuizWrapper title="Qua o comprimento do seu cabelo?" subtitle="">
      <RadioWrapper onChange={(e) => handleSetValue(e)}>
        <Field>
          <input type="radio" id="2-10" value="2-10" checked={data['age'] === '2-10'} />
          <label htmlFor="2-10">2 a 10 anos</label>
        </Field>

        <Field>
          <input type="radio" id="11-17" value="11-17" checked={data['age'] === '11-17'} />
          <label htmlFor="11-17">11 a 17 anos</label>
        </Field>

        <Field>
          <input type="radio" id="18-24" value="18-24" checked={data['age'] === '18-24'} />
          <label htmlFor="18-24">18 a 24 anos</label>
        </Field>

        <Field>
          <input type="radio" id="25-34" value="25-34" checked={data['age'] === '25-34'} />
          <label htmlFor="25-34">25 a 34 anos</label>
        </Field>

        <Field>
          <input type="radio" id="35-44" value="35-44" checked={data['age'] === '35-44'} />
          <label htmlFor="35-44">35 a 44 anos</label>
        </Field>
        <Field>
          <input type="radio" id="45-54" value="45-54" checked={data['age'] === '45-54'} />
          <label htmlFor="45-54">45 a 54 anos</label>
        </Field>

        <Field>
          <input type="radio" id="55-64" value="55-64" checked={data['age'] === '55-64'} />
          <label htmlFor="55-64">55 a 64 anos</label>
        </Field>

        <Field>
          <input type="radio" id="65+" value="65+" checked={data['age'] === '65+'} />
          <label htmlFor="65+">65+ anos</label>
        </Field>
      </RadioWrapper>
    </QuizWrapper>
  )
}

export default Age
