import { Pret } from './../model/Pret';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/Employee';
import { EmployeeService } from '../services/employee.service';
import { PretService } from '../services/pret.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-add-pret',
  templateUrl: './add-pret.component.html',
  styleUrls: ['./add-pret.component.css']
})
export class AddPretComponent implements OnInit {

  pret: Pret = new Pret();
  employees: Employee[];

  constructor(
    private employeeService: EmployeeService,
    private pretService: PretService,
    private loginservice: LoginService

  ) { }

  ngOnInit() {
    this.getEmployees();
    this.pret.user = this.loginservice.user;

  }


  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }


  createPret(): void {
    this.pret.user = this.loginservice.user;

    this.pretService.addPret(this.pret)
      .subscribe(data => {
        alert('pret created successfully.');
      });

    this.pret = new Pret();

  }

}
