import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';

@Component({
  selector: 'app-facturation',
  templateUrl: './facturation.component.html',
  styleUrls: ['./facturation.component.scss'],
})
export class FacturationComponent implements OnInit {
  icons = {
    faArrowLeft: faArrowLeft,
  };
  constructor(private location: Location) {}

  ngOnInit(): void {}

  backToAccountsPage() {
    this.location.back();
  }
}
