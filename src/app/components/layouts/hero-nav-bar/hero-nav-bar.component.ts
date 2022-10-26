import { Component, OnInit } from '@angular/core';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-hero-nav-bar',
  templateUrl: './hero-nav-bar.component.html',
  styleUrls: ['./hero-nav-bar.component.scss'],
})
export class HeroNavBarComponent implements OnInit {
  navBarItems = [
    {
      path: '/tableau-de-bord',
      name: 'Tableau de bord',
    },
    {
      path: '/comptabilité',
      name: 'Comptabilité',
    },
    {
      path: '/gestion-de-paie',
      name: 'Gestion de paie',
    },
    {
      path: '/ressources-humaines',
      name: 'Ressources humaines',
    },
    {
      path: 'paramètres',
      name: 'Paramètres',
    },
  ];

  icons = {
    faBars: faBars,
    faClose: faClose,
  };

  getNavBarItems() {
    return this.navBarItems;
  }

  getLoginNavBarItem() {
    return '/login';
  }

  openMobileNavBar(sideNav: any, mobileItems: any) {
    sideNav.classList.remove('w-0');
    sideNav.classList.add('w-full');
    //show mobile items and add flexbox
    mobileItems.classList.remove('hidden');
    mobileItems.classList.add('block');
    mobileItems.classList.add('flex');
  }

  closeMobileNavBar(sideNav: any, mobileItems: any) {
    sideNav.classList.remove('w-full');
    sideNav.classList.add('w-0');

    //hide mobile items and flexbox
    mobileItems.classList.remove('flex');
    mobileItems.classList.remove('block');
    mobileItems.classList.add('hidden');
  }

  constructor() {}

  ngOnInit(): void {}
}
