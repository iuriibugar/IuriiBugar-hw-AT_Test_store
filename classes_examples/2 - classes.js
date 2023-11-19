
class Parent {

    constructor(name, age){
        this.name = name;
        this.age = age;
        this.lastName = "Bugar"
    }

    greeting() {
        console.log('Hi');
    }

    telName() {
        console.log(`My name is ${this.name}`);
    }

    tellAge() {
        console.log(`I'm ${this.age} years old`);
    }

    tellJobTitle() {
        console.log(`My job title is ${this.jobTitle}`);
    }
}

class Child extends Parent {

    constructor(name, age, text){
        super(name, age);
        this.text = text;
    }

    greeting() {
        console.log('Hey');
    }

    goToSchool() {
        console.log('I like go to school!');
    }
}

const parent = new Parent('Iurii', 33);
const child = new Child('Katya', 5)

parent.jobTitle = "QA"

parent.greeting();
parent.telName();
parent.tellAge();
parent.tellJobTitle();
//parent.goToSchool();
console.log('\n');
child.greeting();
child.telName();
child.tellAge();
child.tellJobTitle();
child.goToSchool();