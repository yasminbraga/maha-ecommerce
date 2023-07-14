import React, { FormEvent, useContext } from 'react'
import styled from 'styled-components'
import { QuizContext } from '../../contexts/QuizContext'
import QuizWrapper from './QuizWrapper'

import Coily from '../../assets/coily.png'
import Curly from '../../assets/curly.png'
import Straight from '../../assets/straight.png'
import Wavy from '../../assets/wavy.png'

const RadioWrapper = styled.div`
  display: flex;
  gap: 1rem;
`

const Field = styled.div`
  display: flex;
  gap: 0.3rem;
`
const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #90a67b;
`

const Input = styled.input`
  visibility: hidden;
`

const Label = styled.label`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

const HairType: React.FC = () => {
  const { data, setData } = useContext(QuizContext)
  const handleSetValue = (e: FormEvent<HTMLDivElement>) => {
    const target = e.target as HTMLInputElement
    setData({ ...data, ['hairType']: target.value })
  }

  return (
    <QuizWrapper
      title="Qual o seu tipo de cabelo?"
      subtitle="Selecione a opção que melhor descreve como é seu cabelo naturalmente."
    >
      <RadioWrapper onChange={(e) => handleSetValue(e)}>
        <Field>
          <Input
            type="radio"
            id="straight"
            value="straight"
            checked={data['hairType'] === 'straight'}
          />
          <Label htmlFor="straight">
            <Image src={Straight} alt="cabelo liso" />
            <h4>Liso</h4>
          </Label>
        </Field>

        <Field>
          <Input type="radio" id="wavy" value="wavy" checked={data['hairType'] === 'wavy'} />
          <Label htmlFor="wavy">
            <Image src={Wavy} alt="cabelo ondulado" />
            <h4>Ondulado</h4>
          </Label>
        </Field>

        <Field>
          <Input type="radio" id="curly" value="curly" checked={data['hairType'] === 'curly'} />
          <Label htmlFor="curly">
            <Image src={Curly} alt="cabelo cacheado" />
            <h4>Cacheado</h4>
          </Label>
        </Field>

        <Field>
          <Input
            type="radio"
            id="coily"
            value="coily"
            checked={data['hairType'] === 'coily'}
            readOnly
          />
          <Label htmlFor="coily">
            <Image src={Coily} alt="cabelo crespo" />
            <h4>Crespo</h4>
          </Label>
        </Field>
      </RadioWrapper>
    </QuizWrapper>
  )
}

export default HairType
