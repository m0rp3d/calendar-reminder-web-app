import { FormControl } from "@angular/forms";


export function nameValidator(control: FormControl): { [key: string]: boolean } | null {

    const nameRegexp: RegExp = /[!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?]/;
    if (control.value && nameRegexp.test(control.value)) {
      return { invalidName: true };
    }

    return null;
  }
