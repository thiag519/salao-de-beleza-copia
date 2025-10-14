"use client"

import { useActive } from "@/hooks/useActive";
import { MenuLine } from "./MenuLine";

//pegar o id para ativar o active, colocar um onClick para executar a função 
//para usar o active terar que fazer uma função de escrol que verifica em 
// qual area esta e coloca o active

export const MenuMobile = () => {
  const {active, toggleActive} = useActive()
 
  return(
     <div className="w-[32px]  h-[32px] flex justify-between z-50"
       >
    <nav 
      style={{transition: 'ease-out 9s'}}
      className=" touch-auto z-10 left-0"
    >

      <MenuLine/>
    </nav>
    </div>
    
  )
}