import { useEffect, useState } from "react";

const STORAGE_KEY = "jm_cookie_consent_v1";

const CookieConsentBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    setVisible(saved !== "accepted");
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <aside className="fixed inset-x-4 bottom-4 z-50 rounded-xl border border-amber-200 bg-white p-4 shadow-2xl sm:inset-x-auto sm:right-4 sm:w-[420px]">
      <p className="text-sm text-stone-700">
        We use cookies for analytics, performance, and improving your experience.
        By continuing, you agree to our cookie use policy.
      </p>
      <button
        type="button"
        onClick={acceptCookies}
        className="mt-3 rounded-md bg-amber-600 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-700"
      >
        Accept Cookies
      </button>
    </aside>
  );
};

export default CookieConsentBanner;
