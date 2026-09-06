import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "Kasoa Bites",
        description:
            "A food ordering application designed to help users discover and order meals online.",
        technologies: [
            "React",
            "Next.js",
            "Tailwind CSS",
            "JavaScript",
        ],
        github: "#",
        demo: "#",
    },

    {
        title: "Ghana Recipes",
        description:
            "A recipe website showcasing Ghanaian meals with a user-friendly interface.",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
        ],
        github: "#",
        demo: "#",
    },

    {
        title: "AI Agent Project",
        description:
            "An AI-powered assistant project exploring how intelligent agents can solve problems.",
        technologies: [
            "AI",
            "Python",
            "APIs",
        ],
        github: "#",
        demo: "#",
    },

    {
        title: "Developer Portfolio",
        description:
            "A personal portfolio website built to showcase my software development journey and projects.",
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
        ],
        github: "#",
        demo: "#",
    },
    {
        title: "Mama Match GH",
        description:
            "A platform designed to connect mothers with helpful resources, support services, and relevant information to improve maternal and family wellbeing in Ghana.",
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Supabase",
        ],
        github: "#",
        demo: "#",
    },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#f7f8fc] py-24">
      <div className="mx-auto max-w-6xl px-6">

        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#f47770]">Selected work</p>
        <h2 className="text-center text-4xl font-bold tracking-[-0.04em] text-[#17213b]">
          Projects
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-[#64708a]">
          Some of the projects I have built while learning and applying
          software development skills.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}