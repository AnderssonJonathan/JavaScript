/***********************************************************'*/
// Getters och Setters...
/***********************************************************'*/

class Person {
  constructor(firstName, lastName, email) {
    // Ändra till standardnamgivning
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
  }

  // Skapa Getters och Setters för åtkomst till data
  // Getters
  get firstName() {
    // return this._firstName;
    // return this._firstName.charAt(0).toUpperCase() + this._firstName.slice(1);
    return this.adjustNaming(this._firstName);
  }

  get lastName() {
    // return this._lastName;
    // return this._lastName.charAt(0).toUpperCase() + this._lastName.slice(1);
    return this.adjustNaming(this._lastName);
  }

  get email() {
    // return this._email;
    return this._email.toLowerCase();
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Setters
  set firstName(value) {
    // this._firstName = value.charAt(0).toUpperCase() + value.slice(1);
    this._firstName = this.adjustNaming(value);
  }
  set lastName(value) {
    // this._lastName = value.charAt(0).toUpperCase() + value.slice(1);
    this._lastName = this.adjustNaming(value);
  }
  set email(value) {
    this._email = value.toLowerCase();
  }

  // Metoder
  adjustNaming(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}

const michael = new Person('michael', 'gustavsson', 'Michael@gmail.com');
console.log(michael);
console.log(michael.firstName);
console.log(michael.lastName);
console.log(michael.email);

michael.firstName = 'kalle';
michael.lastName = 'andersson';
michael.email = 'Kalle@Gmail.com';
console.log(michael);

console.log(michael.fullName);
