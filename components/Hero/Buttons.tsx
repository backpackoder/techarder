import Link from "next/link";

export function Buttons() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
      <Link
        href="#form"
        className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
      >
        Prendre rendez-vous
      </Link>

      <Link
        href="#pricing"
        className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
      >
        Nos offres
      </Link>
    </div>
  );
}
