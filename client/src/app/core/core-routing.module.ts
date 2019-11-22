import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './services/auth/auth-guard.service';
import { NotfoundComponent } from './notfound/notfound.component';

import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'portal',
    pathMatch: 'full',
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'portal',
    // canActivate: [AuthGuardService],
    loadChildren: '../portal/portal.module#PortalModule',
  },
  {
    path: 'registration',
    component: RegistrationComponent

  },
  {
    path: '**',
    component: NotfoundComponent
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
