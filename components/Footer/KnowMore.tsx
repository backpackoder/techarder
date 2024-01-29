export function KnowMore() {
  return (
    <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
      <div className="mb-12 lg:mb-16">
        <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
          En savoir plus
        </h2>

        <ul>
          <li>
            <a
              href="/nos-avis"
              className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
            >
              Nos avis clients
            </a>
          </li>

          {/* <li>
            <a
              href="/nos-clients"
              className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
            >
              Nos clients
            </a>
          </li> */}

          <li>
            <a
              href="/nos-offres"
              className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
            >
              Nos offres
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
