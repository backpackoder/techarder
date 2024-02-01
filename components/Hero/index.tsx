import Image from "next/image";
import { Buttons } from "./Buttons";
import { Drawings } from "./Drawings";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="flex w-full gap-4 px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[800px] text-center"
              data-wow-delay=".2s"
            >
              <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Il est temps d{"'"}augmenter votre visibilité sur internet
              </h1>
              <p className="mb-12 text-base !leading-relaxed sm:text-lg md:text-xl">
                Avec <span className="font-bold">TecHarder</span>, obtenez votre
                site web vitrine, e-commerce ou blog. Nous vous aidons à mettre
                en place une stratégie digitale efficace pour atteindre vos
                objectifs.
              </p>

              <Buttons />
            </div>
          </div>
        </div>
      </div>

      <Drawings />

      <Image
        src="/images/hero/hero.jpg"
        alt="logo"
        width={800}
        height={1}
        objectFit="cover"
        className="absolute left-0 top-0 -z-10 h-full w-full object-cover brightness-[0.35]"
      />
    </section>
  );
};

export default Hero;
