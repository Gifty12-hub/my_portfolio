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
    <section className="bg-[#f1f7f7] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#f47770]">My toolkit</p>
        <h2 className="mb-10 text-center text-4xl font-bold tracking-[-0.04em] text-[#17213b]">Skills</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-[#b8e5e1] bg-white px-5 py-2 font-medium text-[#087b7b] shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}