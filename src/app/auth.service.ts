import { Injectable } from '@angular/core';

//Auth-Service for logout-function only
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  logout(): void {
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem('token');
    console.log("logout erfolgreich");
  } 

}
