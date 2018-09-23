import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NailheadComponent } from './nailhead.component';

describe('NailheadComponent', () => {
  let component: NailheadComponent;
  let fixture: ComponentFixture<NailheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NailheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NailheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
