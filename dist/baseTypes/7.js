/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek["mon"] = "monday";
    DayOfWeek["tue"] = "tuesday";
    DayOfWeek["wed"] = "wednesday";
    DayOfWeek["thu"] = "thursday";
    DayOfWeek["fri"] = "friday";
    DayOfWeek["sat"] = "saturday";
    DayOfWeek["sun"] = "sunday";
})(DayOfWeek || (DayOfWeek = {}));
function isWeekend(day) {
    if (day === DayOfWeek.sat || day === DayOfWeek.sun) {
        return true;
    }
    return false;
}
isWeekend("monday");
isWeekend("saturday");
//# sourceMappingURL=7.js.map