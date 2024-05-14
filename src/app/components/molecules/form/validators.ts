import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function minLengthValidator(minLength: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value && control.value.length < minLength) {
      return { minLength: { requiredLength: minLength, actualLength: control.value.length } };
    }
    return null;
  };
}

export function maxLengthValidator(maxLength: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value && control.value.length > maxLength) {
      return { maxLength: { requiredLength: maxLength, actualLength: control.value.length } };
    }
    return null;
  };
}

export function capacitiesValidator(idItems: number[]): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!idItems || idItems.length === 0) {
      return { 'required': true };
    } else if (idItems.length < 3) {
      return { 'minLength': true };
    } else if (idItems.length > 20) {
      return { 'maxLength': true };
    }
    return null;
  };
}

export function endDateAfterStartDateValidator(startDateControlName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const startDateControl = control.root.get(startDateControlName);
    if (!startDateControl || !startDateControl.value || !control.value) {
      return null;
    }
    const startDate = new Date(startDateControl.value);
    const endDate = new Date(control.value);
    if (endDate < startDate) {
      return { endDateBeforeStartDate: true };
    }
    return null;
  };
}
