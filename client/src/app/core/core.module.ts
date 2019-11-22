import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CoreRoutingModule } from './core-routing.module';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { AuthenticationService } from './services/auth/authentication.service';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { NotfoundComponent } from './notfound/notfound.component'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RegistrationService } from './services/registration/registration.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    CoreRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    RegistrationComponent,
    NotfoundComponent
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthenticationService,
    AuthGuardService,
    RegistrationService
  ]
})
export class CoreModule { }
