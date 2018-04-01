import { Component, OnInit } from '@angular/core';
import { Personne } from '../../models/personne';

@Component({
  selector: 'app-test-component',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  private titre: string;
  private personnes: [Personne];
  private id;
  private new_personne: Personne;

  constructor() { 
    this.titre = "Liste des personnes :";
    this.personnes = [
      new Personne({nom:"ali", prenom:"ZAABOUTI", age:10, autorisation: false}),
      new Personne({nom:"salah", prenom:"ZAABOUTI", age:15, autorisation: true}),
      new Personne({nom:"mohamed", prenom:"ZAABOUTI", age:30, autorisation: false})
    ];
    this.resetInput();
    
  }

  ngOnInit() {
  }

  setId(id: number, event: Event) {
    this.id = id;
    console.log(event);
    //let element = event.target || event.srcElement || event.currentTarget;
    //let element = event.currentTarget;
    //this.id = element.attributes.id.nodeValue;
   // console.log(element.attributes.id.nodeValue);
  }

  ajoutPersonne(){
    this.personnes.push(this.new_personne);
    this.resetInput();
  }
    resetInput() {
      this.new_personne = new Personne({nom:"", prenom:"", age: 1, autorisation: false});
  }
}
