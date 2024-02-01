import Breadcrumb from "@/components/Common/Breadcrumb";
import Pricing from "@/components/Pricing";

export default function OurOffers() {
  return (
    <>
      <Breadcrumb
        pageName="Nos offres"
        description="Découvrez nos offres de services pour les particuliers et les professionnels."
      />
      <Pricing />
    </>
  );
}
