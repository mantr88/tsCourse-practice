/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DayOfWeek {
  mon = "monday",
  tue = "tuesday",
  wed = "wednesday",
  thu = "thursday",
  fri = "friday",
  sat = "saturday",
  sun = "sunday",
}

function isWeekend(day: string): boolean {
  if (day === DayOfWeek.sat || day === DayOfWeek.sun) {
    return true;
  }
  return false;
}

isWeekend("monday");
isWeekend("saturday");
