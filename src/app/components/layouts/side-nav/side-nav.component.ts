import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  faCamera,
  faArrowRight,
  faClose,
  faHome,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  @Output() sideBar = new EventEmitter();
  icons = {
    faCamera: faCamera,
    faArrowRight: faArrowRight,
    faClose: faClose,
    faHome: faHome,
  };
  sideNavItems = [
    {
      path: '/dashboard',
      name: 'Tableau de bord',
    },
    {
      path: '/accounting',
      name: 'Compabilite',
    },
    {
      path: '/settings',
      name: 'Parametres',
    },
  ];
  closeSideBar() {
    this.sideBar.emit();
  }
  constructor() {}
  ngOnInit(): void {}
}
