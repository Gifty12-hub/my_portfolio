import ProjectCard from "./ProjectCard";

const projects = [
    {
    title: "MealMix",
        description:
      "A food ordering application designed to help users discover meals, customize orders, and enjoy a simple online ordering experience.",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
        ],
        github: "https://github.com/Gifty12-hub/mealmix-food-app.git",
        demo: "#",
    },

    {
    title: "iTalent4U",
        description:
      "A talent-focused website that connects people with opportunities, resources, and a platform to showcase their skills.",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
        ],
        github: "https://github.com/jorge-murillo-010/italent4u-landing.git",
        demo: "#",
    },
    {
    title: "Portfolio Website",
        description:
      "A personal portfolio website built to showcase my skills, projects, and experiences in software development.",
        technologies: [
            "React",
            "TypeScript",
            "Tailwind CSS",
        ],
        github: "https://github.com/Gifty12-hub/my_portfolio.git",
        demo: "#",
    }
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