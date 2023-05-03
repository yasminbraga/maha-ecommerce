import React, { createContext, useState } from 'react'

import Age from '../pages/QuizPages/Age'
import Color from '../pages/QuizPages/Color'
import Email from '../pages/QuizPages/Email'
import EndsMoisture from '../pages/QuizPages/EndsMoisture'
import FormulaName from '../pages/QuizPages/FormulaName'
import Goals from '../pages/QuizPages/Goals'
import HairSize from '../pages/QuizPages/HairSize'
import HairStructure from '../pages/QuizPages/HairStructure'
import HairStyle from '../pages/QuizPages/HairStyle'
import HairType from '../pages/QuizPages/HairType'
import ScalpMoisture from '../pages/QuizPages/ScalpMoisture'
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
  scalpMoisture: string
  endsMoisture: string
  age: string
  treatments: Array<string>
  color: string
  washFrequence: string
  hairStyle: Array<string>
  workoutPlace: Array<string>
  workoutFrequence: string
  goals: Array<string>
  formulaName: string
  email: string
}
export const QuizContext = createContext({} as QuizType)

export const QuizProvider = ({ children }) => {
  const [step, setStep] = useState(0)

  const pages = {
    0: <HairType />,
    1: <HairStructure />,
    2: <HairSize />,
    3: <ScalpMoisture />,
    4: <EndsMoisture />,
    5: <Age />,
    6: <Treatments />,
    7: <Color />,
    8: <WashFrequence />,
    9: <HairStyle />,
    10: <WorkoutPlace />,
    11: <WorkoutFrequence />,
    12: <Goals />,
    13: <FormulaName />,
    14: <Email />,
  }

  const [data, setData] = useState<QuizDataType>({
    hairType: '',
    hairStructure: '',
    hairSize: '',
    scalpMoisture: '',
    endsMoisture: '',
    age: '',
    treatments: [],
    color: '',
    washFrequence: '',
    hairStyle: [],
    workoutPlace: [],
    workoutFrequence: '',
    goals: [],
    formulaName: '',
    email: '',
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
  12: isNotEmptAndGreaterThan5,
}
