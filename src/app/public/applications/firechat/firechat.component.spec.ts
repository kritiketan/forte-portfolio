import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirechatComponent } from './firechat.component';

describe('FirechatComponent', () => {
  let component: FirechatComponent;
  let fixture: ComponentFixture<FirechatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirechatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirechatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
