import { AbstractControl } from "@angular/forms";

export function dayIsCorrect(control: AbstractControl): { [key: string]: boolean } | null {
  let month: number;
  let day: number;

  month = +control.get('month')?.value;
  day = +control.get('day')?.value;

  console.log(month);
  console.log(day);

  if (month < 1 || month > 12) {
    return { monthWrongDay: true };
  }
  else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
    if (day < 1 || day > 31) {
      return { dayWrong31: true };
    }
  }
  else if (month === 4 || month === 6 || month === 9 || month === 11) {
    if (day < 1 || day > 30)
      return { dayWrong30: true };
  }
  else {
    if (day < 1 || day > 28)
      return { dayWrong28: true };
  }

  return null;
}
