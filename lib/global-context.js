"use client"

import { createContext } from 'react';

export const GlobalContext = createContext();

export async function GlobalProvider({children}) {
  const value = {
    aaa: "aa",
    bbb: "bb",
  }

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}
