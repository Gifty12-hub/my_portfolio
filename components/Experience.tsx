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
    <section id="experience" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">

        <h2 className="text-center text-4xl font-bold text-gray-900">
          Experience
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          My professional, educational, and leadership experiences.
        </p>

        <div className="mt-12 space-y-8">
          {experiences.map((experience) => (
            <div
              key={experience.role}
              className="rounded-xl border p-6 shadow-sm hover:shadow-md text-green-900"
            >
              <div className="flex flex-col justify-between gap-2 md:flex-row">

                <div>
                  <h3 className="text-2xl font-bold">
                    {experience.role}
                  </h3>

                  <p className="text-blue-600 font-semibold">
                    {experience.organization}
                  </p>
                </div>

                <p className="text-gray-500">
                  {experience.period}
                </p>

              </div>

              <p className="mt-4 text-gray-600">
                {experience.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {experience.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm"
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