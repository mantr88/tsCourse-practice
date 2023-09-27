class Key {
    constructor() {
        this.signature = Math.random();
    }
    getSignature() {
        return this.signature;
    }
}
class Person {
    constructor(key) {
        this.key = key;
    }
    getKey() {
        return this.key;
    }
}
class House {
    constructor(key) {
        this.door = false;
        this.tenants = [];
        this.key = key;
    }
    comeIn(person) {
        if (this.door) {
            this.tenants.push(person);
        }
    }
}
class MyHouse extends House {
    constructor() {
        super(...arguments);
        this.door = false;
        this.key = new Key();
    }
    comeIn(person) {
        if (this.door) {
            this.tenants.push(person);
        }
    }
    openDoor(key) {
        if ((this.key = key)) {
            this.door = true;
        }
    }
}
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);
house.openDoor(person.getKey());
house.comeIn(person);
const johnKey = new Key();
const johnHouse = new MyHouse(johnKey);
const john = new Person(johnKey);
johnHouse.openDoor(john.getKey());
johnHouse.comeIn(john);
export {};
//# sourceMappingURL=4.js.map