import { useActive } from "@/hooks/useActive"

export const MenuLine = () => {
  const {active, toggleActive} = useActive();
  return (
     <div 
      style={{transition: 'ease-out 0.9s '}}
        className={` h-8  w-8 ${active? 'z-50 ': 'z-0'} flex flex-col gap-1.5 items-center cursor-pointer
        justify-center absolute` }
        onClick={() => toggleActive()}
      >
        <div 
          style={{transition: 'ease-out 0.5s '}}
          className={` h-[2px] w-7 bg-[var(--color-logo)] 
          ${active? 'rotate-45 absolute w-7 bg-white': '-rotate-[22.5] '} `}
        ></div>
        <div 
          style={{transition: 'ease-out  0.5s '}}
          className={` h-[2px] w-7 bg-[var(--color-logo)]  
          ${active? '-rotate-45 absolute w-7 bg-white': 'rotate-[22.5] '}`}
        ></div>
        <div 
          style={{transition: 'ease-out 0.5s '}}
          className={`bg-[var(--color-logo)] 
          ${active? 'w-0 h-0 bg-white': ' h-[2px] w-7'}`}
        ></div>
      </div>
  )
}