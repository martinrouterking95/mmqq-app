import { Pipe, PipeTransform } from '@angular/core';
import { AdUnit } from './savedfiles/AdUnit';

//filter Adunits by ProjectID
@Pipe({ name: 'ProjectAdunitpipe' })
export class ProjectAdunitpipe implements PipeTransform {
  transform(alladunits: AdUnit[], searchterm:string) {
    if(!searchterm ||!alladunits){
      //return all adunits if searchterm is null oder if adunits array is empty
      return alladunits;
    }    
    else{
      //filter all adunits-project-value with the searchterm (project-id), if project-value of adunit is not null
      return alladunits.filter(adunit => adunit.project!=null && adunit.project.indexOf(searchterm)!==-1);
    }
    
  }
}


