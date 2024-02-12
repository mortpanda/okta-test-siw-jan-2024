import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { OktaAuth } from "@okta/okta-auth-js";
import { BehaviorSubject } from "rxjs";
import OktaSignIn from '@okta/okta-signin-widget';
import { OktaConfigService } from "./okta-config.service";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class OktaWidgetService {
  private authClient = new OktaAuth({
    issuer: this.OktaConfig.strIssuer,
    clientId: this.OktaConfig.strClientID,
  });
  public isAuthenticated = new BehaviorSubject<boolean>(false);
  public strstateToken;
  public oktaSignIn;
  public idToken;
  public LogoutURI = this.OktaConfig.strPostLogoutURL;

  constructor(
    private router: Router,
    private OktaConfig: OktaConfigService,
    private ApiService: ApiService,
  ) { }

  
  async login(redirecturi, strstate?,intOtp? ) {
    const OktaClientID = this.OktaConfig.strClientID;
    const OktaBaseURI = this.OktaConfig.strBaseURI;
    const OktaLang = this.OktaConfig.strLang;
    const OktaRedirect = redirecturi;
    const OktaBrand = this.OktaConfig.strBrand;
    const OktaIssuer = this.OktaConfig.strIssuer;
    const OktaScope = this.OktaConfig.strScope;
    const OktaLogo = this.OktaConfig.strLogo;
    const OktaPostLogout = this.OktaConfig.strPostLogoutURL;

    var widgetConfig = ({
      clientId: OktaClientID,
      baseUrl: OktaBaseURI,
      issuer: OktaIssuer,
      redirectUri: OktaRedirect,
      colors: {
        // brand: OktaBrand,
      },
      // stateToken: strStateToken,
      state: strstate,
      otp: intOtp,
      features: {
        selfServiceUnlock: true,
        router: true,
      },
      helpLinks: {
        // help: 'https://acme.com/help',
        // forgotPassword: OktaPostLogout + "reset",
        // unlock: 'https://acme.com/unlock-account',
      },
      authParams: {
        issuer: OktaIssuer,
        scopes: OktaScope,
      },
      // token: activationToken,
      // language: 'ja',
      // i18n: {
      //   // Overriding Japanese properties
      //   'ja': {
      //     'password.reset.revokeSessions': 'サインインしているすべてのデバイスからサインアウト',
      //   }
      // },
      // helpLinks: {
      //   forgotPassword: 'https://okta.com',
      // },



      // password.reset.revokeSessions

      // customButtons: [{
      //   title: '契約社員専用ログイン',
      //   className: 'btn-customAuth',
      //   click: () => {
      //     // clicking on the button navigates to another page
      //     window.location.href = 'https://www.example.com';
      //   }
      // }],
    })
    // console.log("OTP code : " + intOtp);
    // console.log("State token : " + strState);
    var oktaSignIn = new OktaSignIn(widgetConfig);
    console.log(OktaScope);
    // *****************************************************************************
    // This will display the context in the console.
    // *****************************************************************************
    await oktaSignIn.on('afterRender', function (context, error) {
      console.log(context.controller);
    });
    // *****************************************************************************
    // *****************************************************************************
   oktaSignIn.on('afterRender', function (context) {
      if (context.controller == 'password-reset') {



    //     let element: HTMLElement = document.getElementsByClassName('button')[0] as HTMLElement;
    //     element.remove();

    //     // 1. Create the button
    //     var newButton: HTMLElement = document.createElement("button");
    //     newButton.setAttribute('class', 'button button-primary');
    //     newButton.innerHTML = "Custom Btn : パスワードをリセットする";

    //     // 2. Append somewhere
    //     var btnHolder: HTMLElement = document.getElementsByClassName('o-form-button-bar')[0] as HTMLElement;
    //     btnHolder.appendChild(newButton);

    //     var userEmail: HTMLElement =  document.getElementsByTagName("input")[0] as HTMLElement;
    //     console.log(userEmail)


    //     // // 3. Add event handler
    //     newButton.addEventListener("click", function ()   {
    //       alert('here')
    //       // alert(JSON.stringify(userEmail))
    //       // // alert("did something");
    //       // const thisFetch = fetch("https://okta.com", {
    //       //   method: "POST",
    //       //   headers: {
    //       //     'Content-Type': 'application/json',
    //       //     // 'Authorization': 'Bearer ' + token,
    //       //     'Accept': 'application/json',
    //       //   },
    //       })
    //       //   .then(response => response.json())
    //       // let responseJson = thisFetch;
    //       // console.log(responseJson)
    //       // return responseJson

    //     // });
        
      }
    }
    )
    await oktaSignIn.showSignInToGetTokens({
      
      el: '#okta-signin-container'
    }).then(function (tokens) {
      oktaSignIn.authClient.tokenManager.setTokens(tokens);
      // oktaSignIn.remove();
      const idToken = tokens.idToken;
      const strTokens = JSON.stringify(tokens)
      console.log("Hello, " + idToken.claims.email + "! You just logged in! :)");
      window.location.replace(OktaRedirect);
      return true;
    })    
    .then(function success(res) {
      console.log(res);
    })
    .catch(function (err) {
      console.error(err);
      return false;
    });
    
  }


  

  CloseWidget() {
    const OktaClientID = this.OktaConfig.strClientID;
    const OktaBaseURI = this.OktaConfig.strBaseURI;
    const OktaLang = this.OktaConfig.strLang;
    const OktaRedirect = this.OktaConfig.strRedirectURL;
    const OktaBrand = this.OktaConfig.strBrand;
    const OktaIssuer = this.OktaConfig.strIssuer;
    const OktaScope = this.OktaConfig.strScope;
    var oktaSignIn = new OktaSignIn({

      clientId: OktaClientID,
      baseUrl: OktaBaseURI,
      language: OktaLang,
      redirectUri: OktaRedirect,
      colors: {
        brand: OktaBrand,
      },
      authParams: {
        issuer: OktaIssuer,
        scopes: OktaScope,
      },
      useInteractionCodeFlow: true,
    });
    oktaSignIn.remove();

  }

  test() {
    console.log("test")
  }

}

