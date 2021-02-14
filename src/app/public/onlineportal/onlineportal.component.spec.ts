import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OnlineportalComponent } from './onlineportal.component';

describe('OnlineportalComponent', () => {
  let component: OnlineportalComponent;
  let fixture: ComponentFixture<OnlineportalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineportalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
