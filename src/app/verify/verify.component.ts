import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { OktaSDKAuthService } from '../shared/okta-auth.service';
import { OktaAuth } from '@okta/okta-auth-js'
import { OktaConfigService } from "../shared/okta-config.service";
import { OktaGetTokenService } from '../shared/okta-get-token.service';
import { ApiService } from '../shared/api.service';
import { getEmail } from '@okta/okta-auth-js';
import { MessageService } from 'primeng/api';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class VerifyComponent implements OnInit {

  constructor(
    private OktaGetTokenService: OktaGetTokenService,
    private OktaSDKAuthService: OktaSDKAuthService,
    private OktaConfigService: OktaConfigService,
    private ApiService: ApiService,
    private MessageService: MessageService,
    public ProfileComponent: ProfileComponent,

  ) { }
  public authService = new OktaAuth(this.OktaSDKAuthService.config);
  selectedMessage: any;
  strUserSession;
  strThisUser;
  strFullName;
  myAccessToken;
  myIdToken;
  colTokens;
  myTokens;
  myEmail;
  toastMsg;
  changeOtp;
  emailInfo;
  emailVerify;
  nextVerifyURI
  nextEmailId;
  apiRes;
  delMailId;
  nextChallengeURI;

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
        this.nextEmailId = JSON.parse(localStorage.getItem('nextEmailId'))
        this.nextChallengeURI = JSON.parse(localStorage.getItem('nextEmailChallenge'))
        this.delMailId = JSON.parse(localStorage.getItem('delMailId'))
        console.log(this.nextEmailId)
        console.log(this.nextVerifyURI)
        // console.log(this.strThisUser)
        // console.log(this.myAccessToken)
        // console.log(this.myIdToken.idToken)
        this.myTokens = await true;
        try {
        } catch (e) {

        }

        break;
      }
    }
  }


  primEmail;
  async getEmail() {
    // this.apiRes = await this.ApiService.oktaApiCall("GET", this.OktaConfigService.getEmailUri, this.myAccessToken.accessToken)
    this.primEmail = await this.OktaSDKAuthService.OktaSDKAuthClient.myaccount.getEmails();
    console.log(this.primEmail);
  }


//   this.nextEmailId = JSON.parse(localStorage.getItem('nextEmailId'))
// this.nextVerifyURI = JSON.parse(localStorage.getItem('nextEmailVerify'))
  async postVerify() {
  await console.log(this.changeOtp)
  this.apiRes = await "";
  this.emailVerify = {
    verificationCode: this.changeOtp,
  },


    // this.apiRes = await this.ApiService.oktaApiCall("POST", this.nextVerifyURI, this.myAccessToken.accessToken)
    this.apiRes = await this.ApiService.oktaApiCall("POST", this.nextChallengeURI, this.myAccessToken.accessToken)

    
  await console.log(this.apiRes)
  this.apiRes = await this.ApiService.oktaApiCall("POST", this.apiRes._links.verify.href, this.myAccessToken.accessToken, this.emailVerify)
}


showSuccess() {
  this.MessageService.add({ severity: 'success', summary: 'Success', detail: this.toastMsg });
}

showError() {
  this.MessageService.add({ severity: 'error', summary: 'Error', detail: this.toastMsg });
}
onReject() {
  this.MessageService.clear('c');
}

}


// this.apiRes.id