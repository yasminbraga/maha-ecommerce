import React, { FormEvent, useContext } from 'react'
import { QuizContext } from '../../contexts/QuizContext'
import QuizWrapper from './QuizWrapper'

const WorkoutPlace: React.FC = () => {
  const { data, setData } = useContext(QuizContext)

  const handleSetValue = (e: FormEvent<HTMLDivElement>) => {
    let updatedList = [...data['workoutPlace']]
    const target = e.target as HTMLInputElement

    if (target.checked) {
      if (target.value === 'none') {
        updatedList = ['none']
      } else {
        updatedList = [...data['workoutPlace'], target.value]
        if (updatedList.includes('none')) {
          updatedList.splice(data['workoutPlace'].indexOf('none'), 1)
        }
      }
    } else {
      updatedList.splice(data['workoutPlace'].indexOf(target.value), 1)
    }
    setData({ ...data, ['workoutPlace']: updatedList })
  }

  return (
    <QuizWrapper
      title="Onde você costuma praticar atividade física?"
      subtitle="Pode marcar mais de uma opção"
    >
      <div>
        <input
          type="checkbox"
          id="outdoor"
          value="outdoor"
          onChange={handleSetValue}
          checked={data['workoutPlace'].includes('outdoor')}
        />
        <label htmlFor="outdoor">Outdoor</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="pool"
          value="pool"
          onChange={handleSetValue}
          checked={data['workoutPlace'].includes('pool')}
        />
        <label htmlFor="pool">Piscina</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="beach"
          value="beach"
          onChange={handleSetValue}
          checked={data['workoutPlace'].includes('beach')}
        />
        <label htmlFor="beach">Mar/Praia</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="indoor"
          value="indoor"
          onChange={handleSetValue}
          checked={data['workoutPlace'].includes('indoor')}
        />
        <label htmlFor="indoor">Indoor/Academia</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="none"
          value="none"
          onChange={handleSetValue}
          checked={data['workoutPlace'].includes('none')}
        />
        <label htmlFor="none">Não pratico atividade física</label>
      </div>
    </QuizWrapper>
  )
}

export default WorkoutPlace
