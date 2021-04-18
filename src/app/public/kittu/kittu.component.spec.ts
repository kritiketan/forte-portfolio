import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KittuComponent } from './kittu.component';

describe('KittuComponent', () => {
  let component: KittuComponent;
  let fixture: ComponentFixture<KittuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KittuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KittuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
