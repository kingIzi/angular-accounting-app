import { Component, OnInit } from '@angular/core';
import { faCogs, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard-nav-options',
  templateUrl: './dashboard-nav-options.component.html',
  styleUrls: ['./dashboard-nav-options.component.scss'],
})
export class DashboardNavOptionsComponent implements OnInit {
  icons = {
    faCogs: faCogs,
    faMoneyBill: faMoneyBill,
  };

  inwardInvoices = {
    animationEnabled: true,
    theme: 'dark2',
    exportEnabled: true,
    title: {
      text: 'Vos factures entrees',
    },
    subtitles: [
      {
        text: 'Bank: $13,000',
      },
    ],
    data: [
      {
        type: 'pie', //change type to column, line, area, doughnut, etc
        indexLabel: '{name}: {y}%',
        dataPoints: [
          { name: 'Total des factures', y: 29, color: '#1f2e56' },
          { name: 'Paiment recu', y: 21, color: '#57a85d' },
          { name: 'Ce qui reste a payer', y: 4, color: '#e81734' },
          { name: 'Partiellement payer', y: 4, color: '#7156a9' },
        ],
      },
    ],
  };

  outwardInvoices = {
    animationEnabled: true,
    theme: 'dark2',
    exportEnabled: true,
    title: {
      text: 'Vos factures sortantes',
    },
    subtitles: [
      {
        text: 'Bank: $2,400',
      },
    ],
    data: [
      {
        type: 'pie',
        indexLabel: '{name}:{y}%',
        dataPoints: [
          { name: 'Total des factures', y: 19, color: '#1f2e56' },
          { name: 'Paiment recu', y: 8, color: '#57a85d' },
          { name: 'Ce qui reste a payer', y: 2, color: '#e81734' },
          { name: 'Partiellement payer', y: 9, color: '#7156a9' },
        ],
      },
    ],
  };
  constructor() {}

  getRecent() {
    let recents = [
      {
        class: 'bg-tahiti',
        icon: this.icons.faMoneyBill,
        name: 'Gestion de paie',
      },
      { class: 'bg-rose-700', icon: this.icons.faCogs, name: 'Parametres' },
    ];
    return recents;
  }

  ngOnInit(): void {}
}
