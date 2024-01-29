import Link from "next/link";
import { Drawings } from "./Drawings";

function PricingBox({
  price,
  packageName,
  subtitle,
  children,
}: {
  price: string;
  packageName: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full">
      <div
        className="wow fadeInUp relative z-10 flex w-full flex-col justify-between gap-4 rounded-sm bg-white px-8 py-10 shadow-three hover:shadow-one dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark"
        data-wow-delay=".1s"
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center justify-between gap-2 text-center">
            <h3 className="text-2xl font-bold text-dark dark:text-white">
              {packageName}
            </h3>
            <h4 className="price text-3xl font-bold text-black dark:text-white">
              <span className="amount">{price}</span>
            </h4>
          </div>

          <p className="text-center text-base text-body-color">{subtitle}</p>

          <div>{children}</div>
        </div>

        <div className="mb-8 border-b border-body-color border-opacity-10 pb-8 uppercase dark:border-white dark:border-opacity-10">
          <Link
            href={`/nous-contacter?pack=${packageName.toLowerCase()}`}
            className="flex w-full items-center justify-center rounded-sm bg-primary p-3 text-sm font-semibold uppercase text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
          >
            Je veux cette offre
          </Link>
        </div>

        <Drawings />
      </div>
    </div>
  );
}

export default PricingBox;
