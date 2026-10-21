import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import { BLOG_POSTS } from "@/data/siteData";

const BlogPage = () => {
  return (
    <>
      <Seo
        title="Spice Export Buyer Guides | JM Masala Blog"
        description="Buyer-focused guides on importing spices from India, Unjha cumin sourcing, psyllium and export specifications."
        path="/blog"
        keywords={[
          "spice export blog India",
          "importing spices from India",
          "cumin sourcing Unjha",
          "psyllium husk exporter guide",
          "spice processing India",
          "JM Masala blog",
        ]}
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Blog",
              name: "JM Masala Blog",
              url: "https://jmmasalaexports.com/blog",
              description:
                "Insights on Indian spice exports, sourcing, compliance, and buyer requirements.",
            },
            {
              "@type": "ItemList",
              itemListElement: BLOG_POSTS.map((post, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: `https://jmmasalaexports.com/blog/${post.slug}`,
                name: post.title,
              })),
            },
          ],
        }}
      />

      <section className="jm-section">
        <div className="jm-container">
          <p className="jm-section-label">Insights</p>
          <h1 className="jm-heading-1">JM Masala Blog</h1>

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
                <h2 className="mt-3 jm-section-heading">
                  {post.title}
                </h2>
                <p className="mt-3 text-body text-[var(--brand-forest)]">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="mt-5 inline-flex jm-btn jm-btn--outline">
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
