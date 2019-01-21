//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Services
import { DataService } from "./data.service"; 
import { AdunitService } from './adunit.service';
import { UserService } from './user.service';
import { AuthGuard } from './auth.guard';
import { ProjectService } from './project.service';
//MatModules
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatDialogModule} from '@angular/material/dialog';
import {StickyModule} from 'ng2-sticky-kit';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
//components
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { mmqqComponent } from './mmqq/mmqq.component';
import { SavedfilesComponent, Deletedialog } from './savedfiles/savedfiles.component';
import { ResultsComponent } from './results/results.component';
import { EditComponent } from './edit/edit.component';
import { UnitresultsComponent } from './unitresults/unitresults.component';
import { LoginComponent,Registerdialog } from './login/login.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ProjectsComponent, DeleteProjdialog, CreateProjdialog } from './projects/projects.component';
import { ProjectfilesComponent } from './projectfiles/projectfiles.component';
import { EditprojectComponent } from './editproject/editproject.component';
//pipes [filters]
import { Userpipe } from './user.pipe';
import { UserAdunitpipe } from './user-adunit.pipe';
import { ProjectAdunitpipe } from './project-adunit.pipe';


//Root-Module
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,    
    mmqqComponent,    
    ResultsComponent, 
    SavedfilesComponent,     
    EditComponent, 
    UnitresultsComponent ,
    Deletedialog,
    Registerdialog,
    DeleteProjdialog,
    CreateProjdialog,
    LoginComponent,
    EdituserComponent,
    ProjectsComponent,
    Userpipe,
    UserAdunitpipe,
    ProjectAdunitpipe,
    ProjectfilesComponent,
    EditprojectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatTableModule,
    MatDividerModule,
    FormsModule,
    HttpModule,
    MatFormFieldModule,
    MatSelectModule,
    MatProgressBarModule,
    MatInputModule,
    MatTooltipModule,
    MatSnackBarModule, 
    StickyModule,
    MatTabsModule,
    MatIconModule,
    MatDialogModule,
    MatStepperModule,
    ReactiveFormsModule    
  ], 
  entryComponents: [
    Deletedialog,
    Registerdialog,
    DeleteProjdialog,
    CreateProjdialog
  ],
  providers:[AdunitService, DataService, UserService,AuthGuard, ProjectService ],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
