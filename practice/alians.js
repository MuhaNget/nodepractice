
class Alien{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    details(){
        return `My name is ${this.name} and I am ${this.age} years old`;
    }
}

module.exports = Alien;