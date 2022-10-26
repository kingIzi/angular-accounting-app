import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { faPlus, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bank-management',
  templateUrl: './bank-management.component.html',
  styleUrls: ['./bank-management.component.scss'],
})
export class BankManagementComponent implements OnInit {
  icons = {
    faArrowLeft: faArrowLeft,
    faPlus: faPlus,
  };
  param: any;
  constructor(private location: Location, private activeRoute: ActivatedRoute) {
    this.param = this.activeRoute.snapshot.paramMap.get('param');
  }

  ngOnInit(): void {}

  onOpenSideBar(sideBar: any) {
    sideBar.classList.remove('hidden');
    sideBar.classList.add('block');
  }

  onCloseSideBar(sideBar: any) {
    sideBar.classList.remove('block');
    sideBar.classList.add('hidden');
  }

  backToAccountsPage() {
    this.location.back();
  }

  switchParam() {
    console.log(this.param);
    if (this.param == 'Gestion des banque') {
      return 0;
    } else if (this.param == 'Gestion  des utilisateurs') {
      return 1;
    } else if (this.param == 'Plan de comptes') {
      return 2;
    } else if (this.param == 'Taux de change') {
      return 3;
    } else if (this.param == 'Paramètrage des comptes') {
      return 4;
    } else if (this.param == 'Clients') {
      return 5;
    } else {
      return -1;
    }
  }

  // switchParam() {
  //   console.log(this.param);
  //   switch (this.param) {
  //     case 'Gestion des banque':
  //       return 0;
  //     case 'Plan de comptes':
  //       return 2;
  //     case 'Taux De Change':
  //       return 3;
  //     case 'Gestion des utilisateurs':
  //       return 1;
  //     default:
  //       return 1;
  //   }

  //   // if (this.param === 'Gestion des banque') {
  //   //   return 0;
  //   // } else if (this.param === 'Plan de comptes') {
  //   //   return 2;
  //   // } else if (this.param === 'Gestion des utilisateurs') {
  //   //   return 1;
  //   // } else if (this.param === 'Taux De Change') {
  //   //   return 3;
  //   // } else if (this.param === 'Paramètrage Des Comptes') {
  //   //   return 4;
  //   // } else if (this.param === 'Clients') {
  //   //   return 5;
  //   // } else {
  //   //   return null;
  //   // }
  // }
}
