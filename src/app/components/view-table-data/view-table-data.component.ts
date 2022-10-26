import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-table-data',
  templateUrl: './view-table-data.component.html',
  styleUrls: ['./view-table-data.component.scss'],
})
export class ViewTableDataComponent implements OnInit {
  @Input() tableHeaders: string[] = [];
  @Input() tableData: any[] = [];
  @Input() fullTable: boolean = false;

  parseAmount(numb: number) {
    var str = numb.toString().split('.');
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return str.join('.');
  }

  constructor() {}

  ngOnInit(): void {}
}
