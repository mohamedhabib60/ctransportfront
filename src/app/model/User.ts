import { Pays } from './Pays';


export  class  User {

    public id: number;
    public nomComplet: string;
    public username: string;
    public password: string;
    public tel: string;
    public email: string;
    public nationnalite: Pays;

    constructor() { }

}
