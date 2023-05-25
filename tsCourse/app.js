var age;
var toggle;
var empty;
var name1;
var notInitialize;
var callback = function (argg) { return number; };
age = 50;
toggle = true;
empty = null;
name1 = "Max";
notInitialize = undefined;
callback = function (a) {
    return 100 + a;
};
// ================================================
var anything;
anything = -20;
anything = "Text";
anything = {};
// ================================================
var some;
some = "Text";
var str;
if (typeof some === "string") {
    str = some;
}
// ================================================
var person;
person = ["Max", 21];
// ================================================
var Stage;
(function (Stage) {
    Stage[Stage["LOADING"] = 0] = "LOADING";
    Stage[Stage["READY"] = 1] = "READY";
})(Stage || (Stage = {}));
var filmStage = {
    stageNow: Stage.READY,
};
if (filmStage.stageNow === Stage.READY) {
    console.log("Film is allready loaded");
}
if (filmStage.stageNow === Stage.LOADING) {
    console.log("A Film is still loading");
}
// ================================================
var something;
something = "1";
// ================================================
// 'enable' або 'disable'
var acces;
acces = "disable";
// ================================================
// function showMessage(message) {
//   console.log(message);
// }
function showMessage(message) {
    console.log(message);
}
// function calc(num1, num2) {
//   return num1 + num2;
// }
function calc(num1, num2) {
    return num1 + num2;
}
// function customError() {
//   throw new Error("Error");
// }
function customError() {
    throw new Error("Error");
}
var page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: new Date("2021-01-01"),
        updateAt: new Date("2021-05-01"),
    },
};
var page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
