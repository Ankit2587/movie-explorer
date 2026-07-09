import { Link } from "react-router-dom";
import {
  FaFilm,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/10 mt-24">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center">

                <FaFilm className="text-black text-xl"/>

              </div>

              <h2 className="text-3xl font-black tracking-tight">

                MovieExplorer

              </h2>

            </div>

            <p className="text-zinc-500 mt-6 leading-8">

              A modern movie discovery platform built with
              React, Tailwind CSS and TMDB API.
              Browse trending movies, trailers,
              ratings and cast information.

            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="text-xl font-bold mb-6">

              Navigation

            </h3>

            <div className="flex flex-col gap-4">

              <Link to="/" className="text-zinc-400 hover:text-white transition">

                Home

              </Link>

              <Link to="/movies" className="text-zinc-400 hover:text-white transition">

                Movies

              </Link>

              <Link to="/about" className="text-zinc-400 hover:text-white transition">

                About

              </Link>

              <Link to="/contact" className="text-zinc-400 hover:text-white transition">

                Contact

              </Link>

            </div>

          </div>

          {/* Technologies */}

          <div>

            <h3 className="text-xl font-bold mb-6">

              Built With

            </h3>

            <div className="space-y-4 text-zinc-400">

              <p>⚛ React.js</p>

              <p>⚡ Vite</p>

              <p>🎨 Tailwind CSS</p>

              <p>🎬 TMDB API</p>

              <p>🛣 React Router</p>

            </div>

          </div>

          {/* Connect */}

          <div>

            <h3 className="text-xl font-bold mb-6">

              Connect

            </h3>

            <div className="flex gap-4">

              <a
                href="https://github.com/Ankit2587"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 hover:bg-white hover:text-black transition flex items-center justify-center"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 hover:bg-white hover:text-black transition flex items-center justify-center"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 hover:bg-white hover:text-black transition flex items-center justify-center"
              >
                <FaInstagram />
              </a>

            </div>

            <div className="mt-8">

              <p className="text-zinc-500 text-sm">

                Powered by

              </p>

              <h4 className="text-lg font-semibold mt-2">

                TMDB API

              </h4>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-zinc-500 text-center">

            © {year} MovieExplorer. All Rights Reserved.

          </p>

          <p className="flex items-center gap-2 text-zinc-500">

            Made with

            <FaHeart className="text-red-500"/>

            by <span className="text-white font-semibold">Ankit</span>

          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;