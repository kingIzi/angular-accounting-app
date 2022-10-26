import { Component, OnInit } from '@angular/core';
import { faArrowsLeftRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { CaisseDialogComponent } from './caisse-dialog/caisse-dialog.component';

@Component({
  selector: 'app-account-table',
  templateUrl: './account-table.component.html',
  styleUrls: ['./account-table.component.scss'],
})
export class AccountTableComponent implements OnInit {
  icons = {
    faArrowsLeftRight: faArrowsLeftRight,
    faPlus: faPlus,
  };

  selectedTableChunk: string = 'Tout(s)';
  selectedTableValue: string = 'Journal de compte';

  getDiplayTableItems() {
    let displayItems = ['Journal de caisse', 'Journal de compte'];
    return displayItems;
  }

  getDisplayTableChunks() {
    //let chunks = [5, 10, 'Tout(s)'];
    return ['Tout(s)'];
  }

  displayItems = ['Journal de caisse', 'Journal de compte'];

  parseAmount(numb: number) {
    var str = numb.toString().split('.');
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return str.join('.');
  }

  tableHeaders = [
    'Date',
    'Tiers',
    'Description',
    'Montant',
    'Direction',
    'Agent',
  ];

  accTableData = [
    {
      date: '31 - Jan - 2022',
      tiers: 'CanalBox',
      description: 'Access Internet',
      amount: 600,
      direction: 'Credit',
      agent: 'example@gmail.com',
    },
    {
      date: '12 - Oct - 2022',
      tiers: 'Airtal',
      description: 'Development Mobile',
      amount: 108,
      direction: 'Debit',
      agent: 'example@gmail.com',
    },
  ];

  tableData: any[] = [];
  tableDataChunks: any[] = [];

  caisseData = [
    {
      date: '12 - Oct - 2022',
      tiers: 'VODACOM',
      description: 'Development',
      amount: 500,
      direction: 'Debit',
      agent: 'example@gmail.com',
    },
    {
      date: '12 - Oct - 2022',
      tiers: 'VODACOM',
      description: 'Development',
      amount: 1500,
      direction: 'Debit',
      agent: 'example@gmail.com',
    },
    {
      date: '12 - Oct - 2022',
      tiers: 'VODACOM',
      description: 'Development',
      amount: 500,
      direction: 'Debit',
      agent: 'example@gmail.com',
    },
    {
      date: '12 - Oct - 2022',
      tiers: 'VODACOM',
      description: 'Development',
      amount: 500,
      direction: 'Debit',
      agent: 'example@gmail.com',
    },
    {
      date: '12 - Oct - 2022',
      tiers: 'VODACOM',
      description: 'Development',
      amount: 250200,
      direction: 'Credit',
      agent: 'example@gmail.com',
    },
    {
      date: '12 - Oct - 2022',
      tiers: 'VODACOM',
      description: 'Development',
      amount: 30,
      direction: 'Debit',
      agent: 'example@gmail.com',
    },
    {
      date: '12 - Oct - 2022',
      tiers: 'VODACOM',
      description: 'Development',
      amount: 8,
      direction: 'Credit',
      agent: 'example@gmail.com',
    },
  ];

  private appendTableDataContent(contentList: any[]) {
    this.tableData.slice(0, this.tableData.length);
    contentList.forEach((elem) => {
      this.tableData.push(elem);
    });
  }

  onDocumentValueChanged(value: string) {
    this.tableData = [];
    if (value === 'Journal de caisse') {
      this.appendTableDataContent(this.caisseData);
    } else if (value === 'Journal de compte') {
      this.appendTableDataContent(this.accTableData);
    }
  }

  onDisplayTableChunksChanged(value: any) {
    this.tableDataChunks = this.tableData;
    this.tableDataChunks.splice(0, value);
  }

  onAddItemClicked() {
    if (this.selectedTableValue === this.displayItems[0]) {
      const dialogRef = this.dialog.open(CaisseDialogComponent, {
        height: '400px',
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log('The dialog was closed');
      });
    }
  }

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.onDocumentValueChanged(this.selectedTableValue);
  }
}
