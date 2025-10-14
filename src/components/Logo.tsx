import Image from "next/image";
import imag from "../../public/images/logo2.png";

export const Logo = () => {
  return (
    <div
      className="bg-black  md:w-13 md:h-13  w-11 h-11 rounded-full 
      flex items-center justify-center"
    >
    </div>
  );
};
/* 
<Image
        src={""}
        alt="logo"
        quality={75}
        priority
        placeholder="blur"
        blurDataURL="/tiny-blur.jpg"
        className=" bg-cover touch-auto"
      />
*/