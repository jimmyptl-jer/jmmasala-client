import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import { setCurrentPath } from "@/lib/originPath";

const MAX_FRAMES = 30;


/**
 * Scrolls after client-side navigation (PUSH or REPLACE): to the element named by the URL hash
 * (for example #inquiry-form) and moves focus to it when it is focusable, otherwise to the top.
 * POP (first render, Back, Forward) is left to the browser, which handles hashes and scroll
 * restoration itself.
 */
const RouteScroll = () => {
  const { key, hash, pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  useEffect(() => {
    if (navigationType === "POP") return;
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
    // The target is part of the page that has just been rendered, but lazy sections can arrive a few frames later.
    let frame = 0;
    let attempts = 0;
    const find = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView();
        if (el.tabIndex >= 0 || el.hasAttribute("tabindex")) el.focus({ preventScroll: true });
        return;
      }
      attempts += 1;
      if (attempts >= MAX_FRAMES) {
        window.scrollTo(0, 0);
        return;
      }
      frame = window.requestAnimationFrame(find);
    };
    frame = window.requestAnimationFrame(find);
    return () => window.cancelAnimationFrame(frame);
  }, [key, hash, navigationType]);

  return null;
};

export default RouteScroll;
