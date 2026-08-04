export default function ResumePage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20">

      <div className="mx-auto max-w-4xl">

        <h1 className="text-center text-4xl font-bold text-amber-300">
          Resume
        </h1>

        <p className="mt-6 text-center text-gray-600">
          Download my resume to learn more about my education, skills,
          experience, and projects.
        </p>

        <div className="mt-10 flex justify-center">

          <a
            href="/resume.pdf"
            target="_blank"
            className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            Download Resume
          </a>

        </div>

      </div>

    </main>
  );
}