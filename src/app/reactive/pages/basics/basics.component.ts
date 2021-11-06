import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  // myForm: FormGroup = new FormGroup({
  //   'name': new FormControl('RTX 3070'),
  //   'price': new FormControl(750),
  //   'stock': new FormControl(2),
  // });

  myForm: FormGroup = this.fb.group({
    name: [ , [Validators.required, Validators.minLength(3)]],
    price: [ , [Validators.required, Validators.min(0)]],
    stock: [ , [Validators.required, Validators.min(0)]]
  })

  constructor( private fb:FormBuilder ) { }

  invalidField( field: string ) {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }

  save() {
    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    this.myForm.reset();
  }

  ngOnInit() {
    this.myForm.reset({
      name: 'RTX 3070',
      price: 750
    })
  }

}
