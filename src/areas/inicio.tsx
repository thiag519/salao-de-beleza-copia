"use client";

import { ImageAndDescription } from "@/components/ImageAndDescription";
import { Circles } from "@/components/Circles";
import { useEffect, useState } from "react";
import { InicioType } from "@/types/InicioType";
import { getDataInitial } from "@/utils/getDataInitial";
import { useActive } from "@/hooks/useActive";
import { LeftBar } from "@/components/LeftBar";
import Image from "next/image";
import urlLeft from "@/components/icons/Left.png";
import urlRight from "@/components/icons/Right.png";

export const Inicio = () => {
  const [dados, setDados] = useState<InicioType | null>(null);
  const { active, toggleActive } = useActive();
  const [count, setCount] = useState(0);

  useEffect(() => {
    getDataInitial().then(setDados).catch(console.error);
  }, []);

  useEffect(() => {
    const slider = () => {
      if (count >= 0 && count < 2) {
        setCount(count + 1);
      } else {
        setCount(0);
      }
    };
    const slideTime = setTimeout(slider, 8000);
    return () => clearTimeout(slideTime);
  }, [count]);

  return(
    <section 
      id='Império da Beleza'
      className=" w-[100vw] h-[100vh] bg-[var(--color-light)] flex items-end justify-center 
      overflow-x-hidden overflow-clip ">
      <LeftBar
        openClose={active}
      />
     { dados &&
      <div key={dados?.id} className='w-full h-[80%] flex flex-col justify-start mb-16'>
        <h1 
        className=' md:text-4xl sm:text-3xl text-2xl text-center mt-0.5 h-15 w-full mb-8'>
          {dados?.titulo}
        </h1>
        { count > 0 &&
        <div 
          onClick={() => count === 0? setCount(0) : setCount(count - 1) }
          className='h-[80%] w-[20%] absolute left-0 z-10 rounded-r-full 
          flex justify-start items-center'>
            <Image
              className="bg-black/20 md:w-15 md:h-15 rounded-full text-center"
              width={48}
              height={48}
              src={urlLeft}
              alt='left'
            />
        </div>
        }
          <ImageAndDescription countSlide={count} imagens={dados.imagens} />

          {count < 2 && 
            <div
              onClick={() => (count === 2 ? setCount(2) : setCount(count + 1))}
              className="  h-[80%] w-[20%] absolute right-0 rounded-l-full 
          flex justify-end items-center"
            >
              <Image
                className="bg-black/20 md:w-15 md:h-15 rounded-full text-center"
                width={48}
                height={48}
                src={urlRight}
                alt="right"
              />
            </div>
          }
          <Circles countActive={count} />
      
      </div>};
    </section>
  );
};