import { Logo } from "@/components/Logo";
import { ProfissionalPacote } from "@/components/ProfissionalPacote";
import { ActiveProvider } from "@/context/ActiveContext";
import Link from "next/link";

export default async function PacotePrice({params,}:{params: Promise<{categoria: string; id: number}>}) {
  let {id, categoria} = await params;
  let cateG = (await params).categoria;
  try{
    categoria = decodeURIComponent(cateG);
  }catch{
    categoria = cateG;
  }

  return (
    <div className="w-full h-dvh content-center overflow-y-hidden sm:overflow-auto ">
      <div className="w-full h-14  flex content-center justify-center">
        <div className="w-4/5 h-14  flex items-center justify-between shadow-2xl px-3 fixed z-10 bg-white">
          <div>
            <h1>
              <Logo />
            </h1>
          </div>
          <div>
            <Link href={"/"}>
              <h1>voltar</h1>
            </Link>
          </div>
        </div>
      </div>
      <div className=" w-full h-dvh">
        <ActiveProvider>
          <ProfissionalPacote id={id} categoria={categoria} />
        </ActiveProvider>
      </div>
    </div>
  );
}
