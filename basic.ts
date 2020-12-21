// 定义函数类型并确定返回值为string
const foo: () => string = () => {
  return 'foo'
}

console.log(foo())

// 函数参数和返回值定义
// const getTotal: (one: number, two: number) => number = (one, two) => {
//   return one + two
// }
function getTotal(one: number, two: number): number {
  return one + two
}
const total = getTotal(1, 2)
console.log(total)

// 参数是对象时怎么办呀
function getTotal1({one, two}: {one: number, two: number}): number {
  return one + two
}
getTotal1({one: 1, two: 2})

// 数组
const numArr: number[] = [1, 2, 3]
const stringArr: string[] = ['123', '321']
const arr: (number | string)[] = [1, '', 1, 'j']


// 数组中对象类型定义
const person: {name: string, age: number, sex: boolean}[] = [
  {
    name: 'huahua',
    age: 20,
    sex: true
  },
  {
    name: 'chaochao',
    age: 20,
    sex: false
  }
]

type Person = {
  name: string,
  age: number,
  sex: boolean
}
// 用类定义也可以
// class Person {
//   name: String;
//   age: Number;
//   sex: Boolean;
// }
const persons: Person[] = [
  {
    name: 'huahua',
    age: 20,
    sex: true
  },
  {
    name: 'chaochao',
    age: 20,
    sex: false
  }
]

// interface接口
// function getResume(person: Person) { // 在此处 用type或者类class都可以
//   console.log(`${person.name}是个${person.age}岁的${person.sex ? '女' : '男'}孩`)
// }
interface Jobhunter {
  name: string
  age: number
  sex: boolean
  [propname: string]: any
  say(): void
}
function getResume(jobhunter: Jobhunter) {
  console.log(`${jobhunter.name}是个${jobhunter.age}岁的${jobhunter.sex ? '女' : '男'}孩`)
}
getResume({
    name: 'huahua',
    age: 20,
    sex: true,
    height: 160,
    hobby: 'eat',
    say() {
      console.log('hi')
    }
})

class Quan implements Jobhunter {
  name = 'quanjiaxin';
  age = 20;
  sex = true;
  height = 160;
  say() {
    console.log('hi')
  }
}

// 联合类型
interface Phone {
  type: string
  owner: string
  call: () => {}
}

interface Computer {
  type: string
  owner: string
  surf: () => {}
}
// 类型保护 as语法
function judgeWhat(pro: Computer | Phone) {
  if(pro.type === 'HP') {
    (pro as Computer).surf()
  } else {
    (pro as Phone).call()
  }
}

// 类型保护 in语法
function judgeWhatTwo(pro: Computer | Phone) {
  if("call" in pro) {
    pro.call()
  } else {
    pro.surf()
  }
}

// 类型保护 typeof语法
function add(first: number | string, second: number | string) {
  if(typeof first === 'string' || typeof second === 'number') {
    return `${first}${second}`
  }
  return first + second;
}

// 类型保护 instanceof语法
class NumberObj {
  count: number
}
function addObj(first: NumberObj | object, second: NumberObj | object) {
  if(first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count
  }
  return 0
}