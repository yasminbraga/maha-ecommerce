import React, { createContext, useState } from 'react'

import Age from '../pages/QuizPages/Age'
import Color from '../pages/QuizPages/Color'
import EndsMoisture from '../pages/QuizPages/EndsMoisture'
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
  canSubmit: boolean
  // hideSubmitBtn: string | false
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
  }
  const [data, setData] = useState({
    hairType: '' || null,
    hairStructure: '' || null,
    hairSize: '' || null,
    scalpMoisture: '' || null,
    endsMoisture: '' || null,
    age: '' || null,
    treatments: [] || null,
    color: '' || null,
    washFrequence: '' || null,
    hairStyle: [] || null,
    workoutPlace: [] || null,
    workoutFrequence: '' || null,
    goals: [] || null,
  })

  const totalPages = Object.keys(pages).length

  const canSubmit = step === totalPages
  // const hideSubmitBtn = step !== totalPages && 'hide-btn'
  return (
    <QuizContext.Provider value={{ step, setStep, pages, data, setData, totalPages, canSubmit }}>
      {children}
    </QuizContext.Provider>
  )
}
