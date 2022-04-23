function Person(firstName,lastName,age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

Person.prototype.speak = () =>{
    console.log('Hello from Person');
}

let person1 = new Person('Rashmiranjan', 'Beura', 28);

function Student(firstName,lastName,age, classNumber, rollNumber, section){
    Person.call(this,firstName,lastName,age); //this would work even if the prototype chain is not established because of call
    this.classNumber = classNumber;
    this.rollNumber = rollNumber;
    this.section = section;
}

Student.prototype = Person.prototype; //this would work but it will replace student protype and methods on student prototype will not be accessible 
Student.prototype = Object.create(Person.prototype); //adding personprotype to prototype of  studentprototype
Student.prototype.constructor = Student; //All prototype has constructor property; replace it whenever changing prototype;

let s1 = new Student('Rashmiranjan', 'Beura', 28, 8, 1, 'A');
console.log(s1.speak()); //this would not work if prototype chain is not established

//prortotypes are object instances