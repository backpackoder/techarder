import { Metadata } from "next";
import { useState } from "react";

import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/nos-clients";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";

export const metadata: Metadata = {
  title: "Créer son site internet | Agence web TecHarder",
  description: "Créer son site internet professionnel avec TecHarder",
  // other metadata
};

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <Features />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Pricing />
      <Contact />
      {/* <Video /> */}
      {/* <Brands /> */}
      {/* <Blog /> */}
      <ScrollUp />
    </>
  );
}
