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

const HairStructure: React.FC = () => {
  const { data, setData } = useContext(QuizContext)
  const handleSetValue = (e: FormEvent<HTMLDivElement>) => {
    const target = e.target as HTMLInputElement
    setData({ ...data, ['hairStructure']: target.value })
  }

  return (
    <QuizWrapper
      title="Qual a espessura do seu fio?"
      subtitle="a expessura do seu fio é importante para a viscosidade"
    >
      <RadioWrapper className="radio-wrapper" onChange={(e) => handleSetValue(e)}>
        <Field>
          <input type="radio" id="fine" value="fine" checked={data['hairStructure'] === 'fine'} />
          <label htmlFor="fine">Fino</label>
        </Field>

        <Field>
          <input
            type="radio"
            id="medium"
            value="medium"
            checked={data['hairStructure'] === 'medium'}
          />
          <label htmlFor="medium">Médio</label>
        </Field>

        <Field>
          <input
            type="radio"
            id="coarse"
            value="coarse"
            checked={data['hairStructure'] === 'coarse'}
          />
          <label htmlFor="coarse">Grosso</label>
        </Field>
      </RadioWrapper>
    </QuizWrapper>
  )
}

export default HairStructure
