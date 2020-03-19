import { Injectable } from '@angular/core';
import {from, Observable} from 'rxjs';
import {delay, tap} from 'rxjs/operators';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false; // L'utilisateur est-il connecté?
  redirectUrl: string; // où rediriger l'utilisateur après authentification?
  // une méthode de connexion
  login(name: string, password: string): Observable<boolean> {
    // Faites votre appel à un service d'authentification...
    let isLoggedIn = (name === 'admin' && password === 'admin');

    return from([true]).pipe(delay(1000), tap(val => this.isLoggedIn = isLoggedIn));
    // return Observable.of(true).delay(1000).do(val => this.isLoggedIn = isLoggedIn);
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
