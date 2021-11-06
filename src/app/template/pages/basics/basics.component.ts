import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  @ViewChild('myForm') myForm!:NgForm;

  initForm = {
    product: '',
    price: 0,
    stock: 0
  }
  invalidName(): boolean {
    return this.myForm?.controls.product?.invalid && this.myForm?.controls.product?.touched;
  }

  invalidPrice(): boolean {
    return (this.myForm?.controls.price?.value < 0)
      && this.myForm?.controls.price?.touched;
  }

  save() {
    // console.log( this.myForm );
    console.log('Saved correctly');
    this.myForm.resetForm({
      price: 0,
      stock: 0
    });
  }

}
