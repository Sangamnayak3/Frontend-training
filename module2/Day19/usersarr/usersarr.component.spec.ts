import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersarrComponent } from './usersarr.component';

describe('UsersarrComponent', () => {
  let component: UsersarrComponent;
  let fixture: ComponentFixture<UsersarrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersarrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersarrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
