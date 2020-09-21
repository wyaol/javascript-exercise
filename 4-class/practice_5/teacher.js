import Person from './person';

export default class Teacher extends Person {
  constructor(name, age, _class) {
    super(name, age);
    this.klass = _class;
  }

  introduce() {
    if (this.klass === undefined) {
      return `${super.introduce()} I am a Teacher. I teach No Class.`;
    }
    return `${super.introduce()} I am a Teacher. I teach Class ${this.klass}.`;
  }
}
