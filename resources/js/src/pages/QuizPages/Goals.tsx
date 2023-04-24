import React, { FormEvent, useContext } from 'react'
import { QuizContext } from '../../contexts/QuizContext'
import QuizWrapper from './QuizWrapper'

const Goals: React.FC = () => {
  const { data, setData } = useContext(QuizContext)

  const handleSetValue = (e: FormEvent<HTMLDivElement>) => {
    let updatedList = [...data['treatments']]
    const target = e.target as HTMLInputElement

    if (target.checked) {
      updatedList = [...data['treatments'], target.value]
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
          id="anti_frizz"
          value="anti_frizz"
          onChange={handleSetValue}
          checked={data['treatments'].includes('anti_frizz')}
        />
        <label htmlFor="anti_frizz">Anti-Frizz</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="shine"
          value="shine"
          onChange={handleSetValue}
          checked={data['treatments'].includes('shine')}
        />
        <label htmlFor="shine">Brilho</label>
      </div>

      <div>
        <input type="checkbox" id="oil_control" value="oil_control" onChange={handleSetValue} />
        <label htmlFor="oil_control">Controle de oleosidade</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="hydrate"
          value="hydrate"
          onChange={handleSetValue}
          checked={data['treatments'].includes('hydrate')}
        />
        <label htmlFor="hydrate">Hidratação</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="curl_definition"
          value="curl_definition"
          onChange={handleSetValue}
        />
        <label htmlFor="curl_definition">Definição de cachos</label>
      </div>

      <div>
        <input type="checkbox" id="lengthen" value="lengthen" onChange={handleSetValue} />
        <label htmlFor="lengthen">Crescimento</label>
      </div>

      <div>
        <input type="checkbox" id="strengthen" value="strengthen" onChange={handleSetValue} />
        <label htmlFor="strengthen">Fortificação dos fios</label>
      </div>
    </QuizWrapper>
  )
}

export default Goals
