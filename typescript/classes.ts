class Person {

    constructor(public name, private age) { }

    getAge() {
        return this.age;
    }
   
}

let person = new Person('khalid', 12);
let age = person.getAge();

console.log('my: ' + age);


