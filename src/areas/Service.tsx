"use client"

import { AreaService } from "@/components/AreaService";
import { ServiceType } from "@/types/servicosTypes/ServiceType";
import { getDataService } from "@/utils/getDataService";
import { useEffect, useState } from "react";
import urlLeft from '@/components/icons/Left.png';
import urlRight from '@/components/icons/Right.png';
import Image from "next/image";

export const Service = () => {
  const [dados, setDados] = useState<ServiceType | null >(null);
  const [count, setCount]= useState(0);

   useEffect( () => {
      getDataService().then(setDados).catch(console.error);
    }, []);

    const handleClickLeft = () => {
      if(count < 4 && count >= -4) {
        setCount(count +1)
        console.log(count)
      }  
    }
    const handleClickRight = () => {
       if(count <= 4 && count > -4) {
        setCount( count -1)
        console.log(count)
      }
    }

  return(
    <section 
      id="Serviços"
      className=" w-dvw h-[100vh] bg-[var(--color-light)] 
      flex items-center justify-center"
    >
     { dados &&
      <div 
        key={dados.id} 
        className='flex xl:w-[90%] lg:w-[95%]
        w-[400px] h-[75%] overflow-x-hidden flex-col justify-between items-center'>
        <h1 className='md:text-4xl sm:text-3xl text-2xl text-center lg:mt-0 mt-2.5'>
          {dados?.titulo}
        </h1>
        {count < 3 &&
        <div 
          onClick={handleClickLeft}
          className=' h-[80%] w-[20%] absolute left-0 z-50 rounded-r-full 
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
        <AreaService
          count={count}
          servicos={dados.servicos}
        />
        {count > -4 &&
        <div 
          onClick={handleClickRight}
          className='  h-[80%] w-[20%] absolute right-0 rounded-l-full 
          flex justify-end items-center'>
          <Image 
            className="bg-black/20 md:w-15 md:h-15 rounded-full text-center"
            width={48}
            height={48}
            src={urlRight}
            alt='right'
          />
        </div>
        }
       
      </div>
     }
    </section>
  );
};

