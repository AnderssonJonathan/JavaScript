/***********************************************************'*/
//  Klass metoder
/***********************************************************'*/
class Person {
  #firstName = '';
  #lastName = '';
  #email = '';

  constructor(firstName, lastName, email) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.email = email;
  }

  get firstName() {
    return this.#adjustNaming(this.#firstName);
  }

  get lastName() {
    return this.#adjustNaming(this.#lastName);
  }

  get email() {
    return this.#email.toLowerCase();
  }

  set firstName(value) {
    this.#firstName = this.#adjustNaming(value);
  }

  set lastName(value) {
    this.#lastName = this.#adjustNaming(value);
  }

  set email(value) {
    this.#email = value.toLowerCase();
  }

  // Instance metod
  // Methods
  getFullName() {
    return `${this.#firstName} ${this.#lastName}`;
  }

  // Private methods
  #adjustNaming(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  // Class member
  static sayHello() {
    console.log('Välkommen 👋');
  }
}

class Student extends Person {
  #courses = [];
  #birthYear = 0;

  constructor(firstName, lastName, email, birthYear) {
    super(firstName, lastName, email);
    this.#birthYear = birthYear;
  }

  // Getters
  get age() {
    return this.#calculateAge();
  }

  get birthYear() {
    return this.#birthYear;
  }

  get courses() {
    return this.#courses;
  }
  // Methods
  enrollCourses(courseName) {
    this.#courses.push(courseName);
    return this;
  }

  // Private methods.
  #calculateAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.#birthYear;
  }
}

const person = new Person('Michael', 'Gustavsson', 'michael@gmail.com');
console.log(person);
console.log(person.firstName);

const maria = new Student('Maria', 'Eriksson', 'maria@gmail.com', 1999);
console.log(maria);
maria.enrollCourses('Klientprogrammering med JavaScript');
maria.enrollCourses('Serverprogrammering med JavaScript');
maria.enrollCourses('React med TypeScript');
console.log(maria.courses);
console.log(maria.age);

Person.sayHello();

console.log(maria.enrollCourses('Kurs 1').enrollCourses('Kurs 2').courses);

// Konstruktor funktion.
// function Teacher() {}

// Teacher.sayHello = function () {
//   console.log('Välkommen 🎉');
// };

// Teacher.sayHello();
