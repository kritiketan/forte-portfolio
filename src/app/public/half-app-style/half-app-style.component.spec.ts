import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfAppStyleComponent } from './half-app-style.component';

describe('HalfAppStyleComponent', () => {
  let component: HalfAppStyleComponent;
  let fixture: ComponentFixture<HalfAppStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HalfAppStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HalfAppStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
