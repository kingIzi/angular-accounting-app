import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-balance-sheet',
  templateUrl: './balance-sheet.component.html',
  styleUrls: ['./balance-sheet.component.scss'],
})
export class BalanceSheetComponent implements OnInit {
  @Input() actifBalanceSheet: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
