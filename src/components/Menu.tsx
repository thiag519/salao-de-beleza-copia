"use client"

import Link from "next/link";
import titles from '../../public/data/data.json';
import { useState } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";

export const Menu = () => {
  const {activeIndex} = useActiveSection();
  //const [styleMenu, setStyleMenu] = useState(0);

  return (
    <nav className="flex ">
      <ul 
      className="flex gap-2">
      {
        titles.map((item, index) => (
            <Link 
              key={index}
              href={`#${item.titulo}`} 
              style={{fontWeight: '700', transition: 'ease-in-out 0.6s'}}
            >
              <li className={` text-[15px] h-8 text-center w-auto px-2 
               
                ${activeIndex === index 
                ? ' border-b-[var(--color-highlight)] border-b-4 shadow-md '
                : ' border-b-white border-b-4' }`}>
                { item.titulo == 'Império da Beleza'? 'Inicio': item.titulo} 
              </li>  
            </Link>
        ))
      }
      </ul>  
    </nav>
  )
};

 