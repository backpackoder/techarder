"use client";

import Image from "next/image";
import Link from "next/link";
import { Terms } from "./Terms";
import { UsefulLinks } from "./UsefulLinks";
import { SocialMediaBtns } from "./SocialMediaBtns";
import { Catchphrase } from "./Catchphrase";
import { SupportAndHelp } from "./SupportAndHelp";
import { Drawings } from "./Drawings";
import { KnowMore } from "./KnowMore";

const Footer = () => {
  return (
    <footer
      className="wow fadeInUp relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24"
      data-wow-delay=".1s"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
            <div className="mb-12 max-w-[360px] lg:mb-16">
              <Link href="/" className="mb-8 inline-block">
                <Image
                  src="/images/logo/logo_techarder.png"
                  alt="logo"
                  className="w-full"
                  width={50}
                  height={50}
                />
              </Link>

              <Catchphrase />

              {/* <SocialMediaBtns /> */}
            </div>
          </div>

          <UsefulLinks />
          <KnowMore />
          {/* <Terms /> */}
          <SupportAndHelp />
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>

        <div className="py-8">
          <p className="text-center text-base text-body-color dark:text-white">
            © 2024 TecHarder, tous droits réservés
          </p>
        </div>
      </div>

      <Drawings />
    </footer>
  );
};

export default Footer;
