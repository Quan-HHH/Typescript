interface Person {
  lastName: String
  firstName: String
}

function greeter(person: Person) {
  return 'hello ' + person.lastName + person.firstName;
}

console.log(greeter({ lastName: 'xiao', firstName: 'huahua'}))

let arr: Array<number> = [1,2,3]

console.log('hello'.substr(1))

enum Huangyichao {
  h,
  y,
  c,
}
let hyc: Huangyichao = Huangyichao.c
console.log(hyc)