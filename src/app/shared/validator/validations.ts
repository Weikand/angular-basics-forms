import {FormControl} from "@angular/forms";

export const nameSurnamePattern: string = '([a-zA-Zá-úÁ-Ú]+) ([a-zA-Zá-úÁ-Ú]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const cannotBeWeikand = ( control: FormControl ) => {
  const value:string = control.value?.trim().toLowerCase();
  if(value === 'weikand') {
    return {noWeikand: true}
  }
  return null;
}
