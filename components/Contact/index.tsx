"use client";

import { useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const searchParams = useSearchParams().get("pack");
  const [packChosen, setPackChosen] = useState(searchParams ?? "");
  const [state, handleSubmit] = useForm("mnqejrel");
  if (state.succeeded) {
    return (
      <div className="my-8 text-center">Votre message à bien été envoyé.</div>
    );
  }

  return (
    <section id="form" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Contactez-nous
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Nous sommes à votre disposition pour répondre à toutes vos
                questions.
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center justify-center gap-8"
              >
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Nom
                      </label>
                      <input
                        type="text"
                        placeholder="Votre nom"
                        id="name"
                        name="name"
                        className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        required
                      />
                      <ValidationError
                        prefix="Nom"
                        field="name"
                        errors={state.errors}
                      />
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Votre email"
                        className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        required
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="phone"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Votre téléphone"
                        className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        required
                      />
                      <ValidationError
                        prefix="Phone"
                        field="phone"
                        errors={state.errors}
                      />
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Écrivez votre message ici"
                        className="w-full resize-none rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        required
                      ></textarea>
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />
                    </div>
                  </div>

                  <div className="flex w-full flex-col gap-2 px-4">
                    <h5 className="text-md mb-3 block font-medium text-dark dark:text-white">
                      Pack choisi
                    </h5>

                    <div className="flex flex-wrap items-center justify-center gap-6">
                      <PackChosen
                        pack="Indécis"
                        packChosen={packChosen}
                        setter={setPackChosen}
                      />
                      <PackChosen
                        pack="Pack simple"
                        packChosen={packChosen}
                        setter={setPackChosen}
                      />
                      <PackChosen
                        pack="Pack avancé"
                        packChosen={packChosen}
                        setter={setPackChosen}
                      />
                      <PackChosen
                        pack="Pack pro"
                        packChosen={packChosen}
                        setter={setPackChosen}
                      />
                      <PackChosen
                        pack="Pack premium"
                        packChosen={packChosen}
                        setter={setPackChosen}
                      />

                      <ValidationError
                        prefix="Pack"
                        field="pack"
                        errors={state.errors}
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PackChosen({
  pack,
  packChosen,
  setter,
}: {
  pack: string;
  packChosen: string;
  setter: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="flex gap-2">
      <input
        type="radio"
        id={pack.toLowerCase()}
        name="pack"
        value={pack.toLowerCase()}
        checked={pack.toLowerCase() === packChosen.toLowerCase()}
        onChange={(e) => setter(e.target.value)}
      />
      <label htmlFor={pack.toLowerCase()}>{pack}</label>
    </div>
  );
}
