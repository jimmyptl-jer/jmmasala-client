import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls after client-side navigation: to the element named by the URL hash (for example
 * #inquiry-form), otherwise to the top of the page. The first render is left to the browser,
 * which already handles hashes and scroll restoration on a full page load.
 */
const RouteScroll = () => {
  const { key, hash } = useLocation();
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    let id = hash.slice(1);
    try {
      id = decodeURIComponent(id);
    } catch {
      // keep the raw value
    }
    // The target is part of the page that has just been rendered; one frame later covers lazy sections.
    const frame = window.requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView();
      else window.scrollTo(0, 0);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [key, hash]);

  return null;
};

export default RouteScroll;
