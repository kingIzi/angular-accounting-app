import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  icons = {
    faSearch: faSearch,
    faBars: faBars,
  };
  @Input() navLabel: string = 'Tableau de board';
  @Output() sideBar = new EventEmitter();
  constructor() {}

  openSideBar() {
    this.sideBar.emit();
  }

  ngOnInit(): void {}
}
