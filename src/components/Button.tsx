import img from '@/components/icons/icons8-whatsapp-48.png'
import Image from 'next/image'

export const Button = () => {
  return (
    <button className=" w-30 h-10 bg-[var(--color-logo)] text-white flex text-[13px] rounded-3xl gap-1.5
    items-center px-1.5 mt-5  absolute -bottom-5 shadow-2xl  " >
      <Image src={img} alt="" className=" w-6 h-6"/>Clique aqui!
    </button>
  )
}