import { AbstractControl } from "@angular/forms";

export function dayIsCorrect(control: AbstractControl): { [key: string]: boolean } | null {
  let month: number;
  let day: number;
  let leapYear: boolean;

  let currentTime = new Date();
  // get the current year in real time
  let year: number = currentTime.getFullYear();

  // check if current year is leap year
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        leapYear = true;
      } else {
        leapYear = false;
      }
    } else {
      leapYear = true;
    }
  } else {
    leapYear = false;
  }

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
    if (leapYear === false) {
      if (day < 1 || day > 28)
        return { dayWrong28: true };
    } else {
      if (day < 1 || day > 29)
      return { dayWrong29: true };
    }

  }

  return null;
}
