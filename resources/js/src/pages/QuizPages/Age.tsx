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
          <input type="radio" id="2_10" value="2_10" checked={data['age'] === '2_10'} />
          <label htmlFor="2_10">2 a 10 anos</label>
        </Field>

        <Field>
          <input type="radio" id="11_17" value="11_17" checked={data['age'] === '11_17'} />
          <label htmlFor="11_17">11 a 17 anos</label>
        </Field>

        <Field>
          <input type="radio" id="18_24" value="18_24" checked={data['age'] === '18_24'} />
          <label htmlFor="18_24">18 a 24 anos</label>
        </Field>

        <Field>
          <input type="radio" id="25_34" value="25_34" checked={data['age'] === '25_34'} />
          <label htmlFor="25_34">25 a 34 anos</label>
        </Field>

        <Field>
          <input type="radio" id="35_44" value="35_44" checked={data['age'] === '35_44'} />
          <label htmlFor="35_44">35 a 44 anos</label>
        </Field>
        <Field>
          <input type="radio" id="45_54" value="45_54" checked={data['age'] === '45_54'} />
          <label htmlFor="45_54">45 a 54 anos</label>
        </Field>

        <Field>
          <input type="radio" id="55_64" value="55_64" checked={data['age'] === '55_64'} />
          <label htmlFor="55_64">55 a 64 anos</label>
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
