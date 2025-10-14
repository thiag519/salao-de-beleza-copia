import { ImageDescription } from '@/types/ImageDescription';
import Image from 'next/image';

interface imagens  {
  countSlide: number
  imagens: ImageDescription[]
}

export const ImageAndDescription = ({countSlide, imagens}: imagens) => {

  return (
    <div
      className="flex justify-center items-center overflow-hidden h-[80vh] lg:h-[100vh]"
      style={{ height: "", width: `calc(${imagens.length} * 100dvw)` }}
    >
      {imagens &&
        imagens.map((item, index) => (
          <div
            key={index}
            style={{
              left: `calc( ${countSlide}* (-100dvw))`,
              transition: "ease-out 1s",
            }}
            className={`w-dvw h-[80vh]  lg:h-[100%]
             md:w-[80%] lg:w-[100vw]
             flex justify-center items-center relative lg:bg-transparent bg-[var(--color-dark)]`}
          >
            <Image
              src={item.imagem}
              quality={70}
              priority={index === 0 ? true : false}
              loading={`${index == 0 ? "eager" : "lazy"}`}
              placeholder="blur"
              blurDataURL="/tiny-blur.jpg"
              alt="imagens de destaque"
              fill
              sizes=""
              className="lg:object-cover bg-cover object-cover bg-center touch-auto"
            />
            <div
              className={`
                sm:h-50 md:h-60 h-40 bg-white/50 font-[var(--font-destac)] 
                md:text-6xl lg:w-full 
                sm:text-5xl text-4xl text-center flex justify-center items-center drop-shadow-2xl
                drop-shadow-stone-800 w-dvw
            `}
            >
              {item.descricao}
            </div>
          </div>
        ))}
    </div>
  );
};