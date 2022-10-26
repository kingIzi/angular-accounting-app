import { Component, OnInit } from '@angular/core';
import {
  faBuilding,
  faUser,
  faPaperPlane,
  faMoneyBill,
  faU,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.scss'],
})
export class AccountingComponent implements OnInit {
  icons = {
    faBuilding: faBuilding,
    faUser: faUser,
    faPaperPlane: faPaperPlane,
    faMoneyBill: faMoneyBill,
  };

  constructor() {}

  onOpenSideBar(sideBar: any) {
    sideBar.classList.remove('hidden');
    sideBar.classList.add('block');
  }

  onCloseSideBar(sideBar: any) {
    sideBar.classList.remove('block');
    sideBar.classList.add('hidden');
  }

  getAccountingSheets() {
    let settings = [
      {
        icon: this.icons.faBuilding,
        name: 'Journaux Comptable',
        path: '/accounting/accounting',
      },
      {
        icon: this.icons.faPaperPlane,
        name: 'Document de synthese',
        path: '/accounting/accounting/documentDeSynthese',
      },
      {
        icon: this.icons.faMoneyBill,
        name: 'Balance',
        path: '/balance',
      },
      {
        icon: this.icons.faMoneyBill,
        name: 'Grand livre',
        path: '/big-book',
      },
    ];
    return settings;
  }

  ngOnInit(): void {}
}
