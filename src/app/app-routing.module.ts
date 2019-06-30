import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { PretComponent } from './pret/pret.component';
import { AddPretComponent } from './add-pret/add-pret.component';
import { SalaireComponent } from './salaire/salaire.component';

const routes: Routes = [
  { path: '', component: EmployeeComponent },
  { path: 'addemployee', component: AddEmployeeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGaurdService]},
  { path: 'prets', component: PretComponent },
  { path: 'addpret', component: AddPretComponent },
  { path: 'salaires', component: SalaireComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
