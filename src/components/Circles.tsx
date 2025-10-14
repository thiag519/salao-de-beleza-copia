
type Props= {
  countActive: number
}
export const Circles = ({countActive}: Props) => {
  
  return (
    <div className='flex items-center justify-center w-full h-[15%] lg:h-[5%] relative  '>
      <div 
        className='w-14 h-3 flex items-center justify-around' >
        <div
          style={{transition: 'ease-out 2s'}}
          
          className={`rounded-full 
            ${countActive  == 0? 
            'bg-[var(--color-logo)]' 
            : 'bg-[var(--color-dark)]'}
            w-3.5 h-3.5 `}
          >
        </div>
        <div 
          style={{transition: 'ease-out 2s'}}
          
          className={`rounded-full 
            ${countActive  == 1? 
            'bg-[var(--color-logo)]' 
            : 'bg-[var(--color-dark)]'}
            w-3.5 h-3.5 `}
          >
        </div>
        <div 
          style={{transition: 'ease-out 2s'}}
       
          className={`rounded-full 
            ${countActive  == 2? 
            'bg-[var(--color-logo)]' 
            : 'bg-[var(--color-dark)]'}
            w-3.5 h-3.5 `}
          >
        </div>
      </div>
    </div>
  )
}