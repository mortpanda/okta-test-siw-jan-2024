import { Injectable } from '@angular/core';
import { hasInteractionCode } from '@okta/okta-auth-js';


@Injectable({
  providedIn: 'root'
})
export class OktaConfigService {
  constructor() { }

  
    strBaseURI = '{Org URL}';
    strRedirectURL = '{Redirect URL}';
    strClientID = '{Client ID}';
    strIssuer = '{Org URL}';
    strPostLogoutURL = '{Post Logout URL}';
    strScope = ['openid', 'email', 'profile'];
    strResponseType = ['token', 'id_token'];
    strResponseMode = 'fragment';
    strPrompt = 'login';
    strPkce = true;
    strLang = 'ja';
    strBrand = '#191919';
    strLogo = "assets/img/okta_logo_small.png";
    strMeEP = 'api/v1/users/me';

  
  
}

