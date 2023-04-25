import React, { FormEvent, useContext } from 'react'
import { QuizContext } from '../../contexts/QuizContext'
import QuizWrapper from './QuizWrapper'

const Goals: React.FC = () => {
  const { data, setData } = useContext(QuizContext)

  const handleSetValue = (e: FormEvent<HTMLDivElement>) => {
    let updatedList = [...data['goals']]
    const target = e.target as HTMLInputElement

    if (target.checked) {
      updatedList = [...data['goals'], target.value]
    } else {
      updatedList.splice(data['goals'].indexOf(target.value), 1)
    }
    setData({ ...data, ['goals']: updatedList })
  }

  return (
    <QuizWrapper title="Qual os objetivos?" subtitle="Selecione cinco">
      <div>
        <input
          type="checkbox"
          id="anti_frizz"
          value="anti_frizz"
          onChange={handleSetValue}
          checked={data['goals'].includes('anti_frizz')}
        />
        <label htmlFor="anti_frizz">Anti-Frizz</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="shine"
          value="shine"
          onChange={handleSetValue}
          checked={data['goals'].includes('shine')}
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
          checked={data['goals'].includes('hydrate')}
        />
        <label htmlFor="hydrate">Hidratação</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="curl_definition"
          value="curl_definition"
          onChange={handleSetValue}
          checked={data['goals'].includes('curl_definition')}
        />
        <label htmlFor="curl_definition">Definição de cachos</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="lengthen"
          value="lengthen"
          onChange={handleSetValue}
          checked={data['goals'].includes('lengthen')}
        />
        <label htmlFor="lengthen">Crescimento</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="strengthen"
          value="strengthen"
          onChange={handleSetValue}
          checked={data['goals'].includes('strengthen')}
        />
        <label htmlFor="strengthen">Fortificação dos fios</label>
      </div>
    </QuizWrapper>
  )
}

export default Goals
