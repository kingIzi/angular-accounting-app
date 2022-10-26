import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingSheetComponent } from './accounting-sheet.component';

describe('AccountingSheetComponent', () => {
  let component: AccountingSheetComponent;
  let fixture: ComponentFixture<AccountingSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountingSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
