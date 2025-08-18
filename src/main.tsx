import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";

import { QueryClient, QueryClientProvider } from "react-query";
import App from "./AppRoutes";
import Auth0ProviderWithNavigate from "./auth/Auth0ProviderWithNavigate";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5, // Keep data fresh for 5 minutes
      cacheTime: 1000 * 60 * 10, // Remove unused data after 10 minutes
      retry: 2, // Retry failed queries twice before giving up
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen text-lg text-gray-500">Loading... Please wait.</div>}>
      <Router>
        <QueryClientProvider client={queryClient}>
          <Auth0ProviderWithNavigate>
            <App />
          </Auth0ProviderWithNavigate>
        </QueryClientProvider>
      </Router>
    </Suspense>
  </StrictMode>
);
