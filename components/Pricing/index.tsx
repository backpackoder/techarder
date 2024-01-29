import SectionTitle from "../Common/SectionTitle";
import { Drawings } from "./Drawings";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import { pricings } from "./utils/pricings";

const Pricing = () => {
  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Nos offres"
          paragraph="Du site vitrine au site e-commerce, nous avons la solution qu'il faut, pour tous les budgets."
          center
          width="665px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {pricings.map((pricing, index) => {
            return (
              <PricingBox
                key={index}
                packageName={pricing.packageName}
                price={pricing.price}
                subtitle={pricing.subtitle}
              >
                {pricing.offers.map((offer, index) => {
                  return <OfferList key={index} text={offer.text} />;
                })}
              </PricingBox>
            );
          })}
        </div>
      </div>

      <Drawings />
    </section>
  );
};

export default Pricing;
