import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroNavBarComponent } from './hero-nav-bar.component';

describe('HeroNavBarComponent', () => {
  let component: HeroNavBarComponent;
  let fixture: ComponentFixture<HeroNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
