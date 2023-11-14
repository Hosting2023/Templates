import { ReactNode, createContext, useState } from 'react'

export const AuthContext = createContext<any>(false)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  return <AuthContext.Provider value={useState(false)}>{children}</AuthContext.Provider>
}
