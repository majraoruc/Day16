// Only change code below this line
class Person {
    constructor(name) {
        this._name = name;
    }

    static display(){
        return "Static method is invoked from Person class";
    }
    
    show(){
        console.log(Person.display());
    }

}
// Only change code above this line

const message = new Person();
message.show();
module.exports = Person;