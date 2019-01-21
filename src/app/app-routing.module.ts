import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { mmqqComponent} from './mmqq/mmqq.component';
import { ResultsComponent} from './results/results.component'; 
import { SavedfilesComponent } from './savedfiles/savedfiles.component';
import { EditComponent } from './edit/edit.component';
import { UnitresultsComponent } from './unitresults/unitresults.component';
import { LoginComponent } from './login/login.component';
import { EdituserComponent } from './edituser/edituser.component';
import { AuthGuard } from './auth.guard';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectfilesComponent } from './projectfiles/projectfiles.component';
import { EditprojectComponent } from './editproject/editproject.component';

//Defining the Routes
const routes: Routes = [
  {
    path: '',
    component: mmqqComponent
  },  
  {
    path: 'results',
    component: ResultsComponent
  },
  {
    path: 'savedfiles',
    component: SavedfilesComponent,
    canActivate: [AuthGuard]
  },    
  {
    path: 'edit/:id',
    component: EditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'unitresults/:id',
    component: UnitresultsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'edituser/:id',
    component: EdituserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'projectfiles/:id',
    component: ProjectfilesComponent,
    canActivate: [AuthGuard]
  },{
    path: 'editproject/:id',
    component: EditprojectComponent,
    canActivate: [AuthGuard]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
