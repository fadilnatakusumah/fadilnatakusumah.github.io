import { BLOG_POSTS } from "@/lib/data"

export function BlogPost({ slug }: { slug: string }) {
  const post = BLOG_POSTS[slug]

  return (
    <div>
      <div className="mb-8">
        <a
          href="/blog"
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
          Back to Blog
        </a>
      </div>

      <article className="prose prose-slate prose-invert max-w-none">
        <header className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-200 sm:text-5xl mb-4">
            {post.title}
          </h1>
          <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
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
        </header>

        <div
          className="prose prose-slate dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  )
}
