/*
  Ви створюєте гру, де є персонажі з різними ролями.
  Зараз ви працюєте над класом Wizard, який має реалізовувати два інтерфейси - ICharacter та ISpellCaster.

  Визначте інтерфейси ICharacter та ISpellCaster так, щоб вони відповідали вимогам класу Wizard.
  Інтерфейс ICharacter повинен включати властивості name і level, і навіть метод introduce і levelUp.
  Інтерфейс ISpellCaster повинен включати метод castSpell.
*/
// реалізація класу Wizard
class Wizard {
    constructor(name, level) {
        this.name = name;
        this.level = level;
        if (this.level < 1) {
            throw new Error('Level too low');
        }
    }
    introduce(phrase) {
        console.log(phrase + ', ' + this.name);
    }
    castSpell() {
        console.log('Casting a spell, behold my power!');
    }
    levelUp() {
        this.level++;
        console.log(`Level up! New level is ${this.level}`);
    }
}
// тестування класу
const wizard = new Wizard('Merlin', 15);
wizard.introduce('I am the mighty wizard');
wizard.castSpell();
wizard.levelUp(); // Level up! New level is 16
export {};
//# sourceMappingURL=3.js.map