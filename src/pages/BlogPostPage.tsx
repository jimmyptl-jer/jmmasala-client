import { Link, Navigate, useParams } from "react-router-dom";
import Seo from "@/components/Seo";
import { BLOG_POSTS, PRODUCTS_BY_SLUG } from "@/data/siteData";

const BlogPostPage = () => {
  const params = useParams();
  const post = BLOG_POSTS.find((item) => item.slug === params.slug);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const relatedProducts = post.relatedProductSlugs
    .map((slug) => PRODUCTS_BY_SLUG[slug])
    .filter((product): product is NonNullable<typeof product> => Boolean(product));
  const articleImage = relatedProducts[0]?.imageUrl;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://jmmasalaexports.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://jmmasalaexports.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://jmmasalaexports.com/blog/${post.slug}`,
      },
    ],
  };
  const faqSchema =
    post.faqs && post.faqs.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <Seo
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        imageUrl={articleImage}
        type="article"
        keywords={post.keywords}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            dateModified: post.date,
            image: articleImage,
            keywords: post.keywords.join(", "),
            articleSection: post.sections.map((section) => section.heading),
            author: {
              "@type": "Organization",
              name: "JM Masala Exports",
            },
            publisher: {
              "@type": "Organization",
              name: "JM Masala Exports",
              logo: {
                "@type": "ImageObject",
                url: "https://jmmasalaexports.com/JMMasala.png",
              },
            },
            mainEntityOfPage: `https://jmmasalaexports.com/blog/${post.slug}`,
          },
          breadcrumbSchema,
          ...(faqSchema ? [faqSchema] : []),
        ]}
      />
      <section className="jm-section">
        <div className="jm-container max-w-4xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-4 text-sm text-[var(--brand-forest)]"
          >
            <Link to="/" className="hover:text-[var(--brand-gold)]">
              Home
            </Link>
            {" / "}
            <Link to="/blog" className="hover:text-[var(--brand-gold)]">
              Blog
            </Link>
            {" / "}
            <span>{post.title}</span>
          </nav>
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
            <p className="text-base leading-8">{post.excerpt}</p>

            {post.sections.map((section) => (
              <section key={section.heading} className="mt-8">
                <h2 className="text-[28px] text-tagline not-italic text-[var(--brand-charcoal)]">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="leading-8">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.bullets && (
                  <ul className="mt-4 space-y-2 pl-5 text-[var(--brand-forest)]">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="list-disc leading-7">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {post.faqs && post.faqs.length > 0 && (
              <section className="mt-8">
                <h2 className="text-[28px] text-tagline not-italic text-[var(--brand-charcoal)]">
                  Frequently Asked Questions
                </h2>
                <div className="mt-4 space-y-5">
                  {post.faqs.map((faq) => (
                    <div key={faq.question}>
                      <h3 className="text-lg font-semibold text-[var(--brand-charcoal)]">
                        {faq.question}
                      </h3>
                      <p className="mt-2 leading-8">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <div className="mt-8 flex flex-wrap gap-2">
              {post.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-[var(--brand-gold-pale)] px-3 py-1 text-xs text-[var(--brand-forest)]"
                >
                  {keyword}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/products" className="jm-btn jm-btn--outline text-[13px]">
                View Product Portfolio
              </Link>
              <Link to="/contact" className="jm-btn jm-btn--secondary text-[13px]">
                Contact JM Masala
              </Link>
            </div>
          </article>

          {relatedProducts.length > 0 && (
            <section className="mt-10">
              <h2 className="text-[28px] text-tagline not-italic text-[var(--brand-charcoal)]">
                Related Products
              </h2>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {relatedProducts.map((product) => (
                  <article key={product.slug} className="jm-product-card">
                    <div className="jm-product-card__body">
                      <h3 className="jm-product-card__name">{product.name}</h3>
                      <p className="jm-product-card__description">
                        {product.keySpec}
                      </p>
                      <Link
                        to={`/${product.slug}`}
                        className="mt-3 inline-flex jm-btn jm-btn--outline text-[13px]"
                      >
                        View Specifications
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogPostPage;
