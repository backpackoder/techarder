export function UsefulLinks() {
  return (
    <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
      <div className="mb-12 lg:mb-16">
        <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
          Liens utiles
        </h2>

        <ul>
          <li>
            <a
              href="/"
              className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
            >
              Menu
            </a>
          </li>

          <li>
            <a
              href="/a-propos"
              className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
            >
              À propos
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
