import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

//AdUnitService, all other Services for accessing the database are build the same
//adunit.route.js is the "backend" of this service with all functionalities
export class AdunitService {

  uri = 'http://localhost:4000/adunits'; //all Adunits can be seen here

  constructor(private http: HttpClient) { }

  //add an AdUnit
  addAdUnit(save_name, result_final,result_1,result_2,result_3,value_array,project,user) {
    const obj = {
      save_name: save_name,
      result_final: result_final,
      result_1: result_1,
      result_2: result_2,
      result_3: result_3,
      value_array: value_array,
      project: project,
      user:user
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Adding Done'));
  }
  //get all AdUnits from Data-base
  getAdUnits() {
    return this
           .http
           .get(`${this.uri}`); 
  }
  //edit AdUnit with ID="id"
  editAdUnit(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }
  //update AdUnit with ID="id"
  updateAdUnit(save_name,result_final,result_1,result_2,result_3,value_array,project,user, id) {
    const obj = {
      save_name: save_name,
      result_final: result_final,
      result_1: result_1,
      result_2: result_2,
      result_3: result_3,
      value_array: value_array,
      project:project,
      user:user
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Update Done'));
  }
  //delete AdUnit with ID="id"
  deleteAdUnit(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
