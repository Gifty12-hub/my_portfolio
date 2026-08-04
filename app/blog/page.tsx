export default function BlogPage() {
  const posts = [
    {
      title: "My Journey Into Software Development",
      description:
        "Sharing my experience learning programming, building projects, and growing as a developer.",
      date: "August 2026",
    },
    {
      title: "Teaching STEM and Digital Literacy",
      description:
        "Lessons learned from teaching technology, robotics, and digital skills to students.",
      date: "August 2026",
    },
    {
      title: "Exploring AI Agents",
      description:
        "My journey learning how artificial intelligence agents can solve real-world problems.",
      date: "August 2026",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">

        <h1 className="text-center text-4xl font-bold">
          Blog
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          Articles about software development, AI, STEM education, and my
          technology journey.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">

          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-xl bg-white p-6 shadow-md"
            >
              <h2 className="text-xl font-bold">
                {post.title}
              </h2>

              <p className="mt-3 text-gray-600">
                {post.description}
              </p>

              <p className="mt-4 text-sm text-blue-600">
                {post.date}
              </p>
            </article>
          ))}

        </div>

      </div>
    </main>
  );
}