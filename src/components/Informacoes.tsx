import { InformacoesType } from "@/types/contatoType/InformacoesType";
import Image from "next/image";
import Link from "next/link";
import { LinksArea } from "./LinksArea";


type Props = {
  informacoes: InformacoesType[]
}

export const Informacoes = ({informacoes}: Props) => {

  return (
    <div
      className="h-[36vh] w-full bg-[var(--color-logo)] text-white/40 pt-2 overflow-hidden
        flex md:items-center items-start justify-between gap-2 md:gap-1 flex-col px-2"
    >
      <div
        className={`flex w-full md:w-[80%] h-[80%] items-start gap-1 sm:gap-2 flex-col justify-center 
            sm:flex-wrap 
            lg:flex-nowrap`}
      >
        {informacoes &&
          informacoes.map((item, index) => (
            <div key={index} className="flex text-center ">
              <div className=" sm:w-[24px] sm:h-[24px] w-[20px] h-[20px]">
                <Image src={item.icon} alt={item.info} width={14} height={14} />
              </div>
              <Link href={`${item.link}`} target="_blank">
                <p className="text-[11px] sm:text[10px] md:text-[11px] lg:text-[13px] ">
                  {item.info}
                </p>
              </Link>
            </div>
          ))}
        <div
          className={`flex w-2/4 md:w-[80%] h-[60%] items-start flex-col justify-center 
            lg:flex-nowrap`}
        >
          <LinksArea />
        </div>
      </div>
      <div className="w-full text-center flex h-[20%] items-center justify-center">
        <p className="text-[9px] sm:text-[10px] md:text-[11px] lg:text-[13px] text-white/45 ">
          Copyright: © 2025 Beleza. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}