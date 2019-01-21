import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UserService } from './../user.service';
import {MatSnackBar} from '@angular/material';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})

export class EdituserComponent implements OnInit {
  
  user: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private userservice: UserService,
    private fb: FormBuilder,
    public snackBar: MatSnackBar,
    public authService: AuthService) {
      this.createForm();
    }
    createForm() {
      this.angForm = this.fb.group({
        first_name: ['', Validators.required ],
        last_name: ['', Validators.required ],
        login_name: ['', Validators.required ],
        password: ['', Validators.required ]
         });
      }

    updateUser(first_name,last_name,login_name,password) {
      this.route.params.subscribe(params => {
          this.userservice.updateUser(first_name,last_name,login_name,password, params['id']);
          this.authService.logout();
          this.router.navigate(['login']);
      });
    }
 
    openSnackBar(message: string) {
      this.snackBar.open(message, "wurde geändert...", {
        duration: 2000,
      });
    }
    ngOnInit() {
      this.route.params.subscribe(params => {
        this.userservice.editUser(params['id']).subscribe(res => {
          this.user = res;
      });
      });
    }
}