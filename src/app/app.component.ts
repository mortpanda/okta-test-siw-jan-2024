import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { ViewEncapsulation } from '@angular/core';
import { DockComponent } from '../app/shared/dock/dock.component';

//////////////////////
// import { OktaConfigService } from './shared/okta-config.service';
// import { OktaAuth } from "@okta/okta-auth-js";
//////////////////////



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  // private authClient = new OktaAuth({
  //   issuer: this.OktaConfigService.strIssuer,
  //   clientId: this.OktaConfigService.strClientID,
  //   redirectUri:this.OktaConfigService.strRedirectURL,
  // });


  smallScreen: boolean;
  constructor(
    private primengConfig: PrimeNGConfig,

    // private OktaConfigService: OktaConfigService,
  ) { }

  async ngOnInit() {
    this.primengConfig.ripple = true;

    // await this.authClient.signInWithRedirect()

  }

  // async Logout() {
  //   this.OktaSDKAuthService.OktaSDKAuthClient.signOut();
  // }

}


