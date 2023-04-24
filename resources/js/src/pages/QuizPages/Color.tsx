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

const Color: React.FC = () => {
  const { data, setData } = useContext(QuizContext)
  const handleSetValue = (e: FormEvent<HTMLDivElement>) => {
    const target = e.target as HTMLInputElement
    setData({ ...data, ['color']: target.value })
  }
  return (
    <QuizWrapper title="Qua o comprimento do seu cabelo?" subtitle="">
      <RadioWrapper onChange={(e) => handleSetValue(e)}>
        <Field>
          <input type="radio" id="blonde" value="blonde" checked={data['color'] === 'blonde'} />
          <label htmlFor="blonde">Loiro</label>
        </Field>

        <Field>
          <input type="radio" id="black" value="black" checked={data['color'] === 'black'} />
          <label htmlFor="black">Preto</label>
        </Field>

        <Field>
          <input
            type="radio"
            id="brunette"
            value="brunette"
            checked={data['color'] === 'brunette'}
          />
          <label htmlFor="brunette">Moreno</label>
        </Field>

        <Field>
          <input type="radio" id="red" value="red" checked={data['color'] === 'red'} />
          <label htmlFor="red">Ruivo</label>
        </Field>

        <Field>
          <input
            type="radio"
            id="gray_silver"
            value="gray_silver"
            checked={data['color'] === 'gray_silver'}
          />
          <label htmlFor="gray_silver">Grisalho ou platinado</label>
        </Field>
        <Field>
          <input
            type="radio"
            id="fashion_color"
            value="fashion_color"
            checked={data['color'] === 'fashion_color'}
          />
          <label htmlFor="fashion_color">Colorido (rosa/azul)</label>
        </Field>
      </RadioWrapper>
    </QuizWrapper>
  )
}

export default Color
