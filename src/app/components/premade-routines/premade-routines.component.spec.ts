import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremadeRoutinesComponent } from './premade-routines.component';

describe('PremadeRoutinesComponent', () => {
  let component: PremadeRoutinesComponent;
  let fixture: ComponentFixture<PremadeRoutinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremadeRoutinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremadeRoutinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
