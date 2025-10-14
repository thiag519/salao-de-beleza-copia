"use client"

import Header from "@/components/header";
import { Main } from "@/components/Main";
import { ActiveProvider } from "@/context/ActiveContext";
import { ActiveSectionProvider } from "@/hooks/useActiveSection";



export default function Home() { 

  
  // Colocar as imagens do salão, links e whatsapp
  // Procurar domininho Império da Beleza
  // Etapa de teste
  // Deploy  
  return (
    <div className="">
      <ActiveSectionProvider>
        <ActiveProvider>
        <Header/>
        <Main/>
      </ActiveProvider>
      </ActiveSectionProvider>
    </div>
  );
}
