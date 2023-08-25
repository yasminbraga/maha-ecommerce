import React, { createContext, useState } from 'react'

import Age from '../pages/QuizPages/Age'
import Color from '../pages/QuizPages/Color'
import FormulaName from '../pages/QuizPages/FormulaName'
import Fragrance from '../pages/QuizPages/Fragrance'
import Goals from '../pages/QuizPages/Goals'
import HairSize from '../pages/QuizPages/HairSize'
import HairStructure from '../pages/QuizPages/HairStructure'
import HairStyle from '../pages/QuizPages/HairStyle'
import HairType from '../pages/QuizPages/HairType'
import Moisture from '../pages/QuizPages/Moisture'
import Treatments from '../pages/QuizPages/Treatments'
import WashFrequence from '../pages/QuizPages/WashFrequence'
import WorkoutFrequence from '../pages/QuizPages/WorkoutFrequence'
import WorkoutPlace from '../pages/QuizPages/WorkoutPlace'

type QuizType = {
  step: number
  setStep: React.Dispatch<React.SetStateAction<number>>
  pages: {}
  data: {}
  setData: React.Dispatch<React.SetStateAction<{}>>
  totalPages: number
}

type QuizDataType = {
  hairType: string
  hairStructure: string
  hairSize: string
  moisture: string
  age: string
  treatments: Array<string>
  color: string
  washFrequence: string
  hairStyle: Array<string>
  workoutPlace: Array<string>
  workoutFrequence: string
  goals: Array<string>
  fragrance: boolean
  formulaName: string
}
export const QuizContext = createContext({} as QuizType)

export const QuizProvider = ({ children }) => {
  const [step, setStep] = useState(0)

  const pages = {
    0: <HairType />,
    1: <HairStructure />,
    2: <HairSize />,
    3: <Moisture />,
    4: <Age />,
    5: <Treatments />,
    6: <Color />,
    7: <WashFrequence />,
    8: <HairStyle />,
    9: <WorkoutPlace />,
    10: <WorkoutFrequence />,
    11: <Goals />,
    12: <Fragrance />,
    13: <FormulaName />,
  }

  const [data, setData] = useState<QuizDataType>({
    hairType: '',
    hairStructure: '',
    hairSize: '',
    moisture: '',
    age: '',
    treatments: [],
    color: '',
    washFrequence: '',
    hairStyle: [],
    workoutPlace: [],
    workoutFrequence: '',
    goals: [],
    fragrance: true,
    formulaName: '',
  })

  const totalPages = Object.keys(pages).length

  return (
    <QuizContext.Provider
      value={{
        step,
        setStep,
        pages,
        data,
        setData,
        totalPages,
      }}
    >
      {children}
    </QuizContext.Provider>
  )
}

const isNotNull = (data: string) => {
  if (!data) {
    return { error: true, message: 'Campo vazio' }
  }
  return { error: false }
}

const isNotEmpty = (data: any[]) => {
  if (!data.length) {
    return { error: true, message: 'Selecione um' }
  }
  return { error: false }
}

const isNotEmptAndGreaterThan5 = (data: any[]) => {
  if (!data.length) {
    return { error: true, message: 'Obrigatório Preencher' }
  } else if (data.length < 5) {
    return { error: true, message: 'Selecione no mínimo 5' }
  }
  return { error: false }
}
export const validations = {
  0: isNotNull,
  1: isNotNull,
  6: isNotEmpty,
  11: isNotEmptAndGreaterThan5,
}
