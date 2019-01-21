import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AdunitService } from './../adunit.service';
import {MatSnackBar} from '@angular/material';
import { ProjectService } from '../project.service';
import { Project } from '../project';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
  
  adunit: any = {}; //initialize an empty array
  angForm: FormGroup; 
  user:string;
  projects: Project[]; //initialize an array with Project Interface

  //constructor with dependency injections, which are imported above
  constructor(private route: ActivatedRoute,
    private router: Router,
    private adunitservice: AdunitService,
    private fb: FormBuilder,
    public snackBar: MatSnackBar,
    private projectservice:ProjectService) {
      this.createForm();
    }

    ngOnInit() {
      //get user_id stored in local storage
      this.user =JSON.parse(localStorage.getItem('token'))._id;  
      //get adunit with id from url
      this.route.params.subscribe(params => {
        this.adunitservice.editAdUnit(params['id']).subscribe(res => {
          this.adunit = res; 
      });
      });
      //get all projects
      this.projectservice
      .getProjects()
      .subscribe((data: Project[]) => {
      this.projects = data;
       });       
    }
    
    //function for correct visualisation of the adunit_value in mat_progress_bar (maxvalue can only be set to 100, but needs to be 10)
    //so Adunit_value is multiplied by 10
    getMult(qty) {
      const sum = qty * 10;
      return sum;
    }

    //initialize Formular
    createForm() {
      this.angForm = this.fb.group({
            save_name: ['', Validators.required ],
            project: ['', Validators.required ]
         });
      }
    
      
    updateAdUnit(save_name, result_final,result_1,result_2,result_3,value_array,project) {
         this.route.params.subscribe(params => {
          this.adunitservice.updateAdUnit(save_name, result_final,result_1,result_2,result_3, value_array ,project,this.user,params['id']);
          this.router.navigate(['savedfiles']); //router command to navigate to savedfiles-view
      });
    }
    //optional: only use for changeable values
    calculateupdated(){
      this.adunit.result_1 =(this.adunit.value_array[0].value + this.adunit.value_array[1].value + this.adunit.value_array[3].value + this.adunit.value_array[4].value 
      + this.adunit.value_array[5].value + this.adunit.value_array[6].value + this.adunit.value_array[23].value)/7;
      this.adunit.result_2 =(this.adunit.value_array[2].value +this.adunit.value_array[7].value + this.adunit.value_array[8].value + this.adunit.value_array[9].value 
      + this.adunit.value_array[10].value + this.adunit.value_array[11].value + this.adunit.value_array[12].value + this.adunit.value_array[13].value+
      this.adunit.value_array[22].value)/9;
      this.adunit.result_3 =(this.adunit.value_array[14].value + this.adunit.value_array[15].value + this.adunit.value_array[16].value + this.adunit.value_array[17].value 
      + this.adunit.value_array[18].value + this.adunit.value_array[19].value +this.adunit.value_array[20].value + this.adunit.value_array[21].value)/8;   
      this.adunit.result_final=(this.adunit.result_1 + this.adunit.result_2 +this.adunit.result_3)/3; 
      console.log("updated final: "+this.adunit.result_final);
      return this.adunit.result_1,this.adunit.result_2,this.adunit.result_3, this.adunit.result_final;    
    }   

    openSnackBar(message: string) {
      this.snackBar.open(message, "wurde geändert...", {
        duration: 2000,
      });
    }
    
}
