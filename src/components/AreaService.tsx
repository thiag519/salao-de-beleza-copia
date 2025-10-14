import { AreaServiceType } from "@/types/servicosTypes/AreaServiceType"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./Button"

type Props = {
  servicos: AreaServiceType[]
  count: number 
}

export const AreaService = ({servicos, count}:Props ) => {
  let id;
  let categoria;
  return (
    <div
      style={{
        transition: "ease-out 1s ",
        marginLeft: "350PX", //utilizar caso tenha um numero par de serviços, para centralizar
        width: `calc(${servicos.length} * 350px)`,
        paddingLeft: `${count >= 0 && `calc(${count} * 700px)`}`,
        paddingRight: `${count <= 0 && `calc(${count} * (-700px))`}`,
      }}
      className={` h-full flex items-center justify-center `}
    >
      {servicos &&
        servicos.map((item, index) => (
          <div
            style={{ transition: "ease-out 0.9s " }}
            key={index}
            className="w-xs h-[90%] md:h-[80%] flex flex-col items-center
            justify-between mx-10 shadow-2xl "
          >
            <h2 className="text-xl font-bold">{item.categoria}</h2>
            <p className=" hidden">
              {(id = index + 1)}
              {(categoria = item.categoria)}
            </p>
            <div
              className="w-[270px] h-[35%] min-h-[150px] px-5 relative flex items-center justify-center 
            text-center text-[13px]"
            >
              <p>{item.descricao}</p>
            </div>
            <Link
              href={`/service/${id}/${categoria}`}
              className="w-[270px] h-[65%] min-h-[200px] bg-[var(--color-dark)] relative flex items-center justify-center"
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
/*
Nome e Instagram do profissional (opcional)
<h3>{item.nome}</h3>
  {item.instagram && (
    <Link href={item.instagram.link} target="_blank">
      <div className="flex w-full flex-row ">
        <div>
          <Image
            src={item.instagram.icon}
            alt="instagram"
            width={21}
             height={21}
          />
        </div>
        <div>
          <p className="text-sm px-2 italic">
            {item.instagram.link.slice(
              26,
              item.instagram.link.length
             )}
          </p>
        </div>
      </div>
    </Link>
  )}
*/