import { Link } from "wouter";
import { usePageTitle } from "@/hooks/use-page-title";
import { blogPosts } from "@/data/blogPosts";

export default function Blog() {
  usePageTitle({
    title: "Blog | Line Marking Tips & Advice | Line-Marking.co.nz",
    description: "Expert advice on line marking, floor coatings, warehouse safety, and playground markings for New Zealand businesses and schools.",
    path: "/blog/"
  });

  return (
    <div data-testid="page-blog">
      <div className="bg-blue-600 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Line Marking Tips &amp; Advice
          </h1>
          <p className="text-white/90 text-lg max-w-2xl">
            Practical guides on line marking durability, floor coatings, workplace safety, and more — from the team at Line-Marking.co.nz.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="flex flex-col md:flex-row gap-6 border border-gray-100 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow" data-testid={`card-blog-${post.slug}`}>
              <div className="md:w-72 flex-shrink-0">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="w-full h-48 md:h-full object-cover"
                  data-testid={`img-blog-${post.slug}`}
                />
              </div>
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.date} · {post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-bold text-gray-800 mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {post.intro}
                  </p>
                </div>
                <div className="mt-4">
                  <Link href={`/blog/${post.slug}/`}>
                    <span className="inline-block text-blue-600 font-semibold text-sm hover:underline cursor-pointer" data-testid={`link-blog-${post.slug}`}>
                      Read more →
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
