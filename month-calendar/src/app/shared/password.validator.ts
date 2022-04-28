import { AbstractControl, FormGroup } from "@angular/forms";

export function passwordValidator(passForm: FormGroup): { [key: string]: boolean } | null {
  let password: string;
  let confirmPassword: string;

  password = passForm.get('password')?.value;
  confirmPassword = passForm.get('cpassword')?.value;

  if (password !== confirmPassword) {
    return { 'misMatch': true };
  }
  else {
    return null;
  }

}
