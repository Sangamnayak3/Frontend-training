import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpgradeComponent } from './empgrade.component';

describe('EmpgradeComponent', () => {
  let component: EmpgradeComponent;
  let fixture: ComponentFixture<EmpgradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpgradeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
