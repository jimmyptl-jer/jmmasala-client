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
import {
  BestCuminExporterIndiaPage,
  SpiceExporterIndiaPage,
} from "@/pages/IndiaSeoPages";
import CuminSeedsPage from "@/pages/CuminSeedsPage";
import CorianderSeedsPage from "@/pages/CorianderSeedsPage";
import AjwainSeedsPage from "@/pages/AjwainSeedsPage";
import SesameSeedsPage from "@/pages/SesameSeedsPage";
import FenugreekSeedsPage from "@/pages/FenugreekSeedsPage";
import FennelSeedsPage from "@/pages/FennelSeedsPage";
import MustardSeedsPage from "@/pages/MustardSeedsPage";
import RedChilliPage from "@/pages/RedChilliPage";
import TejaChilliPage from "@/pages/TejaChilliPage";
import BirdEyeChilliPage from "@/pages/BirdEyeChilliPage";
import KingChilliPage from "@/pages/KingChilliPage";
import TurmericPage from "@/pages/TurmericPage";
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
import UnjhaCuminSeedsPage from "@/pages/UnjhaCuminSeedsPage";
import UnjhaFennelSeedsPage from "@/pages/UnjhaFennelSeedsPage";
import CuminSeedsSpecificationsPage from "@/pages/CuminSeedsSpecificationsPage";

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
        <Route path="/cumin-seeds-exporter-india" element={<CuminSeedsPage />} />
        <Route path="/coriander-seeds-exporter-india" element={<CorianderSeedsPage />} />
        <Route path="/ajwain-seeds-exporter-india" element={<AjwainSeedsPage />} />
        <Route path="/sesame-seeds-exporter-india" element={<SesameSeedsPage />} />
        <Route path="/fenugreek-seeds-exporter-india" element={<FenugreekSeedsPage />} />
        <Route path="/fennel-seeds-exporter-india" element={<FennelSeedsPage />} />
        <Route path="/mustard-seeds-exporter-india" element={<MustardSeedsPage />} />
        <Route path="/red-chilli-exporter-india" element={<RedChilliPage />} />
        <Route path="/teja-chilli-exporter-india" element={<TejaChilliPage />} />
        <Route path="/bird-eye-chilli-exporter-india" element={<BirdEyeChilliPage />} />
        <Route path="/king-chilli-exporter-india" element={<KingChilliPage />} />
        <Route path="/turmeric-exporter-india" element={<TurmericPage />} />
        <Route path="/best-coriander-exporter-india" element={<Navigate to="/coriander-seeds-exporter-india" replace />} />
        <Route path="/best-coriander-seeds-exporter-india" element={<Navigate to="/coriander-seeds-exporter-india" replace />} />
        <Route path="/unjha-cumin-seeds" element={<UnjhaCuminSeedsPage />} />
        <Route path="/unjha-fennel-seeds" element={<UnjhaFennelSeedsPage />} />
        <Route path="/cumin-seeds-specifications" element={<CuminSeedsSpecificationsPage />} />
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
        <Route path="/saunf" element={<Navigate to="/fennel-seeds-exporter-india" replace />} />
        <Route path="/saunf-seeds" element={<Navigate to="/fennel-seeds-exporter-india" replace />} />
        <Route path="/fennel" element={<Navigate to="/fennel-seeds-exporter-india" replace />} />
        <Route path="/variyali" element={<Navigate to="/fennel-seeds-exporter-india" replace />} />
        <Route path="/fenugreek-seeds" element={<Navigate to="/fenugreek-seeds-exporter-india" replace />} />
        <Route path="/methi-seeds" element={<Navigate to="/fenugreek-seeds-exporter-india" replace />} />
        <Route path="/fenugreek" element={<Navigate to="/fenugreek-seeds-exporter-india" replace />} />
        <Route path="/methi" element={<Navigate to="/fenugreek-seeds-exporter-india" replace />} />
        <Route path="/methi-dana" element={<Navigate to="/fenugreek-seeds-exporter-india" replace />} />
        <Route path="/ajwain" element={<Navigate to="/ajwain-seeds-exporter-india" replace />} />
        <Route path="/ajwain-seeds" element={<Navigate to="/ajwain-seeds-exporter-india" replace />} />
        <Route path="/carom-seeds" element={<Navigate to="/ajwain-seeds-exporter-india" replace />} />
        <Route path="/sesame-seeds" element={<Navigate to="/sesame-seeds-exporter-india" replace />} />
        <Route path="/natural-sesame-seeds" element={<Navigate to="/sesame-seeds-exporter-india" replace />} />
        <Route path="/hulled-sesame-seeds" element={<Navigate to="/sesame-seeds-exporter-india" replace />} />
        <Route path="/white-sesame-seeds" element={<Navigate to="/sesame-seeds-exporter-india" replace />} />
        <Route path="/til-seeds" element={<Navigate to="/sesame-seeds-exporter-india" replace />} />
        <Route path="/mustard-seeds" element={<Navigate to="/mustard-seeds-exporter-india" replace />} />
        <Route path="/mustard" element={<Navigate to="/mustard-seeds-exporter-india" replace />} />
        <Route path="/rai" element={<Navigate to="/mustard-seeds-exporter-india" replace />} />
        <Route path="/sarson" element={<Navigate to="/mustard-seeds-exporter-india" replace />} />
        <Route path="/rai-seeds" element={<Navigate to="/mustard-seeds-exporter-india" replace />} />
        <Route path="/sarson-seeds" element={<Navigate to="/mustard-seeds-exporter-india" replace />} />
        <Route path="/turmeric" element={<Navigate to="/turmeric-exporter-india" replace />} />
        <Route path="/haldi" element={<Navigate to="/turmeric-exporter-india" replace />} />
        <Route path="/turmeric-fingers" element={<Navigate to="/turmeric-exporter-india" replace />} />
        <Route path="/turmeric-powder" element={<Navigate to="/turmeric-exporter-india" replace />} />
        <Route path="/dry-ginger" element={<Navigate to="/dry-ginger-exporter-india" replace />} />
        <Route path="/red-chilli" element={<Navigate to="/red-chilli-exporter-india" replace />} />
        <Route path="/chilli" element={<Navigate to="/red-chilli-exporter-india" replace />} />
        <Route path="/dry-red-chilli" element={<Navigate to="/red-chilli-exporter-india" replace />} />
        <Route path="/lal-mirch" element={<Navigate to="/red-chilli-exporter-india" replace />} />
        <Route path="/teja-chilli" element={<Navigate to="/teja-chilli-exporter-india" replace />} />
        <Route path="/bird-eye-chilli" element={<Navigate to="/bird-eye-chilli-exporter-india" replace />} />
        <Route path="/king-chilli" element={<Navigate to="/king-chilli-exporter-india" replace />} />
        <Route path="/bhut-jolokia" element={<Navigate to="/king-chilli-exporter-india" replace />} />
        <Route path="/psyllium" element={<Navigate to="/psyllium-husk-exporter-india" replace />} />
        <Route path="/curry-leaf" element={<Navigate to="/products" replace />} />
        <Route path="/curry-leaves" element={<Navigate to="/products" replace />} />
        <Route path="/curry-leaf-exporter-india" element={<Navigate to="/products" replace />} />
        <Route path="/dehydrated-onion" element={<Navigate to="/products" replace />} />
        <Route path="/dehydrated-onion-exporter-india" element={<Navigate to="/products" replace />} />
        <Route path="/dehydrated-garlic" element={<Navigate to="/products" replace />} />
        <Route path="/dehydrated-garlic-exporter-india" element={<Navigate to="/products" replace />} />

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
