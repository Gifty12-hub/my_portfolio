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
    <main className="min-h-screen bg-[#f7f8fc] px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#f47770]">Notes from the journey</p>
        <h1 className="text-center text-4xl font-bold tracking text-[#17213b]">
          Blog
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-center text-[#64708a]">
          Articles about software development, AI, STEM education, and my
          technology journey.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">

          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-2xl border border-[#dfe4f0] border-t-4 border-t-[#f47770] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-xl font-bold text-[#17213b]">
                {post.title}
              </h2>

              <p className="mt-3 leading-7 text-[#64708a]">
                {post.description}
              </p>

              <p className="mt-4 text-sm font-semibold text-[#0f9d9a]">
                {post.date}
              </p>
            </article>
          ))}

        </div>

      </div>
    </main>
  );
}