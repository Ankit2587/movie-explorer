import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden">

      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-white/5 blur-[180px] rounded-full"></div>

      </div>

      {/* Hero */}

      <section className="pt-44 pb-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">

              Contact MovieExplorer

            </span>

            <h1 className="mt-8 text-6xl md:text-7xl lg:text-8xl font-black tracking-tight">

              Let's Connect

            </h1>

            <p className="mt-8 text-zinc-400 text-lg leading-8">

              We'd love to hear from you.
              Whether you have feedback, suggestions,
              collaboration ideas or just want to say hello,
              feel free to reach out.

            </p>

          </div>

        </div>

      </section>

      {/* Contact Section */}

      <section className="pb-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-[420px_1fr] gap-10">

            {/* Left Card */}

            <div className="rounded-[32px] border border-white/10 bg-[#111111] p-10">

              <h2 className="text-3xl font-bold">

                Get in Touch

              </h2>

              <p className="text-zinc-500 mt-4 leading-7">

                Feel free to contact us through any
                of the following channels.

              </p>

              <div className="space-y-8 mt-12">

                {/* Email */}

                <div className="flex gap-5">

                  <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center">

                    <FaEnvelope />

                  </div>

                  <div>

                    <p className="text-zinc-500">

                      Email

                    </p>

                    <h3 className="text-xl font-semibold mt-1">

                      your@email.com

                    </h3>

                  </div>

                </div>

                {/* Phone */}

                <div className="flex gap-5">

                  <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center">

                    <FaPhoneAlt />

                  </div>

                  <div>

                    <p className="text-zinc-500">

                      Phone

                    </p>

                    <h3 className="text-xl font-semibold mt-1">

                      +91 XXXXX XXXXX

                    </h3>

                  </div>

                </div>

                {/* Location */}

                <div className="flex gap-5">

                  <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center">

                    <FaMapMarkerAlt />

                  </div>

                  <div>

                    <p className="text-zinc-500">

                      Location

                    </p>

                    <h3 className="text-xl font-semibold mt-1">

                      India

                    </h3>

                  </div>

                </div>

              </div>

              {/* Social Icons */}

              <div className="flex gap-4 mt-14">

                <button className="w-12 h-12 rounded-xl bg-zinc-800 hover:bg-white hover:text-black transition">

                  <FaGithub className="mx-auto mt-4"/>

                </button>

                <button className="w-12 h-12 rounded-xl bg-zinc-800 hover:bg-white hover:text-black transition">

                  <FaLinkedin className="mx-auto mt-4"/>

                </button>

                <button className="w-12 h-12 rounded-xl bg-zinc-800 hover:bg-white hover:text-black transition">

                  <FaInstagram className="mx-auto mt-4"/>

                </button>

              </div>

            </div>
                        {/* Right Form */}

            <div className="rounded-[32px] border border-white/10 bg-[#111111] p-10">

              <h2 className="text-3xl font-bold">

                Send Message

              </h2>

              <p className="text-zinc-500 mt-4">

                Fill out the form and we'll get back to you as soon as possible.

              </p>

              <form className="mt-10 space-y-6">

                <div>

                  <label className="block mb-3 text-zinc-400">

                    Full Name

                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="
                      w-full
                      h-14
                      px-5
                      rounded-2xl
                      bg-[#181818]
                      border
                      border-zinc-700
                      focus:border-white
                      outline-none
                      transition
                    "
                  />

                </div>

                <div>

                  <label className="block mb-3 text-zinc-400">

                    Email Address

                  </label>

                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="
                      w-full
                      h-14
                      px-5
                      rounded-2xl
                      bg-[#181818]
                      border
                      border-zinc-700
                      focus:border-white
                      outline-none
                      transition
                    "
                  />

                </div>

                <div>

                  <label className="block mb-3 text-zinc-400">

                    Subject

                  </label>

                  <input
                    type="text"
                    placeholder="Movie suggestion..."
                    className="
                      w-full
                      h-14
                      px-5
                      rounded-2xl
                      bg-[#181818]
                      border
                      border-zinc-700
                      focus:border-white
                      outline-none
                      transition
                    "
                  />

                </div>

                <div>

                  <label className="block mb-3 text-zinc-400">

                    Message

                  </label>

                  <textarea
                    rows="7"
                    placeholder="Write your message..."
                    className="
                      w-full
                      rounded-2xl
                      bg-[#181818]
                      border
                      border-zinc-700
                      p-5
                      resize-none
                      focus:border-white
                      outline-none
                      transition
                    "
                  ></textarea>

                </div>

                <button
                  type="submit"
                  className="
                    w-full
                    h-14
                    rounded-2xl
                    bg-white
                    text-black
                    font-semibold
                    flex
                    items-center
                    justify-center
                    gap-3
                    hover:bg-zinc-200
                    transition
                  "
                >

                  <FaPaperPlane />

                  Send Message

                </button>

              </form>

            </div>

          </div>

        </div>

      </section>
            {/* Bottom CTA */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="rounded-[40px] border border-white/10 bg-gradient-to-r from-[#111111] via-[#181818] to-[#111111] p-12 text-center">

            <h2 className="text-4xl md:text-5xl font-black tracking-tight">

              Let's Build Something Amazing

            </h2>

            <p className="text-zinc-400 mt-6 max-w-2xl mx-auto leading-8">

              Thank you for visiting MovieExplorer.
              Whether you're a movie enthusiast, developer,
              or recruiter, we appreciate your time.
              We hope you enjoy exploring movies with us.

            </p>

            <button
              className="
                mt-10
                px-10
                py-4
                rounded-full
                bg-white
                text-black
                font-semibold
                hover:scale-105
                transition
              "
            >
              Explore Movies
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;