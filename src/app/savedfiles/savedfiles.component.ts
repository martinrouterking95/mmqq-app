import { Component,OnInit,Inject,ViewChild } from '@angular/core';
import { AdUnit } from './AdUnit';
import { AdunitService } from './../adunit.service';
import {MatSort,MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatTableDataSource} from '@angular/material';



@Component({
  selector: 'app-savedfiles',
  templateUrl: './savedfiles.component.html',
  styleUrls: ['./savedfiles.component.css']
})



export class SavedfilesComponent implements OnInit  {  
  adunits: AdUnit[];   
  user:string;
  currentuser:string;
  //für mat table
  dataSource = new MatTableDataSource(this.adunits);

  displayedColumns: string[] = ['Name', 'Endergebnis','Bearbeiten','Tabelle_anzeigen','Löschen'];

  @ViewChild(MatSort) sort: MatSort;
 
  
  constructor(private adunitservice: AdunitService, public dialog: MatDialog) {   
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
  templateUrl: './Deletedialog.html',
  styleUrls: ['./Deletedialog.css']
})
export class Deletedialog  {
  constructor(private adunitservice: AdunitService, @Inject(MAT_DIALOG_DATA) public data: any,  public dialogRef: MatDialogRef<Deletedialog>) {}
  adunits: AdUnit[]; 

  openLink(event: MouseEvent): void {
    this.dialogRef.close();
  }
  
  reloadpage(){
    window.location.reload();
  }
  deleteAdUnit(id) {
    this.adunitservice.deleteAdUnit(id).subscribe(res => {
      console.log('Deleted');
    });
  }  
  
  
}
