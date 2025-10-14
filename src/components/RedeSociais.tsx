import { RedeSocialType } from "@/types/contatoType/RedeSocialType"
import Image from "next/image"
import Link from "next/link"

type Props = {
  redeSociais: RedeSocialType[]
}

export const RedeSociais = ({redeSociais}: Props) => {

  return (
    <div className="h-[13vh]  w-full md:w-[80%] mx-16 flex items-center justify-center md:justify-around z-0">
      {redeSociais &&
        redeSociais.map((item, index) => (
            <Link key={index} target="_blank" href={`${item.link}`} >
              <div className={`flex  flex-row`}>
                <Image
                  className=""
                  src={item.icon}
                  alt={item.nome}
                  width={30}
                  height={30}
                />
                <div className="pt-0.5 mx-2">
                  <p>{item.nome}</p>
                </div>
              </div>
            </Link>
        ))}
    </div>
  );
}