import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGard } from './pokemon-module/services/auth-gard.service';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'login', component: LoginComponent }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGard,
    AuthService
  ]
})
export class LoginRoutingModule { }
