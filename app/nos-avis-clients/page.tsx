import Breadcrumb from "@/components/Common/Breadcrumb";
import Testimonials from "@/components/Testimonials";

export default function OurTestimonials() {
  return (
    <>
      <Breadcrumb
        pageName="Avis clients"
        description="Voici ce que nos clients pensent de nous"
      />

      <Testimonials />
    </>
  );
}
