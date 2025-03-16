import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Auth0ProviderWithNavigate = ({ children }) => {
  const navigate = useNavigate();

  // Environment variables for Auth0 configuration
  const domain = import.meta.env.VITE_AUTH0_DOMAIN || "grwaywolf.us.auth0.com";
  const clientId =
    import.meta.env.VITE_AUTH0_CLIENT_ID || "VgOPbgun1mGvzkdybBKUr0Gz3rU90R0A";
  const redirectUri =
    import.meta.env.VITE_AUTH0_CALLBACK_URL || "https://jimmypatel.tech";
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE || "jimmypatel.tech";

  // Log an error if any environment variables are missing
  if (!domain || !clientId || !redirectUri || !audience) {
    console.error("Environment variables:", { domain, clientId, redirectUri, audience });
    throw new Error(
      "Missing required Auth0 environment variables. Please check your configuration."
    );
  }

  // Handle the redirect callback after authentication
  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || "/auth-callback"); // Redirect to the callback page after successful login
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
        audience: audience, // Added audience for API access
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
