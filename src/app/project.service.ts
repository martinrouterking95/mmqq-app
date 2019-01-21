import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  
  uri = 'http://localhost:4000/projects';

  constructor(private http: HttpClient) { }

  addProject(name,comment,user) {
    const obj = {
      name: name,
      comment:comment,
      user:user   
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Adding Done'));
  }

  getProjects() {
    return this
           .http
           .get(`${this.uri}`);
  } 

 

  editProject(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  updateProject(name,comment,user,id) {

  const obj = {
    name: name,
    comment:comment,
    user:user   
  };
  this
    .http
    .post(`${this.uri}/update/${id}`, obj)
    .subscribe(res => console.log('Update Done'));
  }

  deleteProject(id) {
    return this
      .http
      .get(`${this.uri}/delete/${id}`);
  }
}
