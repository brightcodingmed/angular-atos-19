var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
var person = new Person('khalid', 12);
var age = person.getAge();
console.log('my: ' + age);
