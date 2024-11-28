import { AuthConfig } from "angular-oauth2-oidc";

export const auth: AuthConfig = {
  issuer: "https://accounts.google.com",
  redirectUri: window.location.origin,
  clientId: "",
  strictDiscoveryDocumentValidation: false,
  scope: "openid profile email",
};
