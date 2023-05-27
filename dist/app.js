"use strict";
let age1;
let toggle;
let empty;
let name1;
let notInitialize;
age1 = 50;
toggle = true;
empty = null;
name1 = "Max";
notInitialize = undefined;
let anything;
anything = -2;
anything = "Text";
anything = {};
let some;
some = "Text";
let str;
if (typeof some === "string") {
    str = some;
}
let person;
person = ["Max", 21];
var Stage;
(function (Stage) {
    Stage[Stage["LOADING"] = 0] = "LOADING";
    Stage[Stage["READY"] = 1] = "READY";
})(Stage || (Stage = {}));
const filmStage = {
    stageNow: Stage.READY,
};
if (filmStage.stageNow === Stage.READY) {
    console.log("Film is allready loaded");
}
if (filmStage.stageNow === Stage.LOADING) {
    console.log("A Film is still loading");
}
let something;
something = "1";
let acces;
acces = "disable";
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
const page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: new Date("2021-01-01"),
        updateAt: new Date("2021-05-01"),
    },
};
const page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
//# sourceMappingURL=app.js.map