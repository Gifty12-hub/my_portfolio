export default function Contact() {
  return (
    <section id="contact" className="bg-[#f1f7f7] py-24">
      <div className="mx-auto max-w-6xl px-6">

        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#f47770]">Open to possibilities</p>
        <h2 className="text-center text-4xl font-bold tracking-[-0.04em] text-[#17213b]">
          Contact Me
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-[#64708a]">
          I'm always open to discussing software development opportunities,
          collaborations, and technology projects.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-2xl border border-[#dfe4f0] bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#17213b]">
              Let's Connect
            </h3>

            <p className="mt-4 text-[#64708a]">
              Feel free to reach out through any of these platforms.
            </p>

            <div className="mt-6 space-y-4">

              <p className="mt-4 text-[#64708a]">
                📧 Email:
                <a
                  href="mailto:giftyarkoh81@gmail.com"
                  className="ml-2 font-medium text-[#0f9d9a] hover:underline"
                >
                  giftyarkoh81@gmail.com
                </a>
              </p>

              <p className="text-[#64708a]">
                💼 LinkedIn:
                <a
                  href="https://www.linkedin.com/in/giftyarkoh"
                  className="ml-2 font-medium text-[#0f9d9a] hover:underline"
                >
                  LinkedIn Profile
                </a>
              </p>

              <p className="text-[#64708a]">
                💻 GitHub:
                <a
                  href="https://github.com/Gifty12-hub"

                  className="ml-2 font-medium text-[#0f9d9a] hover:underline"
                >
                  GitHub Profile
                </a>
              </p>

            </div>
          </div>


          {/* Contact Message */}
          <div className="rounded-2xl border border-[#dfe4f0] bg-white p-8 shadow-sm">

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-[#dfe4f0] p-3 text-[#17213b] outline-none focus:border-[#0f9d9a] focus:ring-2 focus:ring-[#b8eeea]"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl border border-[#dfe4f0] p-3 text-[#17213b] outline-none focus:border-[#0f9d9a] focus:ring-2 focus:ring-[#b8eeea]"
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full rounded-xl border border-[#dfe4f0] p-3 text-[#17213b] outline-none focus:border-[#0f9d9a] focus:ring-2 focus:ring-[#b8eeea]"
              />

              <button
                type="submit"
                className="rounded-full bg-[#f47770] px-6 py-3 font-semibold text-white hover:bg-[#dc615b]"
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