import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-white px-6">
      <h1 className="text-8xl font-extrabold text-yellow-400">
        404
      </h1>

      <p className="text-2xl mt-4 text-zinc-300">
        Oops! Page Not Found
      </p>

      <Link
        to="/"
        className="mt-8 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;