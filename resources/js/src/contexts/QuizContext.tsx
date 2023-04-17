import React, { createContext, useState } from 'react'
import HairSize from '../pages/QuizPages/HairSize'
import HairStructure from '../pages/QuizPages/HairStructure'
import HairType from '../pages/QuizPages/HairType'
import Moisture from '../pages/QuizPages/Moisture'

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
    // 5: <Treatments />,
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
    washFrequence: [],
    goals: [],
    hairStyle: [],
    workoutPlace: [],
    workoutFrequence: [],
  })

  const canSubmit = step === totalPages
  // const hideSubmitBtn = step !== totalPages && 'hide-btn'
  return (
    <QuizContext.Provider value={{ step, setStep, pages, data, setData, totalPages, canSubmit }}>
      {children}
    </QuizContext.Provider>
  )
}
