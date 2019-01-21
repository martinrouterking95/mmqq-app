import { Component,OnInit } from '@angular/core';
import { DataService } from "../data.service";  
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AdUnit } from '../savedfiles/AdUnit';
import { AdunitService } from './../adunit.service';
import {MatSnackBar} from '@angular/material';
import { ProjectService } from '../project.service';
import { Project } from '../project';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']  
})
export class ResultsComponent implements OnInit {  
public savename: string="";
public data; 
angForm: FormGroup;
adunits: AdUnit[];
currentuser:string;
user:string;
projects: Project[];

constructor(private service: DataService,private adunitservice: AdunitService,private projectservice: ProjectService, private fb: FormBuilder,public snackBar: MatSnackBar) {      
  this.data = service.getOption();  
  this.createForm();
} 

saveData(): void{    
  console.log("saving Data...");
  this.service.setOption('data', this.data); 
}  



  createForm() {
    this.angForm = this.fb.group({
      save_name: ['', Validators.required ],
      result_final: ['', Validators.required ],
      result_1: ['', Validators.required ],
      result_2: ['', Validators.required ],
      result_3: ['', Validators.required ],
      value_array: ['', Validators.required ],
      project: ['', Validators.required ]
   });
  }

  addAdUnit(save_name, result_final, result_1, result_2,result_3,value_array,project) {
    this.adunitservice.addAdUnit(save_name, result_final, result_1, result_2, result_3,value_array,project,this.user);
  }
  ngOnInit() {
    this.adunitservice
      .getAdUnits()
      .subscribe((data: AdUnit[]) => {
         this.adunits = data;
     });
    this.projectservice
      .getProjects()
      .subscribe((data: Project[]) => {
        this.projects = data;
      });
    this.currentuser=localStorage.getItem('token');
    this.user =JSON.parse(localStorage.getItem('token'))._id;    
  } 

  getMult(qty) {
    const sum = qty * 10;
    return sum;
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, "wurde gespeichert...", {
      duration: 2000,
    });
  }
} 
