class Person {
    constructor(name, email, age) {
        this._name = name;
        this._email = email;
        this._age = age;
    }
    getPerson() {
        var personInfo = `Name: ${this.name}, email: ${this.email}, age: ${this.age}`;
        return personInfo;
    }

}


module.exports = Person;