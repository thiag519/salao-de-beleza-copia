"use client"

import { AreaPacotes } from "@/components/AreaPacotes";
import { PacotesType } from "@/types/pacotesTypes/PacotesType";
import { getDataPacotes } from "@/utils/getDatePacotes";
import { useEffect, useState } from "react";
import urlLeft from '@/components/icons/Left.png';
import urlRight from '@/components/icons/Right.png';
import Image from "next/image";

export const Pacotes = () => {
  const [dados, setDados] = useState<PacotesType | null >(null);
  const [count, setCount]= useState(0);

   useEffect( () => {
      getDataPacotes().then(setDados).catch(console.error);
    }, []);

    const handleClickLeft = () => {
      if(count < 2 && count >= -2) {
        setCount(count +1)
        console.log(count)
      }
       
    }
    const handleClickRight = () => {
       if(count <= 2 && count > -2) {
        setCount( count -1)
        console.log(count)
      }
    }
  return(
    <section 
      id="Pacotes"
      className="w-dvw section bg-[var(--color-dark)] 
      flex items-center justify-center"
    >
     { dados &&
      <div 
        key={dados.id} 
        className='flex xl:w-[100%] lg:w-[1000px]  
        w-[400px] h-[75%] overflow-x-hidden flex-col justify-between items-center'>
        <h1 className=' md:text-4xl sm:text-3xl text-2xl text-center lg:mt-0 mt-2.5'>
          {dados?.titulo}
        </h1>

        {count < 1 &&
        <div 
          onClick={handleClickLeft}
          className={` h-[80%] w-[20%] absolute ${count == 0 && 'lg:w-0 lg:h-0'} left-0 z-10 rounded-r-full 
          flex justify-start items-center`}>
          <Image
            className="hover:bg-black/20 md:w-15 md:h-15 rounded-full text-center"
            width={48}
            height={48}
            src={urlLeft}
            alt='left'
          />
        </div>
        }
          <AreaPacotes
            count={count}
            pacotes={dados.pacotes}
          />
        {count > -1 &&
        <div 
          onClick={handleClickRight}
          className={` h-[80%] w-[20%] absolute ${count == 0 && 'lg:w-0 lg:h-0'} right-0 z-10 rounded-r-full 
          flex justify-end items-center`}>
          <Image 
            className="hover:bg-black/20 md:w-15 md:h-15 rounded-full text-center"
            width={48}
            height={48}
            src={urlRight}
            alt='right'
          />
        </div>
        }
       
      </div>
     };
    </section>
  );
};

