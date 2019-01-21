import { Component,OnInit,Inject,ViewChild } from '@angular/core';
import { ProjectService } from '../project.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatTableDataSource} from '@angular/material';
import { Project } from '../project';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { DataService } from '../data.service';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];   
  angForm: FormGroup;
  user: String;
 
  //for mat table
  dataSource = new MatTableDataSource(this.projects);
  displayedColumns: string[] = ['Name', 'Kommentar','Bearbeiten','Tests_anzeigen','Löschen'];

 
  constructor(private service: DataService,private projectservice: ProjectService,public dialog: MatDialog) {      
  } 
  
  ngOnInit() {   
    this.projectservice
      .getProjects()
      .subscribe((data: Project[]) => {
      this.projects = data;
    });
    this.user =JSON.parse(localStorage.getItem('token'))._id;  
       
  }
  passprojectname(name){
    this.service.setOption('projectname', name);  
    console.log("passing:  "+name);
  }

  openDialog(id,name): void {
    const dialogRef = this.dialog.open(DeleteProjdialog, {
           
      data: {name: [name], id:[id]
      }
    });
  } 
  
  openNewDialog(): void {
    const dialogRef = this.dialog.open(CreateProjdialog);
  } 
  
}

//Deletedialog component
@Component({
  selector: 'DeleteProjdialog',
  templateUrl: './DeleteProjdialog.html',
  styleUrls: ['./DeleteProjdialog.css']
})
export class DeleteProjdialog  {
  constructor(private projectservice: ProjectService, @Inject(MAT_DIALOG_DATA) public data: any,  public dialogRef: MatDialogRef<DeleteProjdialog>) {}
  projects: Project[]; 

  openLink(event: MouseEvent): void {
    this.dialogRef.close();
  }  
 

  deleteProject(id) {
    this.projectservice.deleteProject(id).subscribe(res => {
      console.log('Deleted');
    });
    window.location.reload();
  }  
  
  
}

//CreateDialog component
@Component({
  selector: 'CreateProjdialog',
  templateUrl: './CreateProjdialog.html',
  styleUrls: ['./DeleteProjdialog.css']
})
export class CreateProjdialog implements OnInit  {
  constructor(private fb: FormBuilder,private projectservice: ProjectService, @Inject(MAT_DIALOG_DATA) public data: any,   
  public dialogRef: MatDialogRef<CreateProjdialog>) {
    this.createForm(); 
  }
  projects: Project[]; 
  angForm: FormGroup;
  user: String;

  ngOnInit() {   
    this.projectservice
      .getProjects()
      .subscribe((data: Project[]) => {
      this.projects = data;
    });
    this.user =JSON.parse(localStorage.getItem('token'))._id;    
  }

  createForm() {
    this.angForm = this.fb.group({
     name: ['', Validators.required ],
     comment: ['', Validators.required ],
   });
  }

  openLink(event: MouseEvent): void {
    this.dialogRef.close();
  }

  addProject(name,comment) {
    this.projectservice.addProject(name,comment,this.user);   
    window.location.reload();
  }

  
}