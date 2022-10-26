import { Component, OnInit } from '@angular/core';
import { faPlus, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss'],
})
export class TableViewComponent implements OnInit {
  icons = {
    faPlus: faPlus,
    faArrowLeft: faArrowLeft,
  };

  onOpenSideBar(sideBar: any) {
    sideBar.classList.remove('hidden');
    sideBar.classList.add('block');
  }

  onCloseSideBar(sideBar: any) {
    sideBar.classList.remove('block');
    sideBar.classList.add('hidden');
  }

  constructor(private location: Location) {}
  ngOnInit(): void {}
  backToAccountsPage() {
    this.location.back();
  }
}
