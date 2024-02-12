import { Injectable } from '@angular/core';
import {
  OktaAuth,
  OktaAuthOptions,
  TokenManager,
  AccessToken,
  IDToken,
  UserClaims,
  TokenParams,
} from '@okta/okta-auth-js';
import { OktaConfigService } from './okta-config.service';


@Injectable({
  providedIn: 'root'
})
export class OktaSDKAuthService {
  constructor(private OktaConfigService: OktaConfigService) { }

  // config:OktaAuthOptions = {
  //     clientId: this.OktaConfigService.strClientID,
  //     issuer: this.OktaConfigService.strIssuer,
  //     redirectUri: this.OktaConfigService.strRedirectURL,
  //     postLogoutRedirectUri:this.OktaConfigService.strPostLogoutURL,
  //     scopes: this.OktaConfigService.strScope,
  // };

  config = {
    issuer: this.OktaConfigService.strIssuer,
    clientId: this.OktaConfigService.strClientID,
    redirectUri: this.OktaConfigService.strRedirectURL,
    scopes: this.OktaConfigService.strScope,
    useInteractionCodeFlow: true,
    postLogoutRedirectUri: this.OktaConfigService.strPostLogoutURL,
    // tokenManager: {
    //   storage: config.storage
    // },
    // transformAuthState
  };


  OktaSDKAuthClient = new OktaAuth(this.config);


}
