import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

interface Person {
  name: string;
  favourites: Favourite[];
}

interface Favourite {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent {

  @ViewChild('myForm') myForm!:NgForm;

  newGame: string = '';

  person: Person = {
    name: 'Gerard',
    favourites: [
      {id:1, name:'Fifa 21'},
      {id:2, name:'Unravel'}
    ]
  }

  save() {
    console.log('Form saved')
  }

  addGame() {
    const newFavourite: Favourite = {
      id: this.person.favourites.length + 1,
      name: this.newGame
    }
    this.person.favourites.push({...newFavourite});
    this.newGame = '';
  }

  delete( index: number){
    this.person.favourites.splice(index,1);
  }

  invalidName(): boolean {
    return (this.myForm?.controls.name?.invalid) && (this.myForm?.controls.name?.touched);
  }

}
