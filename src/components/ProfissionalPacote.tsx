"use client";

import { useEffect, useState } from "react";
import { PacotesType } from "@/types/pacotesTypes/PacotesType";
import { getDataPacotes } from "@/utils/getDatePacotes";
import { ProfissionalPacotesType } from "@/types/pacotesTypes/PrifissionalPacotesType";
import { FormPacote } from "./FormPacote";

type Props = {
  id: number;
  categoria: string;
};

export const ProfissionalPacote = ({ id, categoria }: Props) => {
  const [dados, setDados] = useState<PacotesType | null >(null);

  useEffect( () => {
    getDataPacotes().then(setDados).catch(console.error);
  }, []);
  if (!dados) return;
  const service = dados.pacotes;
  const prof: ProfissionalPacotesType[] = service.flatMap((e) => e.profissional);
  const data = prof.filter((e) => e.id == id);

  return (
    <div className="w-dvw h-full flex content-center justify-center ">
      {data &&
        data.map((item) => (
          <div className="w-[85%] h-auto" key={id}>
            <div className="w-full h-10 sm:h-15 lg:h-20 flex text-black items-center justify-center ">
              <h1 className="text-2xl text-black ">{categoria}</h1>
            </div>
            <div className="w-full flex flex-col items-center ">
              <div className="flex h-full md:flex-row flex-col  w-full items-center justify-center ">
                <div className="w-full h-full  flex items-center justify-center flex-col gap-3 ">
                  <div className="md:w-[700px] h-full w-full ">
                    <p className="w-full  h-auto px-2 my-1 md:px-5 md:my-5 text-center text-[0px] md:text-[16px]">
                      "{item.descricao}"
                    </p>
                  </div>
                  <div className="w-full h-auto px-2 md:w-4/5 sm:my-2  flex flex-col ">
                    {item.servicos && <FormPacote form={item?.servicos} phoneNumber={item.telefone}/>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
        }
    </div>
  );
};
/*
<div className="w-full h-5 sm:h-10 hidden sm:flex items-center justify-center">
  <h3 className=" sm:text-xl">{item.nome}</h3>
</div>
*/