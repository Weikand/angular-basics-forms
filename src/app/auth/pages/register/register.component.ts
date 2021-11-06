import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidatorService} from "../../../shared/validator/validator.service";
import {EmailValidatorService} from "../../../shared/validator/email-validator.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.vs.nameSurnamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)], [this.ev]],
    username: ['', [Validators.required, this.vs.cannotBeWeikand]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  }, {
    validators: [this.vs.sameFields('password', 'password2')]
  });

  get emailErrorMsg(): string {
    const errors = this.myForm.get('email')?.errors;

    if(errors?.required) {
      return 'Email is mandatory';
    } else if(errors?.pattern) {
      return 'Email has an incorrect format';
    } else if(errors?.emailTaken) {
      return 'Email is already in use';
    }

    return '';

  }

  constructor(private fb: FormBuilder,
              private vs: ValidatorService,
              private ev: EmailValidatorService) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Gerard Martí',
      email: 'test1@test.com',
      username: 'gerardmartis',
      password:'123456',
      password2:'123456'
    })
  }

  invalidField( field: string) {
    return this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched;
  }

  submitForm() {
    console.log(this.myForm.value);
    this.myForm.markAllAsTouched();
  }

}
