import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremadeRoutineInfoComponent } from './premade-routine-info.component';

describe('PremadeRoutineInfoComponent', () => {
  let component: PremadeRoutineInfoComponent;
  let fixture: ComponentFixture<PremadeRoutineInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremadeRoutineInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremadeRoutineInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
