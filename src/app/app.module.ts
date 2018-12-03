import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashComponent } from './dash/dash.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BlankComponent } from './blank/blank.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { HLoginComponent } from './h-login/h-login.component';
import { CitylistComponent } from './citylist/citylist.component';
import { HostComponent } from './host/host.component';
import { EntertainComponent } from './entertain/entertain.component';
import { SecurityComponent } from './security/security.component';
import { ELoginComponent } from './e-login/e-login.component';
import { SLoginComponent } from './s-login/s-login.component';
import { ApidetailsComponent } from './apidetails/apidetails.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { GlobalDirective,DateSuffix } from './global.directive';
import { ScannerComponent } from './scanner/scanner.component';
import { NailheadComponent } from './nailhead/nailhead.component';
import { EComponent } from './e/e.component';
import { FormsModule} from '@angular/forms';
import { GuestlistioComponent } from './guestlistio/guestlistio.component';
import { ModalComponent } from './modal/modal.component'


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashComponent,
    TopbarComponent,
    BlankComponent,
    EventsComponent,
    LoginComponent,
    HLoginComponent,
    CitylistComponent,
    HostComponent,
    EntertainComponent,
    SecurityComponent,
    ELoginComponent,
    SLoginComponent,
    ApidetailsComponent,
    ButtonsComponent,
    GlobalDirective,
    ScannerComponent,
    NailheadComponent,
    EComponent,
    DateSuffix,
    GuestlistioComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
