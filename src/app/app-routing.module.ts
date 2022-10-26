import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './components/layouts/hero/hero.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { TableViewComponent } from './pages/table-view/table-view.component';
import { AccountingComponent } from './pages/accounting/accounting.component';
import { AccountingSheetComponent } from './pages/accounting-sheet/accounting-sheet.component';
import { BalanceComponent } from './pages/balance/balance.component';
import { BigBookComponent } from './pages/big-book/big-book.component';
import { BankManagementComponent } from './pages/bank-management/bank-management.component';
import { FacturationComponent } from './pages/accounting/facturation/facturation.component';

const routes: Routes = [
  {
    path: '',
    component: HeroComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'accounting/:accounting',
    component: TableViewComponent,
  },
  {
    path: 'accounting/accounting/:sheet',
    component: AccountingSheetComponent,
  },
  {
    path: 'accounting',
    component: AccountingComponent,
  },
  {
    path: 'balance',
    component: BalanceComponent,
  },
  {
    path: 'big-book',
    component: BigBookComponent,
  },
  {
    path: 'bank-management/:param',
    component: BankManagementComponent,
  },
  {
    path: 'facturation',
    component: FacturationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
