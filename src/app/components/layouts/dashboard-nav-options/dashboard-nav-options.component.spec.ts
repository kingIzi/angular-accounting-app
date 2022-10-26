import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNavOptionsComponent } from './dashboard-nav-options.component';

describe('DashboardNavOptionsComponent', () => {
  let component: DashboardNavOptionsComponent;
  let fixture: ComponentFixture<DashboardNavOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardNavOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardNavOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
