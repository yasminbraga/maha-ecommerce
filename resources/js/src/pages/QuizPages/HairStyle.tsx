import React, { FormEvent, useContext } from 'react'
import { QuizContext } from '../../contexts/QuizContext'

const HairStyle: React.FC = () => {
  const { data, setData } = useContext(QuizContext)

  const handleSetValue = (e: FormEvent<HTMLDivElement>) => {
    let updatedList = [...data['hairStyle']]
    console.log(updatedList)
    const target = e.target as HTMLInputElement

    if (target.checked) {
      if (target.value === 'none') {
        updatedList = ['none']
      } else {
        updatedList = [...data['hairStyle'], target.value]
        if (updatedList.includes('none')) {
          updatedList.splice(data['hairStyle'].indexOf('none'), 1)
        }
      }
    } else {
      updatedList.splice(data['hairStyle'].indexOf(target.value), 1)
    }
    setData({ ...data, ['hairStyle']: updatedList })
  }

  return (
    <div>
      <h2>Qual dos itens você usa no seu cabelo no dia a dia?</h2>
      <div>
        <input
          type="checkbox"
          id="straightener"
          value="straightener"
          onChange={handleSetValue}
          checked={data['hairStyle'].includes('straightener')}
        />
        <label htmlFor="straightener">Chapinha</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="curling_iron"
          value="curling_iron"
          onChange={handleSetValue}
          checked={data['hairStyle'].includes('curling_iron')}
        />
        <label htmlFor="curling_iron">Babyliss</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="hair_dryer"
          value="hair_dryer"
          onChange={handleSetValue}
          checked={data['hairStyle'].includes('hair_dryer')}
        />
        <label htmlFor="hair_dryer">Secador</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="hair_clip"
          value="hair_clip"
          onChange={handleSetValue}
          checked={data['hairStyle'].includes('hair_clip')}
        />
        <label htmlFor="hair_clip">Elástico</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="none"
          value="none"
          onChange={handleSetValue}
          checked={data['hairStyle'].includes('none')}
        />
        <label htmlFor="none">Nenhum</label>
      </div>
    </div>
  )
}

export default HairStyle
