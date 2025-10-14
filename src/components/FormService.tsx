"use client"

import {FormEvent, useState } from "react"
import { TrabalhosType } from "@/types/servicosTypes/TrabalhosType"
import { Button2 } from "./Button2"
import { useActive } from "@/hooks/useActive"
import { Modal } from "./Modal"
import Link from "next/link"

type Props = {
  form: TrabalhosType[]
  phoneNumber: string
}

export const FormService = ({form, phoneNumber}:Props) => {
  const [data, setData] = useState<FormDataEntryValue[]>();
  const {active, toggleActive} = useActive()
  const [ name, setName] = useState('')

  const handlerFormData = async (e: FormEvent<HTMLFormElement>) => { 
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const query = formData.getAll('nome');
    if(query.length > 0) {
      setData(query);
      toggleActive();
    }else{
      alert('Escolha um serviço, ou volte no botão na parte superior a direita para continuar sua busca')
    }
  }
    let valores: number[] = [];
    let valorT: number = 0;
    if (data) {
      for (let i = 0; i < data.length; i++) {
        const elementInFormDataEntryValue = data[i];
        let elementString = elementInFormDataEntryValue.toString();
        let prices: string;
        if (elementString.includes("R$")) {
          let minString = elementString.slice(-9, -1);
          console.log(minString);
          prices = minString.replace(/\D+/g, '').slice(0, -2);
          prices && valores.push(Number(prices));
          console.log(prices);
        }
        if(valores)valorT += valores[i];
      }
       console.log(data.join("\n"));
       console.log(valorT);
    }
  return (
    <div className="flex items-center justify-center w-full ">
      <form
        className="w-full h-full md:w-[700px]  flex flex-col justify-center p-2 
        md:p-5 rounded-xl shadow-2xl"
        onSubmit={handlerFormData}
      >
        <h1 className="w-full hidden sm:block py-2 md:py-5 text-center">
          Escolha e agende já
        </h1>
        <div
          className="w-full flex items-center justify-center my-5 text-white
          rounded-lg
          outline-0
          -outline-offset-1
          outline-gray-600 
          has-[input:focus-within]:outline-0
          has-[input:focus-within]:-outline-offset-2
          has-[input:focus-within]:outline-[var(--color-highlight)]
          has-[input:focus-within]:bg-[var(--color-highlight)]"
        >
          <input
            style={{
              fontFamily: "var(--font-secondary)",
            }}
            onChange={(e) => setName(e.target.value)}
            maxLength={20}
            required
            className="w-full border-0 rounded-lg h-12 bg-[var(--color-dark)]/40 focus:outline-none
             placeholder:text-white pl-5 text-[16px] "
            type="text"
            placeholder="Digite seu nome"
            autoComplete="off"
            autoFocus
          />
        </div>

        {form.map((item, index) => (
          <div
            key={index}
            className={`flex justify-between my-1 hover:bg-[var(--color-highlight)]/30 border-b-2 border-[var(--color-highlight)]
             `}
          >
            <input
              value={`${item.nome}  ${item.valor.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
              })}\n`}
              type="checkbox"
              name={`nome`}
              id={`algo-${index.toString()}`}
            />
            <label
              className=" flex text-start w-full pl-2 text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px]"
              htmlFor={`algo-${index.toString()}`}
            >
              <p>{item.nome}</p>
            </label>
            <label
              className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] "
              htmlFor={`algo-${index.toString()}`}
            >
              {item.valor.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
              })}
            </label>
          </div>
        ))}
        <div className="w-full my-6 items-center justify-center flex">
          <Button2
            name="Enviar"
            onClick={() => {
              handlerFormData;
            }}
          />
        </div>
        <Link
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          className="w-full text-center p-2"
        >
          <p className="text-[10px] underline underline-offset-2 hover:text-blue-500">
            Tem alguma dúvida? Clique aqui e fale conosco no WhatsApp!
          </p>
        </Link>
      </form>
      {active && data && (
        <Modal
          valorTotal={valorT}
          dados={data}
          phoneNumber={phoneNumber}
          name={name}
        />
      )}
    </div>
  );
}