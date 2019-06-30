import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AddPretComponent } from './add-pret/add-pret.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { PretComponent } from './pret/pret.component';
import { SalaireComponent } from './salaire/salaire.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    EmployeeSearchComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    AddPretComponent,
    EmployeeDetailsComponent,
    PretComponent,
    SalaireComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
