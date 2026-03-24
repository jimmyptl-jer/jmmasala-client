import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import BackToTopButton from "@/components/BackToTopButton";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AboutPage from "@/pages/AboutMePage";
import BlogPage from "@/pages/BlogPage";
import BlogPostPage from "@/pages/BlogPostPage";
import ColdPressedOilsPage from "@/pages/ColdPressedOilsPage";
import ContactPage from "@/pages/ContactPage";
import DomesticSupplyPage from "@/pages/DomesticSupplyPage";
import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";
import ProductDetailPage from "@/pages/ProductDetailPage";
import ProductsPage from "@/pages/ProductPage";
import QualityCertificationsPage from "@/pages/QualityCertificationsPage";
import SourcingNetworkPage from "@/pages/SourcingNetworkPage";

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
        <Route path="/:slug" element={<ProductDetailPage />} />

        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
