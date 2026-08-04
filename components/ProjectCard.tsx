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
    <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-xl">
      <h3 className="text-2xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-4 text-gray-600">
        {description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
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
            className="rounded-lg bg-gray-900 px-4 py-2 text-white"
          >
            GitHub
          </a>
        )}

        {demo && (
          <a
            href={demo}
            target="_blank"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}