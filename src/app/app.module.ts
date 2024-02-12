import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonModule } from 'primeng/button';
import { DockModule } from 'primeng/dock';
import { DockComponent } from '../app/shared/dock/dock.component';
import { PrimeIcons } from 'primeng/api';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import {ToolbarModule} from 'primeng/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VerifyComponent } from './verify/verify.component';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProfileComponent,
    DockComponent,
    VerifyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    ButtonModule,
    DockModule,
    NgxJsonViewerModule,
    ToolbarModule,
    BrowserAnimationsModule,
    CardModule,
    DividerModule,
    FormsModule,
    InputTextModule,
    ToastModule,
    

  ],
  providers: [MessageService,ProfileComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
