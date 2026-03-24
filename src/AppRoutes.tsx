import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import AnalyticsTracker from "@/Components/AnalyticsTracker";
import BackToTopButton from "@/Components/BackToTopButton";
import CookieConsentBanner from "@/Components/CookieConsentBanner";
import FloatingWhatsApp from "@/Components/FloatingWhatsApp";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { PRODUCTS } from "@/data/siteData";
import AboutPage from "@/Pages/AboutMePage";
import BlogPage from "@/Pages/BlogPage";
import BlogPostPage from "@/Pages/BlogPostPage";
import ColdPressedOilsPage from "@/Pages/ColdPressedOilsPage";
import ContactPage from "@/Pages/ContactPage";
import DomesticSupplyPage from "@/Pages/DomesticSupplyPage";
import HomePage from "@/Pages/HomePage";
import NotFoundPage from "@/Pages/NotFoundPage";
import ProductDetailPage from "@/Pages/ProductDetailPage";
import ProductsPage from "@/Pages/ProductPage";
import QualityCertificationsPage from "@/Pages/QualityCertificationsPage";
import SourcingNetworkPage from "@/Pages/SourcingNetworkPage";

const SiteLayout = () => {
  return (
    <div className="jm-page-shell min-h-screen text-[var(--brand-charcoal)]">
      <AnalyticsTracker />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTopButton />
      <FloatingWhatsApp />
      <CookieConsentBanner />
    </div>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cold-pressed-oils" element={<ColdPressedOilsPage />} />
        <Route path="/oils" element={<Navigate to="/cold-pressed-oils" replace />} />
        <Route path="/about-jm-masala" element={<AboutPage />} />
        <Route path="/quality-certifications" element={<QualityCertificationsPage />} />
        <Route path="/sourcing-network" element={<SourcingNetworkPage />} />
        <Route path="/domestic-supply-india" element={<DomesticSupplyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/get-quote" element={<Navigate to="/contact?intent=quote" replace />} />
        <Route path="/about" element={<Navigate to="/about-jm-masala" replace />} />
        <Route path="/process" element={<Navigate to="/sourcing-network" replace />} />

        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />

        {PRODUCTS.map((product) => (
          <Route
            key={product.slug}
            path={`/${product.slug}`}
            element={<ProductDetailPage />}
          />
        ))}

        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
