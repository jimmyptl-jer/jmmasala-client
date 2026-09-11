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
import GujaratSpiceExporterPage from "@/pages/GujaratSpiceExporterPage";
import HomePage from "@/pages/HomePage";
import { BestCuminExporterIndiaPage, SpiceExporterIndiaPage } from "@/pages/IndiaSeoPages";
import NotFoundPage from "@/pages/NotFoundPage";
import ProductDetailPage from "@/pages/ProductDetailPage";
import ProductsPage from "@/pages/ProductPage";
import QualityCertificationsPage from "@/pages/QualityCertificationsPage";
import PrivateLabelPage from "@/pages/PrivateLabelPage";
import SpicePackagingPage from "@/pages/SpicePackagingPage";
import SpiceProcessingPage from "@/pages/SpiceProcessingPage";
import SourcingRegionPage from "@/pages/SourcingRegionPage";
import SourcingNetworkPage from "@/pages/SourcingNetworkPage";
import ExportOperationsPage from "@/pages/ExportOperationsPage";

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
        <Route path="/best-spice-exporter-india" element={<SpiceExporterIndiaPage />} />
        <Route path="/best-cumin-exporter-india" element={<BestCuminExporterIndiaPage />} />
        <Route path="/spice-exporter-gujarat" element={<GujaratSpiceExporterPage />} />
        <Route path="/quality-certifications" element={<QualityCertificationsPage />} />
        <Route path="/sourcing-network" element={<SourcingNetworkPage />} />
        <Route path="/sourcing/:regionSlug" element={<SourcingRegionPage />} />
        <Route path="/spice-processing-manufacturing" element={<SpiceProcessingPage />} />
        <Route path="/private-label-spices" element={<PrivateLabelPage />} />
        <Route path="/spice-packaging" element={<SpicePackagingPage />} />
        <Route path="/domestic-supply-india" element={<DomesticSupplyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/export-destinations" element={<ExportOperationsPage />} />
        <Route path="/export" element={<ExportOperationsPage />} />
        <Route path="/export-markets" element={<ExportOperationsPage />} />
        <Route path="/exports" element={<Navigate to="/export-destinations" replace />} />
        <Route path="/get-quote" element={<Navigate to="/contact?intent=quote" replace />} />
        <Route path="/about" element={<Navigate to="/about-jm-masala" replace />} />
        <Route path="/process" element={<Navigate to="/spice-processing-manufacturing" replace />} />
        <Route path="/spice-processing" element={<Navigate to="/spice-processing-manufacturing" replace />} />

        {/* Short SEO Product Slugs Redirects */}
        <Route path="/coriander-seeds" element={<Navigate to="/coriander-seeds-exporter-india" replace />} />
        <Route path="/cumin-seeds" element={<Navigate to="/cumin-seeds-exporter-india" replace />} />
        <Route path="/fennel-seeds" element={<Navigate to="/fennel-seeds-exporter-india" replace />} />
        <Route path="/fenugreek-seeds" element={<Navigate to="/fenugreek-seeds-exporter-india" replace />} />
        <Route path="/ajwain" element={<Navigate to="/ajwain-seeds-exporter-india" replace />} />
        <Route path="/mustard-seeds" element={<Navigate to="/mustard-seeds-exporter-india" replace />} />
        <Route path="/turmeric" element={<Navigate to="/turmeric-exporter-india" replace />} />
        <Route path="/dry-ginger" element={<Navigate to="/dry-ginger-exporter-india" replace />} />
        <Route path="/red-chilli" element={<Navigate to="/red-chilli-exporter-india" replace />} />
        <Route path="/psyllium" element={<Navigate to="/psyllium-husk-exporter-india" replace />} />

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
