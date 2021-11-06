import { Injectable } from '@angular/core';
import {AbstractControl, FormControl, ValidationErrors} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public nameSurnamePattern: string = '([a-zA-Zá-úÁ-Ú]+) ([a-zA-Zá-úÁ-Ú]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  cannotBeWeikand( control: FormControl ): ValidationErrors | null {
    const value:string = control.value?.trim().toLowerCase();
    if(value === 'weikand') {
      return {noWeikand: true}
    }
    return null;
  }

  sameFields(field1: string, field2: string) {

    return (formGroup: AbstractControl): ValidationErrors | null => {

      const pass1 = formGroup.get(field1)?.value;
      const pass2 = formGroup.get(field2)?.value;

      if(pass1 !== pass2) {
        formGroup.get(field2)?.setErrors({different:true});
        return {different: true}
      }

      formGroup.get(field2)?.setErrors(null);

      return null;
    }
  }

}
