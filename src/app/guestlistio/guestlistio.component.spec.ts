import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestlistioComponent } from './guestlistio.component';

describe('GuestlistioComponent', () => {
  let component: GuestlistioComponent;
  let fixture: ComponentFixture<GuestlistioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestlistioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestlistioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
