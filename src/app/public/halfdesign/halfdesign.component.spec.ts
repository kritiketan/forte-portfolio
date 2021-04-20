import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfdesignComponent } from './halfdesign.component';

describe('HalfdesignComponent', () => {
  let component: HalfdesignComponent;
  let fixture: ComponentFixture<HalfdesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HalfdesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HalfdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
