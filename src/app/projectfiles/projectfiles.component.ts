import { Component,OnInit,Inject,ViewChild } from '@angular/core';
import { AdunitService } from './../adunit.service';
import {MatSort,MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatTableDataSource} from '@angular/material';
import { AdUnit } from '../savedfiles/AdUnit';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-projectfiles',
  templateUrl: './projectfiles.component.html',
  styleUrls: ['./projectfiles.component.css']
})


export class ProjectfilesComponent implements OnInit  {  
  adunits: AdUnit[];   
  user:string;
  currentuser:string;
  projectid:string;
  public data;

  //for mat table
  dataSource = new MatTableDataSource(this.adunits);

  displayedColumns: string[] = ['Name', 'Endergebnis','Bearbeiten','Tabelle_anzeigen','Löschen'];

  //optional: for sorting the table, not working yet
  @ViewChild(MatSort) sort: MatSort;
 
  
  constructor(private route: ActivatedRoute,private service: DataService,
    private router: Router,private adunitservice: AdunitService, public dialog: MatDialog) {   
      this.data = service.getOption();  
  } 

  openDialog(id,name): void {
    const dialogRef = this.dialog.open(Deletedialog, {
           
      data: {name: [name], id:[id]
      }
    });
  } 
    

  deleteAdUnit(id) {
    this.adunitservice.deleteAdUnit(id).subscribe(res => {
      console.log('Deleted');
    });
  }  


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.projectid = params['id'];
    });
    this.adunitservice
      .getAdUnits()
      .subscribe((data: AdUnit[]) => {
      this.adunits = data;
    });
    this.user =JSON.parse(localStorage.getItem('token'))._id;
    this.currentuser =JSON.parse(localStorage.getItem('token')).login_name;    
    
  }
  
}

//Dialog component
@Component({
  selector: 'Deletedialog',
  templateUrl: '../savedfiles/Deletedialog.html',
  styleUrls: ['../savedfiles/Deletedialog.css']
})
export class Deletedialog  {
  constructor(private adunitservice: AdunitService, @Inject(MAT_DIALOG_DATA) public data: any,  public dialogRef: MatDialogRef<Deletedialog>,
  private route: ActivatedRoute, private router: Router) {}
  adunits: AdUnit[]; 

  openLink(event: MouseEvent): void {
    this.dialogRef.close();
  }
  
  deleteAdUnit(id) {
    this.adunitservice.deleteAdUnit(id).subscribe(res => {
      console.log('Deleted');
    });
    this.router.navigate(['projectfiles']);
  }  
  
  
}