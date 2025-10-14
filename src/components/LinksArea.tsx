import Link from "next/link";
import titles from "../../public/data/data.json";

export const LinksArea = () => {
  return (
    <div className="flex flex-col">
      {titles.map((item, index) => (
        <Link key={index} href={`#${item.titulo}`}><p className="text-[11px] lg:text-[13px] underline py-1 md:mx-4 lg:mx-0">{item.titulo == 'Império da Beleza'? 'Início': item.titulo}</p></Link>
      ))}
    </div>
  );
};
