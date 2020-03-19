import { Component } from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private  authService: AuthService, private router: Router) {
  }

  logout() {
    this.authService.logout();
  }

  getAuthService(): AuthService {
    return this.authService;
  }

  goMain() {
    this.router.navigate(['/pokemon/all']);
  }
}
