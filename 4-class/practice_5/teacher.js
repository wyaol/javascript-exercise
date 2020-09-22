import Person from './person';

export default class Teacher extends Person {
  constructor(name, age, _class) {
    super(name, age);
    this.klass = _class;
  }

  introduce() {
    return `${super.introduce()} I am a Teacher. I teach ${
      this.klass === undefined ? 'No Class' : `Class ${this.klass}`
    }.`;
  }
}
