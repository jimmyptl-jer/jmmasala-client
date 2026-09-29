import { Navigate, useParams } from "react-router-dom";
import Seo from "@/components/Seo";
import { BLOG_POSTS } from "@/data/siteData";

const BlogPostPage = () => {
  const params = useParams();
  const post = BLOG_POSTS.find((item) => item.slug === params.slug);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Seo
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        type="article"
        noindex={post.draft}
      />
      <section className="jm-section">
        <div className="jm-container max-w-4xl">
          <p className="jm-section-label">Article</p>
          <h1 className="jm-section-heading">{post.title}</h1>
          <p className="mt-3 text-body text-[var(--brand-forest)]">
            Published{" "}
            {new Date(post.date).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <article className="jm-surface-card mt-8 p-8 text-body text-[var(--brand-forest)]">
            <p>{post.excerpt}</p>
            {post.draft && (
              <p className="mt-4">
                This article is being written and will be published soon.
              </p>
            )}
          </article>
        </div>
      </section>
    </>
  );
};

export default BlogPostPage;
