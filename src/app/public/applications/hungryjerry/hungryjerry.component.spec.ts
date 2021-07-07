import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HungryjerryComponent } from './hungryjerry.component';

describe('HungryjerryComponent', () => {
  let component: HungryjerryComponent;
  let fixture: ComponentFixture<HungryjerryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HungryjerryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HungryjerryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
