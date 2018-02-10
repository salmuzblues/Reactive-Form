import { AbstractControl } from '@angular/forms';

export class CustomValidators {

  // create static method
  static passwordStrength (control: AbstractControl) {

    if (CustomValidators.isEmptyValue(control.value)) {
      return null;
    }
    if (!control.value.match(/^(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#\$%\^&\*]{8,}$/)) {
      return {'weakPassword': true};
    }

    return null;
  }

  // this method  is for empty value

  static isEmptyValue(value) {

    return value == null || typeof value === 'string' && value.length === 0 ;
  }


}
