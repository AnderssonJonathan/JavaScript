/***********************************************************'*/
// E6 classes inheritance...
/***********************************************************'*/
// Föräldra klass(bas klass), super klass
class Person {
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Härledda klass(barn klass)
class Student extends Person {
  constructor(firstName, lastName, email, phone, birthYear) {
    super(firstName, lastName, email);
    this.phone = phone;
    this.birthYear = birthYear;
  }

  enrollCourse(course) {
    return `Välkommen till kursen ${course} ${this.getFullName()}`;
  }

  // Åsidosätt föräldra klassen metod...
  getFullName() {
    return this.firstName;
  }
}

const person = new Person('Michael', 'Gustavsson', 'michael@gmail.com');
console.log(person);
console.log(person.getFullName());

const eva = new Student('Eva', 'Olsson', 'eva@gmail', '070-123456', 1998);
console.log(eva);
console.log(eva.getFullName());
console.log(eva.enrollCourse('Klientprogrammering med JavaScript'));
