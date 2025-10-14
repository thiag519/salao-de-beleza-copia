import { useActive } from "@/hooks/useActive";
import { Button2 } from "./Button2";
import Link from "next/link";
import { MenuLine } from "./MenuLine";

type Props = {
  dados: FormDataEntryValue[];
  valorTotal: number;
  phoneNumber: string;
  name: string
};

export const Modal = ({dados, valorTotal, phoneNumber, name}: Props) => {
  const {active, toggleActive} = useActive();
  const menssagem = `Olá, meu nome é ${name},\nGostaria de agendar ${
    dados.length > 1 ? "esses serviços" : "esse serviço"
  }:\n${dados.join("")}\nTotal  ${valorTotal.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  })}\n`;
  console.log(menssagem)
  return (
    <div
      className=" flex items-center justify-center w-[100dvw] text-center h-[100dvh] bg-black/80 absolute 
      top-0 left-0 right-0 z-20"
    >
      <div className=" bg-white w-4/5 min-h-2/5 md:w-[600px] flex items-center justify-center rounded-md flex-col ">
        <div className="absolute flex p-20 top-0 right-0 text-center">
          <button onClick={() => toggleActive()}>
            <MenuLine />
          </button>
        </div>
        <div className="  w-full h-full flex flex-col items-center justify-center">
          <div className="w-3/4">
            {dados.map((item, index) => (
              <div
                key={index}
                className="w-full  items-center flex justify-center my-1.5 hover:bg-[var(--color-highlight)]/30 border-b-2 
              border-[var(--color-highlight)]"
              >
                <p
                  className={`text-start w-full text-sm sm:text-md md:text-lg `}
                >
                  {item.toString()}
                </p>
              </div>
            ))}
            <div
              className="w-full flex justify-between items-center my-1.5 hover:bg-[var(--color-highlight)]/30 border-b-2 
              border-[var(--color-highlight)]"
            >
              <p className="text-start w-2/4">Total:</p>
              <p className="w-2/4 text-end">
                {valorTotal.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
          </div>
          <div className="mt-5 ">
            <Link
              target="_blank"
              href={`https://wa.me/${phoneNumber}?text=${encodeURI(menssagem)}`}
            >
              <Button2 name="Enviar" onClick={() => toggleActive()} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}