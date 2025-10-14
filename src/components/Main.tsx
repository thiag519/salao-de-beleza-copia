import { SlideProvider } from "@/context/SlideContext";
import { About } from "@/areas/About";
import { Contato } from "@/areas/Contato";
import { Inicio } from "@/areas/inicio";
import { Pacotes } from "@/areas/Pacotes";
import { Service } from "@/areas/Service";

export const Main = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <SlideProvider>
          <Inicio/>
      </SlideProvider> 
      <About/>
      <Service/>
      <Pacotes/>
      <Contato/>
    </main>
  )
}