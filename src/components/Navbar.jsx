import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FaFilm,
  FaBars,
  FaTimes,
  FaSearch,
} from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Movies", path: "/movies" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      <div className="max-w-7xl mx-auto px-6 pt-5">

        <nav className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl">

          <div className="h-16 flex items-center justify-between px-6">

            {/* Logo */}

            <Link
              to="/"
              className="flex items-center gap-3"
            >

              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">

                <FaFilm className="text-black text-lg" />

              </div>

              <span className="text-2xl font-bold tracking-tight">

                MovieExplorer

              </span>

            </Link>

            {/* Desktop Navigation */}

            <div className="hidden lg:flex items-center gap-10">

              {links.map((link) => (

                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative transition duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-zinc-400 hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}

                      {isActive && (

                        <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-white rounded-full"></span>

                      )}

                    </>
                  )}
                </NavLink>

              ))}

            </div>

            {/* Right Side */}

            <div className="hidden lg:flex items-center gap-4">

              <button className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center">

                <FaSearch />

              </button>

              <Link
                to="/movies"
                className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
              >
                Browse
              </Link>

            </div>

            {/* Mobile Button */}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-2xl"
            >

              {isOpen ? <FaTimes /> : <FaBars />}

            </button>

          </div>

          {/* Mobile Menu */}

          {isOpen && (

            <div className="lg:hidden border-t border-white/10">

              {links.map((link) => (

                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-4 text-zinc-300 hover:bg-white/5 hover:text-white transition"
                >
                  {link.name}
                </NavLink>

              ))}

            </div>

          )}

        </nav>

      </div>

    </header>
  );
}

export default Navbar;