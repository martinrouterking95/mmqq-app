import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmqqComponent } from './mmqq.component';

describe('MmqqComponent', () => {
  let component: MmqqComponent;
  let fixture: ComponentFixture<MmqqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmqqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmqqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
