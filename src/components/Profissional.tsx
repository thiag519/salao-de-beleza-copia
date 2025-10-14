"use client";

import { ProfissionalType } from "@/types/servicosTypes/ProfissionalType";
import { ServiceType } from "@/types/servicosTypes/ServiceType";
import { getDataService } from "@/utils/getDataService";
import { useEffect, useState } from "react";
import { FormService } from "./FormService";

type Props = {
  id: number
  categoria: string
};

export const Profissional = ({ id, categoria }: Props) => {
  const [dados, setDados] = useState<ServiceType | null>(null);
  
  useEffect(() => {
    getDataService().then(setDados).catch(console.error);
  }, []);
  if (!dados) return;
  const service = dados.servicos;
  const prof: ProfissionalType[] = service.flatMap((e) => e.profissional);
  const data = prof.filter((e) => e.id == id);

  return (
    <div className="w-dvw h-full flex content-center justify-center">
      {data &&
        data.map((item) => (
          <div className="w-[85%] h-auto" key={id}>
            <div className="w-full h-10 sm:h-15 lg:h-20 flex text-black 
            items-center justify-center ">
              <h1 className="text-2xl text-black ">{categoria}</h1>
            </div>
            <div className="w-full flex flex-col items-center ">
              
              <div className="flex h-full md:flex-row flex-col  w-full items-center justify-center">
                <div className="w-full h-full  flex items-center justify-center flex-col gap-3 ">
                  <div className=" md:w-[700px] h-full w-full ">
                    <p className="w-full h-auto  px-2 my-1 md:my-5 md:px-5 text-center text-[0px] md:text-[16px]">
                      "{item.descricao}" 
                    </p>
                  </div>
                  <div className="w-full h-auto px-2 md:w-4/5 sm:my-2  flex flex-col ">
                    {item.trabalhos && <FormService form={item?.trabalhos} phoneNumber={item.telefone}/>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
/* Nome do profissional
<div className="w-full h-5 sm:h-10 hidden sm:flex items-center justify-center">
  <h3 className="  sm:text-xl">{item.nome}</h3>
</div>
*/
