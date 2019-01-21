
//DataService for sending data between components
import { Injectable } from '@angular/core';  
  
@Injectable()  
export class DataService {  
  
  private data = {};  
  
  //setter
  setOption(option, value) { 
    this.data[option] = value;  
  }  
  //getter
  getOption() {  
    return this.data;  
  }  
}  
