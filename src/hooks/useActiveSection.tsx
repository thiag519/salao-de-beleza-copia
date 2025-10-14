"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface ActiveSectionContextType {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const ActiveSectionContext = createContext<ActiveSectionContextType | undefined>(undefined);

export function ActiveSectionProvider({ children }: { children: React.ReactNode }) {
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section");

    const handleScroll = () => {
      let currentIndex = 0;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
          currentIndex = index;
        }
      });
      setActiveIndex(currentIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // rodar uma vez ao carregar
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ActiveSectionContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  const context = useContext(ActiveSectionContext);
  if (!context) throw new Error("useActiveSection deve ser usado dentro de ActiveSectionProvider");
  return context;
}
