export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "GitHub",
    "Tailwind CSS",
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-10 text-center text-4xl font-bold">Skills</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-blue-100 px-5 py-2 text-blue-700 font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}