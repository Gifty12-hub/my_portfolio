import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left Side */}
          <div>
            <h2 className="mb-6 text-4xl font-bold text-gray-900">
              About Me
            </h2>

            <p className="mb-4 text-lg leading-8 text-gray-600">
              Hello! I'm <strong>Gifty Akosua Arkoh</strong>, a Software
              Development student at BYU–Idaho with a passion for building
              modern web applications and using technology to solve real-world
              problems.
            </p>

            <p className="mb-4 text-lg leading-8 text-gray-600">
              Beyond software development, I enjoy teaching technology and STEM
              education to young learners. My goal is to create solutions that
              improve lives while inspiring the next generation of innovators.
            </p>

            <p className="text-lg leading-8 text-gray-600">
              I am continuously learning new technologies such as React,
              Next.js, TypeScript, Node.js, and AI tools to become a
              well-rounded full-stack developer.
            </p>
        </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <Image
              src="/images/profile.jpg"
              alt="Profile Picture"
              className="rounded-full object-cover shadow-lg"
              width={320}
              height={320}
            />
          </div>
        </div>
      </div>
    </section>
  );
}