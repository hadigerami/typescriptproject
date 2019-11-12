interface Person {     
    firstName: string;     
    lastName: string;
}
function sayHelloTo(person:Person) {
    return (`hello ${person.firstName} ${person.lastName}`);
}
let user = { firstName: "Ashkan", lastName: "Ashtiani" };
console.log(sayHelloTo(user));