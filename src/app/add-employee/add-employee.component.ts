import { PaysService } from './../services/pays.service';
import { Specialite } from './../model/Specialite';
import { EmployeeService } from './../services/employee.service';
import { Employee } from './../model/Employee';
import { Component, OnInit } from '@angular/core';
import { SpecialiteService } from '../services/specialite.service';
import { Observable } from 'rxjs';
import { PosteService } from '../services/poste.service';
import { Poste } from '../model/Poste';
import { Pays } from '../model/Pays';
import { NiveauEtude } from '../model/NiveauEtude';
import { NiveauEtudeService } from '../services/niveau-etude.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  specialites: Specialite[];
  postes: Poste[];
  pays: Pays[];
  niveauEtudes: NiveauEtude[];

  constructor(
    private employeeService: EmployeeService,
    private specialiteService: SpecialiteService,
    private posteService: PosteService,
    private paysService: PaysService,
    private niveauEtudeService: NiveauEtudeService
  ) { }

  ngOnInit() {
    this.getNiveauEtudes();
    this.getPays();
    this.getPostes();
    this.getSpecialites();

  }

  getSpecialites(): void {
    this.specialiteService.getSpecialites()
      .subscribe(specialites => this.specialites = specialites);
  }

  getPostes(): void {
    this.posteService.getPostes()
      .subscribe(postes => this.postes = postes);
  }

  getPays(): void {
    this.paysService.getPays()
      .subscribe(pays => this.pays = pays);
  }

  getNiveauEtudes(): void {
    this.niveauEtudeService.getNiveauEtudes()
      .subscribe(niveauEtudes => this.niveauEtudes = niveauEtudes);
  }








  createEmployee(): void {
    this.employeeService.addEmployee(this.employee)
      .subscribe(data => {
        alert('Employee created successfully.');
      });

    this.employee = new Employee();

  }

}
