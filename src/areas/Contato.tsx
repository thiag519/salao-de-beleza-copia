import { Informacoes } from '@/components/Informacoes';
import { Map } from '@/components/Map';
import { RedeSociais } from '@/components/RedeSociais';
import { ContatoType } from '@/types/contatoType/ContatoType';
import { getDataContato } from '@/utils/getDataContato';
import { useEffect, useState } from 'react';

export const Contato = () => {
const [dados, setDados] = useState<ContatoType | null >(null);
   useEffect( () => {
      getDataContato().then(setDados).catch(console.error);
    }, []);

  return (
    <section 
      id="Contato"
      className="w-dvw bg-[var(--color-light)] flex-col
      flex items-center justify-between h-[100vh] overflow-hidden"
    >
      { dados &&
        <div key={dados?.id} className='w-full h-full flex flex-col justify-around items-center'>
          <div className=' w-full h-[21vh] bg-blue flex items-center justify-center'>
            <h1 
            className='md:text-4xl sm:text-3xl text-2xl text-center mt-23 p-1 z-10 bg-[var(--color-light)]' >
            {dados?.titulo}
            </h1>
          </div>
            <RedeSociais
              redeSociais={dados.redesocial}
            /> 
          <div className='w-full md:w-[80%] h-[30vh] bg-[var(--color-dark)] mt-3'>
            <Map/>
            {dados.mapa}
          </div>
            <Informacoes
              informacoes={dados.informacoes}
            /> 
        </div>
      } 
    </section>
  )
}