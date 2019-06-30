import { Salaire } from './../model/salaire';
import { Employee } from './../model/Employee';
import { EmployeeService } from './../services/employee.service';
import { SalaireService } from './../services/salaire.service';
import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-salaire',
  templateUrl: './salaire.component.html',
  styleUrls: ['./salaire.component.css']
})
export class SalaireComponent implements OnInit {

  salaire: Salaire;
  salaires: Salaire[];
  employees: Employee[];
  constructor(private salaireService: SalaireService,
              private employeeService: EmployeeService,
              private loginservice: LoginService) { }

  ngOnInit() {
    this.getSalaires();
    this.salaire = new Salaire();
  }


  getSalaires(): void {
    this.salaireService.getSalaires()
      .subscribe(salaires => this.salaires = salaires);
  }

  newSalaire() {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);

  }

  payerSalaire(salire: Salaire) {
    salire.user = this.loginservice.user;

    // this.pret.payee = this.pret.payee + sommeToPay;
    this.salaireService.addSalaire(this.salaire).subscribe(
      () => this.ngOnInit());

  }


}
