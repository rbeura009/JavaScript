//how many ways we can create a object
function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.ageValue = age;
}
const person = new Person("rosalin", "jena", 28);

console.log(person);
