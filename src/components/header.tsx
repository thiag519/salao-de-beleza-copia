"use client";

import { Menu } from "./Menu";
import Image from "next/image";
import imag from "../../public/images/logo2.png";
import { MenuMobile } from "./MenuMobile";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const Header = () => {
  const [tamanho, setTamanho] = useState({
    largura: 0,
    altura: 0,
  });

  useEffect(() => {
    setTamanho({ largura: window.innerWidth, altura: window.innerHeight });
    const heandleResize = () => {
      window.addEventListener("resize", heandleResize);
    };
    return () => window.removeEventListener("resize", heandleResize);
  }, []);

  return (
    <header
      className={`w-dvw fixed left-0 shadow-md
        h-14 z-10 bg-[var(--color-light)] flex items-center justify-center`}
    >
      <div className="w-[80%] flex items-center justify-between ">
        <Logo />
        {tamanho.largura > 1000 ? <Menu /> : <MenuMobile />}
      </div>
      <div></div>
    </header>
  );
};
export default Header;
