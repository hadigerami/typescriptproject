class Student {
    fullName: string;
    constructor(public firstName: string, public middleName: string, public lastName: string){
        this.fullName = `${firstName} ${middleName} ${lastName}`;
    }
}
interface Person {
    firstName: string;
    lastName: string;
}
function sayHelloTo(person:Person) {
     return (`hello ${person.firstName} ${person.lastName}`);
} 
let student = new Student("Ashkan", "", "Ashtiani"); 
console.log(sayHelloTo(student));