import React from "react";

export default function OtherProjects() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-24 md:px-6">
      <section className="px-12">
        <div className="relative mx-auto max-w-lg">
          <input
            id="article-01"
            type="radio"
            name="slider"
            className="peer/01 sr-only"
          />
          <input
            id="article-02"
            type="radio"
            name="slider"
            className="peer/02 sr-only"
          />
          <input
            id="article-03"
            type="radio"
            name="slider"
            className="peer/03 sr-only"
            checked
          />
          <input
            id="article-04"
            type="radio"
            name="slider"
            className="peer/04 sr-only"
          />
          <input
            id="article-05"
            type="radio"
            name="slider"
            className="peer/05 sr-only"
          />

          <div
            className="
                        absolute inset-0 z-20 scale-[67.5%] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                        peer-checked/01:relative
                        peer-checked/01:z-50
                        peer-checked/02:z-40
                        peer-checked/03:z-30
                        peer-checked/01:translate-x-0
                        peer-checked/02:-translate-x-20
                        peer-checked/03:-translate-x-40
                        peer-checked/04:-translate-x-40
                        peer-checked/05:-translate-x-40
                        peer-checked/01:scale-100
                        peer-checked/02:scale-[83.75%]
                        peer-checked/04:opacity-0
                        peer-checked/01:[&>label]:pointer-events-none
                        peer-focus-visible/01:[&_article]:ring
                        peer-focus-visible/01:[&_article]:ring-indigo-300
                    "
          >
            <label className="absolute inset-0" htmlFor="article-01">
              <span className="sr-only">Focus on the big picture</span>
            </label>
            <article className="rounded-lg bg-white p-6 shadow-2xl">
              <header className="mb-2">
                <img
                  className="mb-3 inline-flex rounded-full shadow"
                  src="./icon.svg"
                  width="44"
                  height="44"
                  alt="Icon"
                />
                <h1 className="text-xl font-bold text-slate-900">
                  Focus on the big picture
                </h1>
              </header>
              <div className="mb-2 space-y-4 text-sm leading-relaxed text-slate-500">
                <p>
                  Many desktop publishing packages and web page editors now use
                  Pinky as their default model text, and a search for more
                  variants will uncover many web sites still in their infancy.
                </p>
                <p>
                  All the generators tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet.
                </p>
              </div>
              <footer className="text-right">
                <a
                  className="text-sm font-medium text-indigo-500 hover:underline"
                  href="#0"
                >
                  Read more
                </a>
              </footer>
            </article>
          </div>

          <div
            className="
                        absolute inset-0 z-20 scale-[67.5%] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                        peer-checked/02:relative
                        peer-checked/01:z-40
                        peer-checked/02:z-50
                        peer-checked/03:z-40
                        peer-checked/04:z-30
                        peer-checked/01:translate-x-20
                        peer-checked/02:translate-x-0
                        peer-checked/03:-translate-x-20
                        peer-checked/04:-translate-x-40
                        peer-checked/05:-translate-x-40
                        peer-checked/01:scale-[83.75%]
                        peer-checked/02:scale-100
                        peer-checked/03:scale-[83.75%]
                        peer-checked/05:opacity-0
                        peer-checked/02:[&>label]:pointer-events-none
                        peer-focus-visible/02:[&_article]:ring
                        peer-focus-visible/02:[&_article]:ring-indigo-300
                    "
          >
            <label className="absolute inset-0" htmlFor="article-02">
              <span className="sr-only">Focus on the big picture</span>
            </label>
            <article className="rounded-lg bg-white p-6 shadow-2xl">
              <header className="mb-2">
                <img
                  className="mb-3 inline-flex rounded-full shadow"
                  src="./icon.svg"
                  width="44"
                  height="44"
                  alt="Icon"
                />
                <h1 className="text-xl font-bold text-slate-900">
                  Focus on the big picture
                </h1>
              </header>
              <div className="mb-2 space-y-4 text-sm leading-relaxed text-slate-500">
                <p>
                  Many desktop publishing packages and web page editors now use
                  Pinky as their default model text, and a search for more
                  variants will uncover many web sites still in their infancy.
                </p>
                <p>
                  All the generators tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet.
                </p>
              </div>
              <footer className="text-right">
                <a
                  className="text-sm font-medium text-indigo-500 hover:underline"
                  href="#0"
                >
                  Read more
                </a>
              </footer>
            </article>
          </div>

          <div
            className="
                        absolute inset-0 z-20 scale-[67.5%] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                        peer-checked/03:relative
                        peer-checked/01:z-30
                        peer-checked/02:z-40
                        peer-checked/03:z-50
                        peer-checked/04:z-40
                        peer-checked/05:z-30
                        peer-checked/01:translate-x-40
                        peer-checked/02:translate-x-20
                        peer-checked/03:translate-x-0
                        peer-checked/04:-translate-x-20
                        peer-checked/05:-translate-x-40
                        peer-checked/02:scale-[83.75%]
                        peer-checked/03:scale-100
                        peer-checked/04:scale-[83.75%]
                        peer-checked/03:[&>label]:pointer-events-none
                        peer-focus-visible/03:[&_article]:ring
                        peer-focus-visible/03:[&_article]:ring-indigo-300
                    "
          >
            <label className="absolute inset-0" htmlFor="article-03">
              <span className="sr-only">Focus on the big picture</span>
            </label>
            <article className="rounded-lg bg-white p-6 shadow-2xl">
              <header className="mb-2">
                <img
                  className="mb-3 inline-flex rounded-full shadow"
                  src="./icon.svg"
                  width="44"
                  height="44"
                  alt="Icon"
                />
                <h1 className="text-xl font-bold text-slate-900">
                  Focus on the big picture
                </h1>
              </header>
              <div className="mb-2 space-y-4 text-sm leading-relaxed text-slate-500">
                <p>
                  Many desktop publishing packages and web page editors now use
                  Pinky as their default model text, and a search for more
                  variants will uncover many web sites still in their infancy.
                </p>
                <p>
                  All the generators tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet.
                </p>
              </div>
              <footer className="text-right">
                <a
                  className="text-sm font-medium text-indigo-500 hover:underline"
                  href="#0"
                >
                  Read more
                </a>
              </footer>
            </article>
          </div>

          <div
            className="
                        absolute inset-0 z-20 scale-[67.5%] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                        peer-checked/04:relative
                        peer-checked/02:z-30

                        peer-checked/03:z-40
                        peer-checked/04:z-50

                        peer-checked/05:z-40
                        peer-checked/01:translate-x-40

                        peer-checked/02:translate-x-40
                        peer-checked/03:translate-x-20
                        peer-checked/04:translate-x-0

                        peer-checked/05:-translate-x-20
                        peer-checked/03:scale-[83.75%]
                        peer-checked/04:scale-100
                        peer-checked/05:scale-[83.75%]
                        peer-checked/01:opacity-0

                        peer-checked/04:[&>label]:pointer-events-none
                        peer-focus-visible/04:[&_article]:ring
                        peer-focus-visible/04:[&_article]:ring-indigo-300
                    "
          >
            <label className="absolute inset-0" htmlFor="article-04">
              <span className="sr-only">Focus on the big picture</span>
            </label>
            <article className="rounded-lg bg-white p-6 shadow-2xl">
              <header className="mb-2">
                <img
                  className="mb-3 inline-flex rounded-full shadow"
                  src="./icon.svg"
                  width="44"
                  height="44"
                  alt="Icon"
                />
                <h1 className="text-xl font-bold text-slate-900">
                  Focus on the big picture
                </h1>
              </header>
              <div className="mb-2 space-y-4 text-sm leading-relaxed text-slate-500">
                <p>
                  Many desktop publishing packages and web page editors now use
                  Pinky as their default model text, and a search for more
                  variants will uncover many web sites still in their infancy.
                </p>
                <p>
                  All the generators tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet.
                </p>
              </div>
              <footer className="text-right">
                <a
                  className="text-sm font-medium text-indigo-500 hover:underline"
                  href="#0"
                >
                  Read more
                </a>
              </footer>
            </article>
          </div>

          <div
            className="
                        absolute inset-0 z-20 scale-[67.5%] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                        peer-checked/05:relative
                        peer-checked/03:z-30
                        peer-checked/04:z-40
                        peer-checked/05:z-50
                        peer-checked/01:translate-x-40
                        peer-checked/02:translate-x-40
                        peer-checked/03:translate-x-40
                        peer-checked/04:translate-x-20
                        peer-checked/05:translate-x-0
                        peer-checked/04:scale-[83.75%]
                        peer-checked/05:scale-100
                        peer-checked/02:opacity-0
                        peer-checked/05:[&>label]:pointer-events-none
                        peer-focus-visible/05:[&_article]:ring
                        peer-focus-visible/05:[&_article]:ring-indigo-300
                    "
          >
            <label className="absolute inset-0" htmlFor="article-05">
              <span className="sr-only">Focus on the big picture</span>
            </label>
            <article className="rounded-lg bg-white p-6 shadow-2xl">
              <header className="mb-2">
                <img
                  className="mb-3 inline-flex rounded-full shadow"
                  src="./icon.svg"
                  width="44"
                  height="44"
                  alt="Icon"
                />
                <h1 className="text-xl font-bold text-slate-900">
                  Focus on the big picture
                </h1>
              </header>
              <div className="mb-2 space-y-4 text-sm leading-relaxed text-slate-500">
                <p>
                  Many desktop publishing packages and web page editors now use
                  Pinky as their default model text, and a search for more
                  variants will uncover many web sites still in their infancy.
                </p>
                <p>
                  All the generators tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet.
                </p>
              </div>
              <footer className="text-right">
                <a
                  className="text-sm font-medium text-indigo-500 hover:underline"
                  href="#0"
                >
                  Read more
                </a>
              </footer>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
