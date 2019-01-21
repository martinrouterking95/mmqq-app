import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { User} from '../User';
import { UserService } from './../user.service';
import {MatSnackBar,MatDialog,MatDialogRef} from '@angular/material';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router,private userservice: UserService, private fb: FormBuilder,public snackBar: MatSnackBar,public dialog: MatDialog) { 
    this.createForm();
  }

  hide = true;
  loginForm: FormGroup;
  message: string;
  users: User[];
  currentuser:string;
  currentuserid:Number;
  currentusername:string;
  currentuserfirstname:string;
  currentuserlastname:string;

  ngOnInit() {   
    //get all Users
    this.userservice
     .getUsers()
     .subscribe((data: User[]) => {
     this.users = data;
    });  
    //get current_user data
    this.currentuser =localStorage.getItem('token');
    this.currentusername=JSON.parse(this.currentuser).login_name;
    this.currentuserid=JSON.parse(this.currentuser)._id;
    this.currentuserfirstname=JSON.parse(this.currentuser).first_name;
    this.currentuserlastname=JSON.parse(this.currentuser).last_name;
   }

  createForm() {
    this.loginForm = this.fb.group({     
      login_name: ['', Validators.required ],
      password: ['', Validators.required ]     
   });  
  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  login() {
    this.authService.logout();
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    else{
      //search complete User-array for form-values, if accordance is found, set localstorage_items and navigate to home-view
      for(var i=0; i<this.users.length; i++){      
       if(this.f.login_name.value == this.users[i].login_name && this.f.password.value == this.users[i].password){                 
          localStorage.setItem('isLoggedIn', "true");
          console.log(this.f.login_name.value+" Login erfolgreich");  
          localStorage.setItem('token', JSON.stringify(this.users[i]) );  
          this.openSnackBar(this.f.login_name.value);                  
          this.router.navigate(['/']);
        }
        else{          
          this.message = "Login Namen und Password überprüfen"; //message will be shown in html-file
        }
      }      
    }    
  }

  //logout-method
  logout():void{
    this.authService.logout();
    window.location.reload();
  }

  //open Registerdialog
  openDialog(): void {
    const dialogRef = this.dialog.open(Registerdialog);    
  } 
  
  openSnackBar(message: string) {
    this.snackBar.open(message, "wurde erfolgreich eingeloggt", {
    duration: 2000,
  });
  }
}

//Regitserdialog component
@Component({
  selector: 'Registerdialog',
  templateUrl: './Registerdialog.html',
  styleUrls: ['./Registerdialog.css']
})
export class Registerdialog implements OnInit {
  constructor(private userservice: UserService, private fb: FormBuilder,public snackBar: MatSnackBar, public dialogRef: MatDialogRef<Registerdialog>) {
    this.createForm();
  }
  angForm: FormGroup;
  users: User[];

  createForm() {
    this.angForm = this.fb.group({
      first_name: ['', Validators.required ],
      last_name: ['', Validators.required ],
      login_name: ['', Validators.required ],
      password: ['', Validators.required ]     
   });
  }

  openLink(event: MouseEvent): void {
    this.dialogRef.close();
  } 
  
  closeDialog():void{
    this.dialogRef.close();
  }
  
  addUser(first_name,last_name,login_name,password) {
    this.userservice.addUser(first_name,last_name,login_name,password);
  }

  ngOnInit() {
    this.userservice
     .getUsers()
     .subscribe((data: User[]) => {
     this.users = data;
    });  
   }

   openSnackBar(message: string) {
     this.snackBar.open(message, "wurde gespeichert...", {
     duration: 2000,
   });
   }
  
}
