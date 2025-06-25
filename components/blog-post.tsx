export function BlogPost({ slug }: { slug: string }) {
  // In a real app, you would fetch the blog post data based on the slug
  const post = {
    title: "Building Accessible Web Applications",
    date: "2024-01-15",
    readTime: "8 min read",
    content: `
      <p>Web accessibility is not just a nice-to-have feature—it's a fundamental requirement for creating inclusive digital experiences. In this article, we'll explore the key principles and practical techniques for building accessible web applications.</p>
      
      <h2>Understanding Web Accessibility</h2>
      <p>Web accessibility means ensuring that websites and applications can be used by everyone, including people with disabilities. This includes users who rely on screen readers, keyboard navigation, or other assistive technologies.</p>
      
      <h2>Key Principles</h2>
      <p>The Web Content Accessibility Guidelines (WCAG) are built around four main principles:</p>
      <ul>
        <li><strong>Perceivable:</strong> Information must be presentable in ways users can perceive</li>
        <li><strong>Operable:</strong> Interface components must be operable by all users</li>
        <li><strong>Understandable:</strong> Information and UI operation must be understandable</li>
        <li><strong>Robust:</strong> Content must be robust enough for various assistive technologies</li>
      </ul>
      
      <h2>Practical Implementation</h2>
      <p>Here are some practical steps you can take to improve accessibility in your React applications:</p>
      
      <h3>Semantic HTML</h3>
      <p>Use semantic HTML elements that convey meaning and structure. Instead of using generic div elements for everything, use appropriate elements like header, nav, main, section, and footer.</p>
      
      <h3>ARIA Attributes</h3>
      <p>When semantic HTML isn't sufficient, use ARIA (Accessible Rich Internet Applications) attributes to provide additional context to assistive technologies.</p>
      
      <h3>Keyboard Navigation</h3>
      <p>Ensure that all interactive elements can be accessed and operated using only the keyboard. This includes proper focus management and visible focus indicators.</p>
      
      <h2>Conclusion</h2>
      <p>Building accessible web applications is an ongoing process that requires attention to detail and regular testing. By following these guidelines and making accessibility a priority from the start, we can create better experiences for all users.</p>
    `,
  }

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
