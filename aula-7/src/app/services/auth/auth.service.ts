import { Injectable } from "@angular/core";
import { OAuthService } from "angular-oauth2-oidc";

import { auth as config } from "./auth.config";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private readonly oauth2Service: OAuthService,
    private readonly httpClient: HttpClient
  ) {
    // this.oauth2Service.configure(config);
    // this.oauth2Service.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.oauth2Service.initLoginFlow();
  }

  logout() {
    this.oauth2Service.logOut();
  }

  get googleUserProfile() {
    const url = "https://www.googleapis.com/oauth2/v2/userinfo";

    return this.httpClient.get(url, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
  }

  get identityClaims() {
    return this.oauth2Service.getIdentityClaims();
  }

  get accessToken() {
    return this.oauth2Service.getAccessToken();
  }
}
