import { AuthConfig } from "angular-oauth2-oidc";

export const auth: AuthConfig = {
  issuer: "https://accounts.google.com",
  redirectUri: window.location.origin,
  clientId:
    "674104770781-bh8jde9u312l89uqm5eq9rdnsrfomrue.apps.googleusercontent.com",
  strictDiscoveryDocumentValidation: false,
  scope: "openid profile email",
};
