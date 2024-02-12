import { Component, OnInit } from '@angular/core';
import { OktaWidgetService } from '../shared/okta-widget.service';
import { OktaConfigService } from '../shared/okta-config.service';
import { ViewEncapsulation } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';



@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingComponent {
  
  constructor(
    private OktaWidgetService: OktaWidgetService,
    private OktaConfigService: OktaConfigService,
  ) {  }
    async ngOnInit() {
    await this.OktaWidgetService.CloseWidget();
    await this.OktaWidgetService.login(this.OktaConfigService.strRedirectURL);
  }

}
