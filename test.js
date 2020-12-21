function greeter(person) {
    return 'hello ' + person.lastName + person.firstName;
}
console.log(greeter({ lastName: 'xiao', firstName: 'huahua' }));

const foo = () => console.log(111)
foo()