import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left Side */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#f47770]">A little about me</p>
            <h2 className="mb-6 text-4xl font-bold tracking-[-0.04em] text-[#17213b]">
              About Me
            </h2>

            <p className="mb-4 text-lg leading-8 text-[#64708a]">
              Hello! I'm <strong>Gifty Akosua Arkoh</strong>, a Software
              Development student at BYU–Idaho with a passion for building
              modern web applications and using technology to solve real-world
              problems.
            </p>

            <p className="mb-4 text-lg leading-8 text-[#64708a]">
              Beyond software development, I enjoy teaching technology and STEM
              education to young learners. My goal is to create solutions that
              improve lives while inspiring the next generation of innovators.
            </p>

            <p className="text-lg leading-8 text-[#64708a]">
              I am continuously learning new technologies such as React,
              Next.js, TypeScript, Node.js, and AI tools to become a
              well-rounded full-stack developer.
            </p>
        </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <Image
              src="/images/mypic.jpg"
              alt="Profile Picture"
              className="rounded-4xl border-8 border-[#ece9ff] object-cover shadow-xl shadow-[#17213b]/10"
              width={320}
              height={320}
            />
          </div>
        </div>
      </div>
    </section>
  );
}