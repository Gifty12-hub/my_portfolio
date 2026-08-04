import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="mb-4 text-lg text-blue-600 font-semibold">
          Welcome to my portfolio
        </p>

        <h1 className="text-5xl font-extrabold text-gray-900 md:text-6xl">
          Hi, I'm Gifty Akosua Arkoh
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-gray-700">
          Software Developer | STEM Educator | AI Enthusiast
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          I build modern web applications and enjoy using technology to solve
          real-world problems while empowering young people through STEM
          education.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/projects"
            className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            View Projects
          </Link>

          <Link
            href="/contact"
            className="rounded-lg border border-gray-300 px-6 py-3 hover:bg-gray-100"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}