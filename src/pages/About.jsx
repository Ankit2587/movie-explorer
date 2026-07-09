import {
  FaFilm,
  FaReact,
  FaDatabase,
  FaCode,
  FaPlayCircle,
} from "react-icons/fa";

function About() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">

      {/* Hero */}

      <section className="pt-36 pb-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl">

            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">

              <FaFilm />

              About MovieExplorer

            </span>

            <h1 className="mt-8 text-6xl md:text-7xl font-black tracking-tight">

              Discover Movies Like Never Before

            </h1>

            <p className="mt-8 text-zinc-400 text-lg leading-8">

              MovieExplorer is a modern movie discovery platform built with
              React, Vite and Tailwind CSS. Browse trending movies,
              watch trailers, explore cast members and view complete
              movie information powered by TMDB.

            </p>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

              <FaFilm className="text-4xl mb-6" />

              <h3 className="text-2xl font-bold">

                Movie Library

              </h3>

              <p className="mt-4 text-zinc-400 leading-7">

                Explore thousands of trending and popular movies.

              </p>

            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

              <FaPlayCircle className="text-4xl mb-6" />

              <h3 className="text-2xl font-bold">

                Official Trailers

              </h3>

              <p className="mt-4 text-zinc-400 leading-7">

                Watch official YouTube trailers directly inside the app.

              </p>

            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

              <FaDatabase className="text-4xl mb-6" />

              <h3 className="text-2xl font-bold">

                TMDB API

              </h3>

              <p className="mt-4 text-zinc-400 leading-7">

                Real-time movie data including ratings, cast and posters.

              </p>

            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

              <FaReact className="text-4xl mb-6" />

              <h3 className="text-2xl font-bold">

                Modern Stack

              </h3>

              <p className="mt-4 text-zinc-400 leading-7">

                Built with React, Vite and Tailwind CSS.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Technologies */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-12">

            <h2 className="text-4xl font-black">

              Technologies Used

            </h2>

            <div className="grid md:grid-cols-2 gap-8 mt-12">

              <div className="flex items-start gap-5">

                <FaCode className="text-3xl mt-1" />

                <div>

                  <h3 className="text-2xl font-bold">

                    Frontend

                  </h3>

                  <p className="text-zinc-400 mt-3 leading-7">

                    React.js, Vite, Tailwind CSS,
                    React Router and React Icons.

                  </p>

                </div>

              </div>

              <div className="flex items-start gap-5">

                <FaDatabase className="text-3xl mt-1" />

                <div>

                  <h3 className="text-2xl font-bold">

                    API

                  </h3>

                  <p className="text-zinc-400 mt-3 leading-7">

                    The Movie Database (TMDB) API provides
                    movie information, trailers, ratings,
                    cast and posters.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default About;