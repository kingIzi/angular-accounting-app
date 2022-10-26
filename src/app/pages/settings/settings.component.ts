import { Component, OnInit } from '@angular/core';
import {
  faBuilding,
  faUser,
  faPaperPlane,
  faMoneyBill,
} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfigEntrepriseComponent } from './config-entreprise/config-entreprise.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  icons = {
    faBuilding: faBuilding,
    faUser: faUser,
    faPaperPlane: faPaperPlane,
    faMoneyBill: faMoneyBill,
  };
  constructor(private route: Router, private dialog: MatDialog) {}
  getSettings() {
    let settings = [
      {
        icon: this.icons.faBuilding,
        name: 'Gestion des banque',
        path: '/bank-management',
      },
      {
        icon: this.icons.faUser,
        name: 'Gestion  des utilisateurs',
      },
      {
        icon: this.icons.faPaperPlane,
        name: 'Plan de comptes',
      },
      {
        icon: this.icons.faMoneyBill,
        name: 'Taux de change',
      },
      {
        icon: this.icons.faMoneyBill,
        name: 'Paramètrage des comptes',
      },
      {
        icon: this.icons.faUser,
        name: 'Clients',
      },
    ];
    return settings;
  }

  ngOnInit(): void {}

  goToPage(name: string) {
    this.route.navigateByUrl(`bank-management/${name}`);
  }

  onOpenDialog(): void {
    const dialogRef = this.dialog.open(ConfigEntrepriseComponent, {
      // width: '650px',
      // height: '450px',
      maxHeight: '650px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
}
