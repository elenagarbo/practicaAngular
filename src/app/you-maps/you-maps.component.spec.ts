import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouMapsComponent } from './you-maps.component';

describe('YouMapsComponent', () => {
  let component: YouMapsComponent;
  let fixture: ComponentFixture<YouMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
