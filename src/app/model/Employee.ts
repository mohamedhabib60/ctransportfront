import { Poste } from './Poste';
import { Pays } from './Pays';
import { NiveauEtude } from './NiveauEtude';
import { Specialite } from './Specialite';



export class Employee {

    public idEmployee: number ;

    public nomComplet: string ;

    public nni: string ;

    public dateEmbauche: Date ;

    public salaire: number ;


    public dateNaissance: Date ;

    public tel: string ;


    public email: string ;


    public poste: Poste;

    public nationnalite: Pays;


    public niveauEtude: NiveauEtude;

    public specialite: Specialite;

    constructor(values: object = {}) {
        Object.assign(this, values);
      }
}
