import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-dinamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent {

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favourites: this.fb.array([
      ['Grand Theft Auto', Validators.required],
      ['Cyberpunk', Validators.required]
    ], Validators.required)
  })

  newFavourite: FormControl = this.fb.control('', Validators.required);

  get favouritesArr() {
    return this.myForm.get('favourites') as FormArray;
  }

  constructor( private fb: FormBuilder) { }

  invalidField( field: string ) {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }

  addFavourite() {
    if(this.newFavourite.valid){
      // this.favouritesArr.push(new FormControl(this.newFavourite.value, Validators.required))
      this.favouritesArr.push(this.fb.control(this.newFavourite.value, Validators.required))
      this.newFavourite.reset();
    }
  }

  deleteFavourite(index:number) {
    this.favouritesArr.removeAt(index);
  }

  save() {
    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    this.myForm.reset();
  }

}
