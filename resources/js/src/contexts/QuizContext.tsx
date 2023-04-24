import React, { createContext, useState } from 'react'

import Age from '../pages/QuizPages/Age'
import Color from '../pages/QuizPages/Color'
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
  canSubmit: boolean
  // hideSubmitBtn: string | false
}
export const QuizContext = createContext({} as QuizType)

export const QuizProvider = ({ children }) => {
  const [step, setStep] = useState(1)

  const pages = {
    1: <HairType />,
    2: <HairStructure />,
    3: <HairSize />,
    4: <Moisture />,
    5: <Age />,
    6: <Treatments />,
    7: <Color />,
    8: <WashFrequence />,
    9: <HairStyle />,
    10: <WorkoutPlace />,
    11: <WorkoutFrequence />,
    12: <Goals />,
  }
  const totalPages = Object.keys(pages).length
  const [data, setData] = useState({
    age: '',
    hairType: '',
    hairStructure: '',
    hairSize: '',
    scalpMoisture: '',
    endsMoisture: '',
    treatments: [],
    color: '',
    washFrequence: '',
    hairStyle: [],
    workoutPlace: [],
    workoutFrequence: '',
    goals: [],
  })

  const canSubmit = step === totalPages
  // const hideSubmitBtn = step !== totalPages && 'hide-btn'
  return (
    <QuizContext.Provider value={{ step, setStep, pages, data, setData, totalPages, canSubmit }}>
      {children}
    </QuizContext.Provider>
  )
}
