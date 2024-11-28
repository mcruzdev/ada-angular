import { AuthConfig } from "angular-oauth2-oidc";

export const auth: AuthConfig = {
  issuer: "https://accounts.google.com",
  redirectUri: window.location.origin,
  clientId:
    "674104770781-sq18c3luj6vi3tnja8vmagp4krfjaeur.apps.googleusercontent.com",
  strictDiscoveryDocumentValidation: false,
  responseType: "code",
  scope: "openid profile email",
};
