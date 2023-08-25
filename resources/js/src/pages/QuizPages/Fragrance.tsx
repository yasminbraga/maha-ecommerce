import React, { useContext } from 'react'
import styled from 'styled-components'
import { QuizContext } from '../../contexts/QuizContext'
import QuizWrapper from './QuizWrapper'

const Field = styled.div`
  display: flex;
  gap: 0.3rem;
`

const Fragrance: React.FC = () => {
  const { data, setData } = useContext(QuizContext)
  const handleSetValue = () => {
    setData({ ...data, ['fragrance']: !data['fragrance'] })
  }
  return (
    <QuizWrapper title="Como você prefere a refrescância do seu shampoo?" subtitle="">
      <Field>
        <input
          type="radio"
          id="false_refresh"
          value={data['fragrance']}
          checked={data['fragrance'] === true}
          onClick={handleSetValue}
        />
        <label htmlFor="false_refresh">Gosto do meu produto refrescante</label>
      </Field>
    </QuizWrapper>
  )
}

export default Fragrance
