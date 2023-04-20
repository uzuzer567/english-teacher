import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleModeButtonComponent } from './toggle-mode-button.component';

describe('ToggleModeButtonComponent', () => {
  let component: ToggleModeButtonComponent;
  let fixture: ComponentFixture<ToggleModeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleModeButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleModeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
