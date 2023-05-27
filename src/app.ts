let age1: number;
let toggle: boolean;
let empty: null;
let name1: string;
let notInitialize: undefined;
// let callback = (argg: number) => number;

age1 = 50;
toggle = true;
empty = null;
name1 = "Max";
notInitialize = undefined;
// callback = (a) => {
//   return 100 + a;
// };

// ================================================
let anything: any;

anything = -2;
anything = "Text";
anything = {};

// ================================================
let some: unknown;
some = "Text";

let str: string;

if (typeof some === "string") {
  str = some;
}
// ================================================
let person: [string, number];

person = ["Max", 21];

// ================================================

enum Stage {
  LOADING,
  READY,
}

const filmStage = {
  stageNow: Stage.READY,
};

if (filmStage.stageNow === Stage.READY) {
  console.log("Film is allready loaded");
}
if (filmStage.stageNow === Stage.LOADING) {
  console.log("A Film is still loading");
}
// enum Load {
//   LOADING,
//   READY,
// }

// const page = {
//   load: Load.READY,
// };

// if (page.load === Load.LOADING) {
//   console.log("Сторінка завантажується");
// }
// if (page.load === Load.READY) {
//   console.log("Сторінка завантажена");
// }
// ================================================
let something: string | number;

something = "1";

// ================================================
// 'enable' або 'disable'

let acces: "enable" | "disable";

acces = "disable";
// ================================================
// function showMessage(message) {
//   console.log(message);
// }

function showMessage(message: string): void {
  console.log(message);
}

// function calc(num1, num2) {
//   return num1 + num2;
// }

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

// function customError() {
//   throw new Error("Error");
// }

function customError(): never {
  throw new Error("Error");
}
// ================================================
type PageType = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};

const page1: PageType = {
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
