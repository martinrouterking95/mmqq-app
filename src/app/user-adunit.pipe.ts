import { Pipe, PipeTransform } from '@angular/core';
import { AdUnit } from './savedfiles/AdUnit';

//filter Adunits by UserID
@Pipe({ name: 'UserAdunitpipe' })
export class UserAdunitpipe implements PipeTransform {
  transform(alladunits: AdUnit[], searchterm:string) {
    if(!alladunits||!searchterm){
      return alladunits;
    }
    return alladunits.filter(adunit => adunit.user.indexOf(searchterm)!==-1);
  }
}


