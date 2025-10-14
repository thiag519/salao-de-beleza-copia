"use client"

import { useEffect, useState } from 'react';
import { getDataAbout } from '@/utils/getDataAbout';
import { AboutType } from '@/types/AboutType';

export const About = () => {
  
  const [dados, setDados] = useState<AboutType | null >(null);

  useEffect( () => {
    getDataAbout().then(setDados).catch(console.error);
  }, []);
  
  return(
    <section 
      id='Conheca-nos'
      className="w-dvw section bg-[var(--color-logo)]  flex-col 
       flex items-center justify-between"
    >
     { dados &&
     <>
      <div 
        style={{
          backgroundImage: `url(${dados?.fotosalao})`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'rgba(0, 0, 150, 0.5)'
        }}
        className='flex w-full h-full flex-col justify-end items-center object-cover text-white '>
        <div 
          className='w-full h-[17%]'>
          <h1 className=' md:text-4xl sm:text-3xl text-2xl text-center 
            h-[50px] top-0 pt-1.5'>{dados?.titulo}</h1>
        </div>
        <div
          className='md:w-[80%] w-full h-[70%]'>
          <h3
            className='text-center lg:text-[18px] text-[16px] 
            flex items-center font-bold justify-center h-full px-5 '
          >{dados?.texto}</h3>
        </div>
  
      </div>
     </>
     
     };
    </section>
  );
};

