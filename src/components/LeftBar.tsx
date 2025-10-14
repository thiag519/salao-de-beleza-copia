import Link from "next/link";
import titles from '../../public/data/data.json'
import { MenuLine } from "./MenuLine";
import { useState } from "react";
import { useActive } from "@/hooks/useActive";
import { useActiveSection } from "@/hooks/useActiveSection";

type Props = {
  openClose: boolean
}

export const LeftBar = ({openClose} : Props) => {
  const {active, toggleActive} = useActive();
  //const [styleMenu, setStyleMenu]= useState(1);
  const {activeIndex} = useActiveSection();

  return(
    <div 
        style={{transition: 'ease-out 0.6s'}}
        className={`${openClose? 'left-0': '-left-[100%]'} h-dvh w-dvw touch-none top-0 z-20 fixed 
        flex 
    `}>
      <ul
        style={{transition: 'ease-out 0.6s'}}
        className={`${openClose? 'left-0': '-left-[ 100% ]'}  w-[71dvw] 
          h-dvh flex flex-col aling-center pt-20 sm:pt-0 sm:gap-3 lg:pt-20 touch-none
          bg-[var(--color-dark)] list-none top-0 gap-2
        `}
      >
        {titles.map((item, index)=> (
          <Link 
            key={index}
            href={`#${item.titulo}`} 
            className={`text-[16px] h-[14%] sm:py-3  ${activeIndex === index 
              ? 'border-b-[var(--color-highlight)] border-b-5 shadow-lg text-white px-7'
              : 'border-b-white border-b-4'}`}
            style={{fontWeight: '700'}}
          >
            <li 
              className=" px-5 py-5 h-full mt-2"
              onClick={() => toggleActive()}
               >
              { item.titulo == 'Império da Beleza'? 'Início': item.titulo} 
            </li>
          </Link>  
        ))}
      </ul> 
      <div 
        style={{transition: 'ease-out 0.6s'}}
        className={`${active? 'left-0': '-left-[100%]'} h-dvh w-[29dvw]  top-0 bg-black/85 z-0 static 
        flex items-start justify-center pt-[15px]  touch-none
        `}>
          <MenuLine/> 
      </div>
    </div>
 


  )
};