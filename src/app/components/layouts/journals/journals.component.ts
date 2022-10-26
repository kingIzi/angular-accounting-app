import { Component, OnInit, Input } from '@angular/core';
import { faAlignJustify, faBriefcase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-journals',
  templateUrl: './journals.component.html',
  styleUrls: ['./journals.component.scss'],
})
export class JournalsComponent implements OnInit {
  icons = {
    faAlignJustify: faAlignJustify,
    faBriefcase: faBriefcase,
  };
  @Input() showTitle = true;
  constructor() {}
  getAccountJournals() {
    let journals = [
      {
        class: 'bg-rose-700',
        name: 'Journal de caisse',
        total: 28,
        label: 'Nombre total des journaux de caisse',
        icon: this.icons.faAlignJustify,
        path: '/accounting/option',
      },
      {
        class: 'bg-tahiti',
        name: 'Document de synthese',
        total: 32,
        label: 'Lorem Ipsum Lorem Loren',
        icon: this.icons.faBriefcase,
        path: '/accounting/accounting/documentDeSynthese',
      },
    ];
    return journals;
  }
  ngOnInit(): void {}
}
