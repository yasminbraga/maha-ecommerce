import React, { FormEvent, useContext } from 'react'
import { QuizContext } from '../../contexts/QuizContext'
import QuizWrapper from './QuizWrapper'

const Treatments: React.FC = () => {
  const { data, setData } = useContext(QuizContext)

  const handleSetValue = (e: FormEvent<HTMLDivElement>) => {
    let updatedList = [...data['treatments']]
    const target = e.target as HTMLInputElement

    if (target.checked) {
      if (target.value === 'none') {
        updatedList = ['none']
      } else {
        updatedList = [...data['treatments'], target.value]
        if (updatedList.includes('none')) {
          updatedList.splice(data['treatments'].indexOf('none'), 1)
        }
      }
    } else {
      updatedList.splice(data['treatments'].indexOf(target.value), 1)
    }
    setData({ ...data, ['treatments']: updatedList })
  }

  return (
    <QuizWrapper
      title="Qual o tratamento químico feito no seu cabelo?"
      subtitle="Selecione todos os tratamentos realizados por último no seu cabelo"
    >
      <div>
        <input
          type="checkbox"
          id="color"
          value="color"
          onChange={handleSetValue}
          checked={data['treatments'].includes('color')}
        />
        <label htmlFor="color">Coloração</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="straightening "
          value="straightening "
          onChange={handleSetValue}
          checked={data['treatments'].includes('straightening ')}
        />
        <label htmlFor="straightening">Alisamento</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="bleached"
          value="bleached"
          onChange={handleSetValue}
          checked={data['treatments'].includes('bleached')}
        />
        <label htmlFor="bleached">Descoloração</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="transition"
          value="transition"
          onChange={handleSetValue}
          checked={data['treatments'].includes('transition')}
        />
        <label htmlFor="transition">Estou em transição capilar</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="none"
          value="none"
          onChange={handleSetValue}
          checked={data['treatments'].includes('none')}
        />
        <label htmlFor="none">Meu cabelo é natural</label>
      </div>
    </QuizWrapper>
  )
}

export default Treatments
