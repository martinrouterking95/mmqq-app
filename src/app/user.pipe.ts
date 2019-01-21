import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project';

//filter Projects by UserID
@Pipe({ name: 'Userpipe' })
export class Userpipe implements PipeTransform {
  transform(allprojects: Project[], searchterm:string) {
    if(!allprojects||!searchterm){
      return allprojects;
    }
    return allprojects.filter(project => project.user.indexOf(searchterm)!==-1);
  }
}


