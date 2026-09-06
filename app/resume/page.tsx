export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#f7f8fc] px-6 py-24">

      <div className="mx-auto max-w-4xl">

        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#f47770]">A snapshot of my work</p>
        <h1 className="text-center text-4xl font-bold tracking-tighter text-[#17213b]">
          Resume
        </h1>

        <p className="mt-6 text-center text-[#64708a]">
          Download my resume to learn more about my education, skills,
          experience, and projects.
        </p>

        <div className="mt-10 flex justify-center">

          <a
            href="/resume.pdf"
            target="_blank"
            className="rounded-full bg-[#0f9d9a] px-6 py-3 font-semibold text-white shadow-lg shadow-[#0f9d9a]/20 hover:-translate-y-0.5 hover:bg-[#087b7b]"
          >
            Download Resume
          </a>

        </div>

      </div>

    </main>
  );
}