import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigEntrepriseComponent } from './config-entreprise.component';

describe('ConfigEntrepriseComponent', () => {
  let component: ConfigEntrepriseComponent;
  let fixture: ComponentFixture<ConfigEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigEntrepriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
