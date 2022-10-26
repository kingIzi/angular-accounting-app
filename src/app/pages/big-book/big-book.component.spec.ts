import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigBookComponent } from './big-book.component';

describe('BigBookComponent', () => {
  let component: BigBookComponent;
  let fixture: ComponentFixture<BigBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
