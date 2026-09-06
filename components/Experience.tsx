const experiences = [
  {
    role: "Software Development Student",
    organization: "BYU–Idaho",
    period: "Present",
    description:
      "Studying software development with a focus on web development, programming fundamentals, databases, and building real-world applications.",
    skills: [
      "JavaScript",
      "React",
      "Next.js",
      "Python",
      "Database Development",
    ],
  },

  {
    role: "Lead Facilitator - Digital Literacy Program",
    organization: "Rise Hub",
    period: "2026",
    description:
      "Led digital literacy sessions, helping learners understand technology, online safety, productivity tools, and responsible technology use.",
    skills: [
      "Teaching",
      "Leadership",
      "Communication",
      "Digital Skills Training",
    ],
  },

  {
    role: "STEM Educator & Program Facilitator",
    organization: "Bountiful STEM",
    period: "2023 - 2026",
    description:
      "Designed and delivered STEM learning experiences for students, including robotics, programming, and technology education.",
    skills: [
      "Robotics",
      "STEM Education",
      "Curriculum Development",
      "Mentoring",
    ],
  },

  {
    role: "Frontend Developer",
    organization: "Personal & Academic Projects",
    period: "Present",
    description:
      "Building responsive web applications and improving frontend development skills through practical projects.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Next.js",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">

        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#f47770]">The path so far</p>
        <h2 className="text-center text-4xl font-bold tracking-[-0.04em] text-[#17213b]">
          Experience
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-[#64708a]">
          My professional, educational, and leadership experiences.
        </p>

        <div className="mt-12 space-y-8">
          {experiences.map((experience) => (
            <div
              key={experience.role}
              className="rounded-2xl border border-[#dfe4f0] border-l-4 border-l-[#f47770] bg-[#fbfcff] p-6 text-[#17213b] shadow-sm hover:shadow-md"
            >
              <div className="flex flex-col justify-between gap-2 md:flex-row">

                <div>
                  <h3 className="text-2xl font-bold">
                    {experience.role}
                  </h3>

                  <p className="font-semibold text-[#0f9d9a]">
                    {experience.organization}
                  </p>
                </div>

                <p className="text-sm font-medium text-[#8791a8]">
                  {experience.period}
                </p>

              </div>

              <p className="mt-4 leading-7 text-[#64708a]">
                {experience.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {experience.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-[#eef1f7] px-3 py-1 text-sm text-[#64708a]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}