"use client"

import {  createContext, ReactNode, useState } from "react";

type SlideNumber = number;

interface SlideContextType {
  countSlider: SlideNumber;
  nextSlider: () => void;
  previousSlider: () => void;
  resetSlider: () => void;

}
export const SlideContext = createContext<SlideContextType | null>(null);

export const SlideProvider = ({children}: {children : ReactNode }) => {
  const [countSlider, setCountSlider] = useState<SlideNumber>(0);

  const nextSlider = () => {
    setCountSlider(countSlider + 1);
  }
  const previousSlider = () => {
    setCountSlider(countSlider - 1);
  }
  const resetSlider = () => {
    setCountSlider(0)
  }
    

  return (
    <SlideContext.Provider value={{countSlider, nextSlider, previousSlider,resetSlider }}>
      <div>
        {children}
      </div>
      
    </SlideContext.Provider>
  )
}

