import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsDesignComponent } from './cards-design.component';

describe('CardsDesignComponent', () => {
  let component: CardsDesignComponent;
  let fixture: ComponentFixture<CardsDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
