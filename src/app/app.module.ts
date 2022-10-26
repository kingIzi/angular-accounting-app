import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/layouts/hero/hero.component';
import { HeroNavBarComponent } from './components/layouts/hero-nav-bar/hero-nav-bar.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SideNavComponent } from './components/layouts/side-nav/side-nav.component';
import { NavBarComponent } from './components/layouts/nav-bar/nav-bar.component';
import { JournalsComponent } from './components/layouts/journals/journals.component';
import { DashboardNavOptionsComponent } from './components/layouts/dashboard-nav-options/dashboard-nav-options.component';
import * as CanvasJSAngularChart from '../assets/canvasjs/canvasjs.angular.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { TableViewComponent } from './pages/table-view/table-view.component';
import { AccountTableComponent } from './components/layouts/account-table/account-table.component';
import { AccountingComponent } from './pages/accounting/accounting.component';
import { AccountingSheetComponent } from './pages/accounting-sheet/accounting-sheet.component';
import { ViewTableDataComponent } from './components/view-table-data/view-table-data.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { BalanceSheetComponent } from './components/balance-sheet/balance-sheet.component';
import { BalanceComponent } from './pages/balance/balance.component';
import { BigBookComponent } from './pages/big-book/big-book.component';
import { BankManagementComponent } from './pages/bank-management/bank-management.component';
import { ConfigEntrepriseComponent } from './pages/settings/config-entreprise/config-entreprise.component';
import { FacturationComponent } from './pages/accounting/facturation/facturation.component';
import { CaisseDialogComponent } from './components/layouts/account-table/caisse-dialog/caisse-dialog.component';

var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroNavBarComponent,
    LoginComponent,
    DashboardComponent,
    SideNavComponent,
    NavBarComponent,
    JournalsComponent,
    DashboardNavOptionsComponent,
    CanvasJSChart,
    SettingsComponent,
    TableViewComponent,
    AccountTableComponent,
    AccountingComponent,
    AccountingSheetComponent,
    ViewTableDataComponent,
    BalanceSheetComponent,
    BalanceComponent,
    BigBookComponent,
    BankManagementComponent,
    ConfigEntrepriseComponent,
    FacturationComponent,
    CaisseDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    PdfViewerModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
