import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

const BASE_URL = 'http://localhost:3000/users/'
const header = {headers: new Headers({'Content-Type': 'application/json'})}


@Injectable()
export class AuthenticationService {
  constructor(private http: Http) { }

  login(username: string, password: string) {
    return this.http.get(BASE_URL)
      .map(res => {
        console.log(res.json());

        let userData = res.json();
        var authUser = userData.find((user)=> user.username === username && user.password ===password);

        if(authUser){
          localStorage.setItem('currentUser', JSON.stringify(authUser));
          console.log(authUser);
        }
        return authUser;
      })

  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
