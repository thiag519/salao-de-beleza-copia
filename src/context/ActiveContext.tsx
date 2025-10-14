"use client"

import {  createContext, ReactNode, useState } from "react";

type Active = boolean;

interface ActiveContextType {
  active: Active;
  toggleActive: () => void;
}
export const ActiveContext = createContext<ActiveContextType | undefined>(undefined);

export const ActiveProvider = ({children}: {children : ReactNode }) => {
  const [active, setActive] = useState<Active>(false);

  const toggleActive = () => 
    setActive(!active);

  return (
    <ActiveContext.Provider value={{active, toggleActive }}>
      <div>
        {children}
      </div>
      
    </ActiveContext.Provider>
  )
}

