import { Link } from "react-router-dom";
import Seo from "@/Components/Seo";
import { BLOG_POSTS } from "@/data/siteData";

const BlogPage = () => {
  return (
    <>
      <Seo
        title="JM Masala Blog | Spice Export Insights"
        description="Read JM Masala insights on spice quality grades, sourcing, and importing from India."
        path="/blog"
      />

      <section className="jm-section">
        <div className="jm-container">
          <p className="jm-section-label">Insights</p>
          <h1 className="jm-section-heading">JM Masala Blog</h1>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <article key={post.slug} className="jm-surface-card p-6">
                <p className="text-label text-[var(--brand-gold)]">
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                <h2 className="mt-3 text-[28px] leading-tight text-[var(--brand-charcoal)] text-tagline not-italic">
                  {post.title}
                </h2>
                <p className="mt-3 text-body text-[var(--brand-forest)]">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="mt-5 inline-flex jm-btn jm-btn--outline text-[13px]">
                  Read More
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
