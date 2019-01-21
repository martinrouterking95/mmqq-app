import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitresultsComponent } from './unitresults.component';

describe('UnitresultsComponent', () => {
  let component: UnitresultsComponent;
  let fixture: ComponentFixture<UnitresultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitresultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
