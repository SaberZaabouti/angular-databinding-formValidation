export class Personne {
    private nom: string;
    private prenom: string;
    private age: number;
    private autorisation: boolean;

    constructor(data: any) {
        this.nom = data.nom;
        this.prenom = data.prenom;
        this.age = data.age;
        this.autorisation = data.autorisation;        
    }
} 