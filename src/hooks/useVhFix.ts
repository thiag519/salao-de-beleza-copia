"use client";

import { useEffect } from "react";

/* Calculo para estabilizar o layout no mobile*/

export function useVhFix() {
  useEffect(() => {
    if (typeof window === "undefined") return; 
      const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    
     setVh();

    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }
  }, []);
};
