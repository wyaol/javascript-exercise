import Person from './person';

export default class Student extends Person {
  constructor(name, age, _class) {
    super(name, age);
    this.klass = _class;
  }

  introduce() {
    return `I am a Student. I am at Class ${this.klass}.`;
  }
}
