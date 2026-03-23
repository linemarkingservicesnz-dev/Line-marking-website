import { Link } from "wouter";
import { usePageTitle } from "@/hooks/use-page-title";
import { blogPosts } from "@/data/blogPosts";

interface BlogPostPageProps {
  slug: string;
}

export default function BlogPostPage({ slug }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === slug);

  usePageTitle(
    post
      ? { title: `${post.title} | Line-Marking.co.nz`, description: post.metaDescription, path: `/blog/${slug}/` }
      : { title: "Blog Post Not Found | Line-Marking.co.nz", description: "This blog post could not be found.", path: `/blog/${slug}/` }
  );

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Post Not Found</h1>
        <Link href="/blog/">
          <span className="text-blue-600 hover:underline cursor-pointer">← Back to Blog</span>
        </Link>
      </div>
    );
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div data-testid="page-blog-post">
      <div className="relative w-full h-[280px] md:h-[360px] overflow-hidden">
        <img
          src={post.image}
          alt={post.imageAlt}
          className="w-full h-full object-cover"
          data-testid="img-hero"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-end pb-8">
          <div className="max-w-4xl mx-auto px-4 w-full">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-semibold bg-blue-500 text-white px-2 py-1 rounded">
                {post.category}
              </span>
              <span className="text-xs text-white/70">{post.date} · {post.readTime}</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight max-w-2xl">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <Link href="/blog/">
          <span className="text-blue-600 hover:underline text-sm cursor-pointer" data-testid="link-back-to-blog">
            ← Back to Blog
          </span>
        </Link>

        <p className="text-lg text-gray-600 leading-relaxed mt-6 mb-8 border-l-4 border-blue-500 pl-4">
          {post.intro}
        </p>

        <div className="space-y-8">
          {post.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-xl font-bold text-gray-800 mb-3">{section.heading}</h2>
              <p className="text-gray-600 leading-relaxed mb-3">{section.content}</p>
              {section.list && (
                <ul className="space-y-2 text-gray-600">
                  {section.list.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="bg-blue-600 rounded-md p-6 text-white text-center mt-10">
          <p className="text-lg font-medium mb-1">{post.conclusion}</p>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <a href="tel:0224393344" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-bold hover:bg-blue-50 transition-colors" data-testid="link-phone">
              Call 022 439 3344
            </a>
            <Link href="/Contact/">
              <span className="inline-block bg-blue-700 text-white border border-white/30 px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors cursor-pointer" data-testid="link-contact">
                Get a Free Quote
              </span>
            </Link>
          </div>
        </div>

        {otherPosts.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-800 mb-5">More Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {otherPosts.map((other) => (
                <Link key={other.slug} href={`/blog/${other.slug}/`}>
                  <div className="border border-gray-100 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer" data-testid={`card-related-${other.slug}`}>
                    <img src={other.image} alt={other.imageAlt} className="w-full h-32 object-cover" />
                    <div className="p-3">
                      <span className="text-xs font-semibold text-blue-600">{other.category}</span>
                      <p className="text-sm font-semibold text-gray-800 mt-1 leading-snug">{other.title}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
