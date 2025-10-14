import img from "@/components/icons/icons8-whatsapp-48.png";
import Image from "next/image";

type Props = {
  name: string
  onClick: () => void
}

export const Button2 = ({name, onClick}:Props) => {
  return (
    <button
      onClick={onClick}
      className=" w-25 h-10 bg-[var(--color-logo)] text-white flex text-[15px] text-center rounded-3xl gap-1.5
      items-center px-3 shadow-2xl  "
    >{name}
      <Image src={img} alt="" className=" w-6 h-6" />
    </button>
  );
};
