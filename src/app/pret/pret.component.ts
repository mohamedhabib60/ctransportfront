import { Component, OnInit } from '@angular/core';
import { Pret } from '../model/Pret';
import { PretService } from '../services/pret.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pret',
  templateUrl: './pret.component.html',
  styleUrls: ['./pret.component.css']
})
export class PretComponent implements OnInit {

  prets: Pret[];
  pret: Pret = new Pret();
  sommeToPay: number;

  constructor(private pretService: PretService) { }

  ngOnInit() {
    this.getPrets();
    this.sommeToPay = 0;
  }

  getPrets(): void {
    this.pretService.getPrets()
      .subscribe(prets => this.prets = prets);
  }

  delete(pret: Pret): void {

    this.pretService.deletePret(pret).subscribe();
    this.prets = this.prets.filter(p => p !== pret);
  }


  viewPret(pret) {
    this.pret = pret;
  }


  payerPret(sommeToPay) {

    // this.pret.payee = this.pret.payee + sommeToPay;
    this.pretService.payerPret(this.pret.idPret, sommeToPay).subscribe(
      () => this.ngOnInit());

  }

}
