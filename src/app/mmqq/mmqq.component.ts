import { Component} from '@angular/core';
import { DataService } from "../data.service";  
import {value_array} from '../value_array';

@Component({
  selector: 'app-mmqq',
  templateUrl: './mmqq.component.html', 
  styleUrls: ['./mmqq.component.css'] 
  
})
  
export class mmqqComponent {  
  //every slider-value is initialized here, also refered to in html with [(ngModul)]
  public sl1: number=0; 
  public sl2: number=0;
  public sl3: number=0;
  public sl4: number=0;
  public sl5: number=0;
  public sl6: number=0;
  public sl7: number=0;
  public sl8: number=0;
  public sl9: number=0;
  public sl10: number=0;
  public sl11: number=0;
  public sl12: number=0;
  public sl13: number=0;
  public sl14: number=0;
  public sl15: number=0;
  public sl16: number=0;
  public sl17: number=0;
  public sl18: number=0;
  public sl19: number=0;
  public sl20: number=0;
  public sl21: number=0;
  public sl22: number=0;
  public sl23: number=0;
  public sl24: number=0;
  public result1: number=0;
  public result2: number=0;
  public result3: number=0;   
  public resultfinal: number=0;     
  
  constructor(private service: DataService){    
    
  }
  
  passData(): void{    
    console.log("passing Data...");
    //creating new array with all slider-values
    var varr=[
      new value_array(this.sl1),
      new value_array(this.sl2),
      new value_array(this.sl3),
      new value_array(this.sl4),
      new value_array(this.sl5),
      new value_array(this.sl6),
      new value_array(this.sl7),
      new value_array(this.sl8),
      new value_array(this.sl9),
      new value_array(this.sl10),
      new value_array(this.sl11),
      new value_array(this.sl12),
      new value_array(this.sl13),
      new value_array(this.sl14),
      new value_array(this.sl15),
      new value_array(this.sl16),
      new value_array(this.sl17),
      new value_array(this.sl18),
      new value_array(this.sl19),
      new value_array(this.sl20),
      new value_array(this.sl21),
      new value_array(this.sl22),
      new value_array(this.sl23),
      new value_array(this.sl24)
    ];
    //dataservice setting values for result-component
    this.service.setOption('resultfinal', this.resultfinal);   
    this.service.setOption('result1', this.result1);   
    this.service.setOption('result2', this.result2);  
    this.service.setOption('result3', this.result3);
    this.service.setOption('value_array', varr);
    //console.log("value_array id:1 >> "+ varr[0].value);
  }  
  getMult(qty) {
    const sum = qty * 10;
    return sum;
  }
  
  //algorithm for calculating the three main-factors (ease of use, joy of use and interaction quality) and the final result
  calculate(){
    this.result1 =(this.sl1 + this.sl2 + this.sl4  +this.sl5+ this.sl6 + this.sl7 + this.sl24)/7;
    this.result2 =(this.sl3 + this.sl8 + this.sl9 + this.sl10 + this.sl11 + this.sl12 + this.sl13 + this.sl14 + this.sl23)/9;
    this.result3 =(this.sl15 + this.sl16 + this.sl17 + this.sl18 + this.sl19 + this.sl20 + this.sl21 + this.sl22)/8;   
    this.resultfinal=(this.result1 + this.result2 +this.result3)/3;    
    console.log(this.resultfinal); 
    return this.resultfinal;    
  }   
  
}