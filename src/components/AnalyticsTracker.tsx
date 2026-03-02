import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const AnalyticsTracker = () => {
  const location = useLocation();
  const measurementId = import.meta.env.VITE_GA4_MEASUREMENT_ID as string | undefined;

  useEffect(() => {
    if (!measurementId) {
      return;
    }

    if (!document.getElementById("ga4-script")) {
      const script = document.createElement("script");
      script.id = "ga4-script";
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script);
    }

    window.dataLayer = window.dataLayer ?? [];
    window.gtag =
      window.gtag ??
      ((...args: unknown[]) => {
        window.dataLayer?.push(args);
      });

    window.gtag("js", new Date());
    window.gtag("config", measurementId, { anonymize_ip: true });
  }, [measurementId]);

  useEffect(() => {
    if (!measurementId || !window.gtag) {
      return;
    }

    const pagePath = `${location.pathname}${location.search}`;
    window.gtag("config", measurementId, { page_path: pagePath });
  }, [location.pathname, location.search, measurementId]);

  return null;
};

export default AnalyticsTracker;
