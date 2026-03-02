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
      <Seo title={post.title} description={post.excerpt} path={`/blog/${post.slug}`} type="article" />
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="font-serif text-4xl font-bold text-stone-900">{post.title}</h1>
        <p className="mt-3 text-sm text-stone-600">
          Published {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
        </p>
        <article className="mt-8 rounded-2xl border border-stone-200 bg-white p-6 text-stone-700">
          <p>Placeholder article page. Detailed content will be added separately.</p>
        </article>
      </section>
    </>
  );
};

export default BlogPostPage;
