import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss'],
})
export class BalanceComponent implements OnInit {
  icons = {
    faArrowLeft: faArrowLeft,
  };
  constructor(private router: Router, private location: Location) {}

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
}
