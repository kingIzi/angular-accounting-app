import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ConfigEntrepriseDialog } from 'src/app/entities/config-entreprise-dialog';

@Component({
  selector: 'app-config-entreprise',
  templateUrl: './config-entreprise.component.html',
  styleUrls: ['./config-entreprise.component.scss'],
})
export class ConfigEntrepriseComponent implements OnInit {
  //constructor() { }
  constructor(
    public dialogRef: MatDialogRef<ConfigEntrepriseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfigEntrepriseDialog
  ) {}

  url = '';

  ngOnInit(): void {}

  onNoClicked() {
    this.dialogRef.close();
  }

  onSelectFileChanged(e: any) {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (event: any) => {
      console.log(event.target.result);
      this.url = event.target.result;
    };
  }
}
