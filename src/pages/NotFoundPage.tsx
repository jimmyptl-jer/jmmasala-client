import { Link } from "react-router-dom";
import Seo from "@/Components/Seo";

const NotFoundPage = () => {
  return (
    <>
      <Seo
        title="404 | Page Not Found | JM Masala"
        description="The page you requested could not be found."
        path="/404"
      />
      <section className="jm-section">
        <div className="jm-container flex min-h-[60vh] max-w-4xl flex-col items-center justify-center text-center">
          <p className="text-label rounded-full bg-[var(--brand-gold-pale)] px-4 py-2 text-[var(--brand-deep-green)]">
            404 Error
          </p>
          <h1 className="jm-section-heading mt-4">Page not found</h1>
          <p className="mt-3 max-w-2xl text-body text-[var(--brand-forest)]">
            The page you are looking for is unavailable. Use the link below to return
            to the JM Masala homepage.
          </p>
          <Link to="/" className="jm-btn jm-btn--primary mt-6">
            Back to Homepage
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
