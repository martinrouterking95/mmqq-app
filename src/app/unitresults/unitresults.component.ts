import { Component, OnInit } from '@angular/core';
import { AdunitService } from './../adunit.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-unitresults',
  templateUrl: './unitresults.component.html',
  styleUrls: ['./unitresults.component.css']
})
export class UnitresultsComponent implements OnInit {
  adunit: any = {};
  constructor(private route: ActivatedRoute,
    private router: Router,private adunitservice: AdunitService) { }

  
  ngOnInit() {
      this.route.params.subscribe(params => {
        this.adunitservice.editAdUnit(params['id']).subscribe(res => {
          this.adunit = res;
      });
    });
  }
  getMult(qty) {
    const sum = qty * 10;
    return sum;
  }

}
