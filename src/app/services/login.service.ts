import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/User';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: User;
  logedIn = false;

  constructor(
    private httpClient: HttpClient
  ) { }

  authenticate(username, password) {
    const form = new FormData();
    form.append('username', username);
    form.append('password', password);

    return this.httpClient.post<User>('/login', form).pipe(
      map(
        userData => {
          sessionStorage.setItem('username', username);
          this.user = userData;
          this.logedIn = true;

          return userData;
        }
      )

    );
  }

  isUserLoggedIn() {
    const c = sessionStorage.getItem('username');

    return !(c === null);
  }

  logOut() {
    this.httpClient.post('/logout', {}).subscribe();
    sessionStorage.clear();
  }
}
