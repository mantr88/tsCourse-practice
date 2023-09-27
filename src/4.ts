class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door = false;
  protected key: Key;
  protected tenants: Person[] = [];
  constructor(key: Key) {
    this.key = key;
  }
  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
    }
  }
  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  door = false;
  key = new Key();
  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    }
  }

  openDoor(key: Key): void {
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
