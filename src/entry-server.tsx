import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./AppRoutes";
import { SeoCollectorContext, type SeoProps } from "@/components/Seo";
import { BLOG_POSTS, PRODUCTS } from "@/data/siteData";

export { buildHeadTags } from "@/components/Seo";

/** Every URL that is written out as static HTML at build time. */
export const PRERENDER_ROUTES = [
  "/",
  "/products",
  "/cold-pressed-oils",
  "/about-jm-masala",
  "/quality-certifications",
  "/sourcing-network",
  "/domestic-supply-india",
  "/contact",
  "/blog",
  ...PRODUCTS.map((product) => `/${product.slug}`),
  ...BLOG_POSTS.map((post) => `/blog/${post.slug}`),
  "/404",
];

export const render = (url: string) => {
  const collector: { props?: SeoProps } = {};
  const html = renderToString(
    <StrictMode>
      <SeoCollectorContext.Provider value={collector}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </SeoCollectorContext.Provider>
    </StrictMode>,
  );
  return { html, seo: collector.props };
};
