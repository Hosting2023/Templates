import { ReactNode, createContext, useState } from 'react'

interface IOrder {
  frequency: string
  allergy: string
  cleaning: string
  address: string
  schedule: {
    monday: string[]
    tuesday: string[]
    wednesday: string[]
    thursday: string[]
    friday: string[]
    saturday: string[]
    sunday: string[]
  }
}
const order: IOrder = {
  frequency: '',
  allergy: '',
  cleaning: '',
  address: '',
  schedule: {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  },
}
export const OrderContext = createContext<any>(undefined)

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  return <OrderContext.Provider value={useState(order)}>{children}</OrderContext.Provider>
}
