import { Component, OnInit } from '@angular/core';
import { faSearch, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';

@Component({
  selector: 'app-big-book',
  templateUrl: './big-book.component.html',
  styleUrls: ['./big-book.component.scss'],
})
export class BigBookComponent implements OnInit {
  icons = {
    faSearch: faSearch,
    faArrowLeft: faArrowLeft,
  };
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

  backToAccountsPage() {
    this.location.back();
  }
}
