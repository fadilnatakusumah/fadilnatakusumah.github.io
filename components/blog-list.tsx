import Link from "next/link"

export function BlogList() {
  const blogPosts = [
    {
      slug: "building-accessible-web-apps",
      title: "Building Accessible Web Applications",
      excerpt:
        "Learn the fundamentals of web accessibility and how to implement ARIA attributes, semantic HTML, and keyboard navigation in your React applications.",
      date: "2024-01-15",
      readTime: "8 min read",
    },
    {
      slug: "nextjs-performance-optimization",
      title: "Next.js Performance Optimization Techniques",
      excerpt:
        "Discover advanced techniques for optimizing your Next.js applications, including image optimization, code splitting, and server-side rendering strategies.",
      date: "2024-01-08",
      readTime: "12 min read",
    },
    {
      slug: "modern-css-techniques",
      title: "Modern CSS Techniques for Better UX",
      excerpt:
        "Explore modern CSS features like Grid, Flexbox, and custom properties to create responsive and maintainable user interfaces.",
      date: "2024-01-01",
      readTime: "6 min read",
    },
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-200 sm:text-5xl mb-8">Blog</h1>
      <div className="mb-8">
        <a
          href="/"
          className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-600 dark:text-teal-300 transition-colors"
        >
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            ></path>
          </svg>
          Back to Home
        </a>
      </div>
      <div className="space-y-8">
        {blogPosts.map((post) => (
          <article key={post.slug} className="group">
            <Link href={`/blog/${post.slug}`}>
              <div className="rounded-lg p-6 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800/50">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-200 group-hover:text-teal-600 dark:group-hover:text-teal-300 mb-2 transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-slate-500 dark:text-slate-500">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span className="mx-2">·</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
