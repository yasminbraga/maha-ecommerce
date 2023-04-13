import React, { createContext, useState } from 'react'
import HairStructure from '../pages/QuizPages/HairStructure'
import HairType from '../pages/QuizPages/HairType'
import Treatments from '../pages/QuizPages/Treatments'

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
    3: <Treatments />,
  }
  const totalPages = Object.keys(pages).length
  const [data, setData] = useState({
    hairType: '',
    HairStructure: '',
    treatments: [],
  })
  const canSubmit = step === totalPages
  // const hideSubmitBtn = step !== totalPages && 'hide-btn'
  return (
    <QuizContext.Provider value={{ step, setStep, pages, data, setData, totalPages, canSubmit }}>
      {children}
    </QuizContext.Provider>
  )
}
