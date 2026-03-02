import { Link } from "react-router-dom";
import Seo from "@/components/Seo";

const NotFoundPage = () => {
  return (
    <>
      <Seo
        title="404 | Page Not Found | JM Masala"
        description="The page you requested could not be found."
        path="/404"
      />
      <section className="mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center px-4 text-center">
        <p className="rounded-full bg-amber-100 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-amber-800">
          404 Error
        </p>
        <h1 className="mt-4 font-serif text-4xl font-bold text-stone-900">
          Page not found
        </h1>
        <p className="mt-3 text-stone-600">
          The page you are looking for is unavailable. Use the link below to return
          to the JM Masala homepage.
        </p>
        <Link
          to="/"
          className="mt-6 rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white hover:bg-amber-700"
        >
          Back to Homepage
        </Link>
      </section>
    </>
  );
};

export default NotFoundPage;
