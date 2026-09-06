import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden bg-[#f7f8fc] px-6 pt-20">
      <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-[#ece9ff] blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#d8f5f1] blur-3xl" />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-[#0f9d9a]">
          Welcome to my portfolio
        </p>

        <h1 className="text-5xl font-extrabold tracking-[-0.06em] text-[#17213b] md:text-7xl">
          Hi, I'm Gifty Akosua Arkoh
        </h1>

        <h2 className="mt-6 text-xl font-semibold text-[#f47770] md:text-2xl">
          Software Developer | STEM Educator | AI Enthusiast
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#64708a]">
          I build modern web applications and enjoy using technology to solve
          real-world problems while empowering young people through STEM
          education.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="#projects"
            className="rounded-full bg-[#0f9d9a] px-6 py-3 font-semibold text-white shadow-lg shadow-[#0f9d9a]/20 hover:-translate-y-0.5 hover:bg-[#087b7b]"
          >
            View Projects
          </Link>

          <Link
            href="#contact"
            className="rounded-full border border-[#dfe4f0] bg-white/70 px-6 py-3 font-semibold text-[#17213b] hover:-translate-y-0.5 hover:border-[#0f9d9a] hover:bg-white"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}