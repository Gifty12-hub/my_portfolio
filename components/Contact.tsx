export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-6">

        <h2 className="text-center text-4xl font-bold text-gray-900">
          Contact Me
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          I'm always open to discussing software development opportunities,
          collaborations, and technology projects.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-xl bg-white p-8 shadow-md">
            <h3 className="text-2xl font-semibold text-green-800">
              Let's Connect
            </h3>

            <p className="mt-4 text-black">
              Feel free to reach out through any of these platforms.
            </p>

            <div className="mt-6 space-y-4">

              <p className="mt-4 text-black">
                📧 Email:
                <a
                  href="mailto:your-email@example.com"
                  className="ml-2 text-blue-600 hover:underline"
                >
                  giftyarkoh81@gmail.com
                </a>
              </p>

              <p className="text-black">
                💼 LinkedIn:
                <a
                  href="#"
                  className="ml-2 text-blue-600 hover:underline"
                >
                  LinkedIn Profile
                </a>
              </p>

              <p className="text-black">
                💻 GitHub:
                <a
                  href="#"
                  className="ml-2 text-blue-600 hover:underline"
                >
                  GitHub Profile
                </a>
              </p>

            </div>
          </div>


          {/* Contact Message */}
          <div className="rounded-xl bg-white p-8 shadow-md">

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />

              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-6 py-3 hover:bg-blue-700 text-black"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}