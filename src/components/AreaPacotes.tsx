import { AreaPacotesType } from "@/types/pacotesTypes/AreaPacotesType"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./Button"

type Props = {
  pacotes: AreaPacotesType[]
  count: number
}

export const AreaPacotes = ({pacotes, count}:Props ) => { 
  let id;
  let categoria;
  return (
    <div
      style={{
        transition: "ease-out 0.9s ",
        width: `calc(${pacotes.length} * 350px)`,
        /*marginLeft: "350px", //utilizar caso tenha um numero par de pacotes, para centralizar*/
        paddingLeft: `${count >= 0 && `calc(${count} * 700px)`}`,
        paddingRight: `${count <= 0 && `calc(${count} * (-700px))`}`,
      }}
      className={` flex items-center justify-center h-full lg:ml-0`}
    >
      {pacotes &&
        pacotes.map((item, index) => (
          <div
            key={index}
            style={{ transition: "ease-out 0.9s " }}
            className="w-xs h-[90%] md:h-[80%] flex flex-col items-center 
           justify-between mx-10 shadow-2xl"
          >
            <h2 className="text-xl font-bold">{item.categoria}</h2>
            <p className="text-[11px] text-center font-bold w-[90%] h-[40%] min-h-[150px] pt-5 ">
              {item.descricao}
            </p>
            <p className="hidden">
              {(id = index + 1)}
              {(categoria = item.categoria)}
            </p>
            <Link
              href={`/pacote/${id}/${categoria}`}
              className="w-[270px] h-[60%] min-h-[200px]  bg-[var(--color-light)] relative flex
            items-center justify-center"
            >
              <Image
                src={item.image}
                fill
                sizes="270px"
                alt="serviços"
                placeholder="blur"
                blurDataURL="/tiny-blur.jpg"
                className=" bg-cover object-cover touch-auto"
              />
              <Button />
            </Link>
          </div>
        ))}
    </div>
  );
}
