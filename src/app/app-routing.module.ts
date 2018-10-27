import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlankComponent } from "./blank/blank.component";
import { EventsComponent } from "./events/events.component";
import { LoginComponent } from "./login/login.component";
import { HLoginComponent } from "./h-login/h-login.component";
import { HostComponent } from "./host/host.component";
import { ELoginComponent } from "./e-login/e-login.component";
import { EntertainComponent } from "./entertain/entertain.component";
import { SLoginComponent } from "./s-login/s-login.component";
import { SecurityComponent } from "./security/security.component";
import { ApidetailsComponent } from "./apidetails/apidetails.component";
import { EComponent } from './e/e.component';

const routes: Routes = [
  {
    path: '',
    component: BlankComponent,
    pathMatch: 'full'
  },
   {
    path: "events/:location",
    component: EventsComponent
  },
  {
    path: 'e/:post_slug',
    component: EComponent
  },
  {
    path: 'blank',
    component: BlankComponent
  },
  {
    path: 'apidetails/:',
    component: ApidetailsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'hlogin',
    component: HLoginComponent
  },
  {
    path: 'host',
    component: HostComponent
  },
  {
    path: 'elogin',
    component: ELoginComponent
  },
  {
    path: 'entertain',
    component: EntertainComponent
  },
  {
    path: 'slogin',
    component: SLoginComponent
  },
  {
    path: 'security',
    component: SecurityComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
