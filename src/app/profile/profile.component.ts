import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { OktaSDKAuthService } from '../shared/okta-auth.service';
import { OktaAuth } from '@okta/okta-auth-js'
import { OktaConfigService } from "../shared/okta-config.service";
import { OktaGetTokenService } from '../shared/okta-get-token.service';
import { ApiService } from '../shared/api.service';
import { getEmail } from '@okta/okta-auth-js';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {

  constructor(
    private OktaGetTokenService: OktaGetTokenService,
    private OktaSDKAuthService: OktaSDKAuthService,
    private OktaConfigService: OktaConfigService,
    private ApiService: ApiService,
  ) {
    this.myTokens = false;
  }

  public authService = new OktaAuth(this.OktaSDKAuthService.config);
  strUserSession;
  strThisUser;
  strFullName;
  myAccessToken;
  myIdToken;
  colTokens;
  myTokens;

  async ngOnInit() {
    this.strUserSession = await this.authService.isAuthenticated();
    switch (this.strUserSession == true) {
      case false:
        window.location.replace(this.OktaConfigService.strPostLogoutURL);
      case true: {
        ////////////////////////////////////////
        // user is logged in
        this.strThisUser = await this.authService.token.getUserInfo()
        this.myAccessToken = await this.OktaGetTokenService.GetAccessToken()
        this.myIdToken = await this.authService.tokenManager.getTokens()
        this.colTokens = await this.authService.tokenManager.getTokens();
        console.log(this.strThisUser)
        console.log(this.myAccessToken)
        console.log(this.myIdToken.idToken)
        this.myTokens = await true;
        try {
        } catch (e) {

        }

        break;
      }
    }
  }

  // apiRes;
  // newEmail;
  // async getEmail() {

  //   // this.apiRes = await "";
  //   this.newEmail = {
  //     "profile": {
  //       "email": "kent.nagao+abcdef@okta.com"
  //     },
  //     "role": "PRIMARY",
  //     "sendEmail": false,
  //   }

  //   this.apiRes = await "";
  //   this.apiRes = await this.ApiService.oktaApiCall("POST", this.OktaConfigService.strBaseURI + 'idp/myaccount/emails/', this.myAccessToken.accessToken, this.newEmail)

  //   await console.log(this.apiRes)

  //   this.apiRes = await this.ApiService.oktaApiCall("GET", this.OktaConfigService.getEmailUri, this.myAccessToken.accessToken)

  //   await console.log(this.apiRes)
  //   localStorage.setItem('delMailId', JSON.stringify(this.apiRes[0].id))
  //   localStorage.setItem('nextEmailId', JSON.stringify(this.apiRes[1].id))
  //   localStorage.setItem('nextEmailChallenge', JSON.stringify(this.apiRes[1]._links.challenge.href))

  //   this.apiRes = await this.ApiService.oktaApiCall("POST", this.apiRes[1]._links.challenge.href, this.myAccessToken.accessToken)

  //   window.location.replace('/verify')

  //   // this.apiRes = await this.ApiService.oktaApiCall("POST", this.OktaConfigService.getEmailUri + "/" + this.apiRes[0].id + "/challenge", this.myAccessToken.accessToken, this.primEmail)
  //   await console.log(this.apiRes)





  //   // this.apiRes = await "";


  //   // this.apiRes = await this.OktaSDKAuthService.OktaSDKAuthClient.myaccount.getEmails();



  //   // localStorage.setItem('emailId',JSON.stringify(this.apiRes[0]))



  //   // // await console.log(this.apiRes)

  //   // this.apiRes = await "";



  //   // this.apiRes = await this.ApiService.oktaApiCall("POST", this.OktaConfigService.strBaseURI + 'idp/myaccount/emails/' + this.apiRes[1].id +'/challenge', this.myAccessToken.accessToken, this.primEmail)



  //   // await localStorage.setItem('emailVerify',JSON.stringify(this.apiRes));

  // }

}
