import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editproject',
  templateUrl: './editproject.component.html',
  styleUrls: ['./editproject.component.css']
})
export class EditprojectComponent implements OnInit {
  projects: any = {};  
  angForm: FormGroup;
  user: String;

  constructor(private projectservice: ProjectService,private fb: FormBuilder,public snackBar: MatSnackBar,private route: ActivatedRoute,
    private router: Router,) {
      this.createForm();
     }

  ngOnInit() {
    //get project with id from url
    this.route.params.subscribe(params => {
      this.projectservice.editProject(params['id']).subscribe(res => {
        this.projects = res;
      });
    });    
    this.user =JSON.parse(localStorage.getItem('token'))._id;    
  }

  updateProject(name, comment) {
    this.route.params.subscribe(params => {
        this.projectservice.updateProject(name, comment,this.user,params['id']);
        this.router.navigate(['projects']); 
    });
  }

  createForm() {
    this.angForm = this.fb.group({
     name: ['', Validators.required ],
     comment: ['', Validators.required ],
   });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, "wurde aktualisiert...", {
      duration: 2000,
    });
  }
}
