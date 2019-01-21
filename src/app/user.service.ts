import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  uri = 'http://localhost:4000/user';

  constructor(private http: HttpClient) { }

  addUser(first_name, last_name,login_name, password) {
    const obj = {
      first_name: first_name,
      last_name:last_name,
      login_name:login_name,
      password:password,     
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Adding Done'));
  }

  getUsers() {
    return this
           .http
           .get(`${this.uri}`);
  } 

  editUser(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  updateUser(first_name, last_name,login_name, password,id) {

  const obj = {
    first_name: first_name,
    last_name:last_name,
    login_name:login_name,
    password:password  
  };
  this
    .http
    .post(`${this.uri}/update/${id}`, obj)
    .subscribe(res => console.log('Update Done'));
  }

  deleteUser(id) {
    return this
      .http
      .get(`${this.uri}/delete/${id}`);
  }
}
