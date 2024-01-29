import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-square max-w-[500px] rounded-md text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/section-two.png"
                alt="about image"
                fill
                className="rounded-md"
              />
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <SectionTitle
              title="Optimisation de votre présence en ligne"
              paragraph="Après avoir mis votre site web en ligne, nous pouvons vous aider à optimiser votre présence en ligne à l'aide de divers outils et stratégies."
              mb="44px"
            />

            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Google ads
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Passez devant vos concurrents en utilisant Google Ads. Nous
                  créons des campagnes publicitaires qui vous apporteront des
                  clients.
                </p>
              </div>

              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Réseaux sociaux
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Nous publions du contenu sur vos réseaux sociaux afin de créer
                  une communauté autour de votre marque et de vos produits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
