import { Component, OnInit } from '@angular/core';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { DatePipe, formatDate } from '@angular/common';
import { Location } from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-accounting-sheet',
  templateUrl: './accounting-sheet.component.html',
  styleUrls: ['./accounting-sheet.component.scss'],
  animations: [
    trigger('heroState', [
      state(
        'a',
        style({
          backgroundColor: 'yellow',
          opacity: 0.5,
        })
      ),
      state(
        'b',
        style({
          backgroundColor: 'black',
          opacity: 1,
        })
      ),
      transition('a => b', animate('100ms ease-in')),
      transition('b => a', animate('100ms ease-out')),
    ]),
  ],
})
export class AccountingSheetComponent implements OnInit {
  icons = {
    faArrowRight: faArrowRight,
    faArrowLeft: faArrowLeft,
  };
  displayOption = '';
  displayOptions = ['Bilan', 'Compte Resultat', 'Tafir'];

  onDisplayOptionChanged(option: string) {
    this.displayOption = option;
  }

  balanceSheetObj = [
    { status: true, label: 'Actif' },
    { status: false, label: 'Passif' },
  ];

  balanceSheetType = 'Actif';

  getBalanceSheetTableData() {
    return [
      'Actif',
      'Note',
      'Brut',
      'Amort et Deprec',
      'Net',
      'Exercice au 31/12/N-1',
    ];
  }

  getCurrentDate() {
    console.log(formatDate(new Date(), 'dd/MM/yyyy', 'en'));
    return formatDate(new Date(), 'dd/MM/yyyy', 'en');
  }

  constructor(private location: Location) {}

  ngOnInit(): void {}

  onOpenSideBar(sideBar: any) {
    sideBar.classList.remove('hidden');
    sideBar.classList.add('block');
  }

  onCloseSideBar(sideBar: any) {
    sideBar.classList.remove('block');
    sideBar.classList.add('hidden');
  }

  onBalanceSheetBtnChanged(value: string) {
    this.balanceSheetType = value;
  }

  backToAccountsPage() {
    this.location.back();
  }
}
