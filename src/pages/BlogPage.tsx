import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import { BLOG_POSTS } from "@/data/siteData";

const BlogPage = () => {
  return (
    <>
      <Seo
        title="JM Masala Blog | Spice Export Insights"
        description="Read JM Masala insights on spice quality grades, sourcing, and importing from India."
        path="/blog"
      />

      <section className="mx-auto max-w-7xl px-4 py-12">
        <h1 className="font-serif text-4xl font-bold text-stone-900">Blog</h1>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article key={post.slug} className="rounded-2xl border border-stone-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
                {new Date(post.date).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
              <h2 className="mt-2 text-lg font-semibold text-stone-900">{post.title}</h2>
              <p className="mt-2 text-sm text-stone-600">{post.excerpt}</p>
              <Link
                to={`/blog/${post.slug}`}
                className="mt-4 inline-block rounded-full bg-amber-600 px-4 py-2 text-xs font-semibold text-white hover:bg-amber-700"
              >
                Read More
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogPage;
