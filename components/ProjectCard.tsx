type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <div className="rounded-2xl border border-[#dfe4f0] border-t-4 border-t-[#0f9d9a] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#17213b]/10">
      <h3 className="text-2xl font-bold tracking-[-0.03em] text-[#17213b]">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-[#64708a]">
        {description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-[#ece9ff] px-3 py-1 text-sm font-medium text-[#6558b8]"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        {github && (
          <a
            href={github}
            target="_blank"
            className="rounded-full bg-[#17213b] px-4 py-2 text-sm font-semibold text-white hover:bg-[#29375d]"
          >
            GitHub
          </a>
        )}

        {demo && (
          <a
            href={demo}
            target="_blank"
            className="rounded-full bg-[#0f9d9a] px-4 py-2 text-sm font-semibold text-white hover:bg-[#087b7b]"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}