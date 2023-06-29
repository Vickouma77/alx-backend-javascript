export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be set to a string');
    }else{
      this._name = name;
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be set to a number');
    }else {
      this._length = length;
    }
    if (Array.isArray(students) === false) {
      throw new TypeError('Students must be set to an array of strings');
    }else {
      this._students = students;
    }
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(newName) {
    this._name = newName;
  }

  set length(newLength) {
    this._length = newLength;
  }

  set students(newStudents) {
    this._students = newStudents;
  }
}
