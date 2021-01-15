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

let arr2: Array<number> = [1, 2, 3]
let tuple: [number, string] = [1,'str']
enum Color {
  Red,
  Green = 2,
  Yellow
}
let cc: Color = Color.Red
console.log(cc, Color.Yellow) // 1
let colorName = Color[1]
console.log(typeof colorName)

let [first] = [1,2,3]

// function printLabel(labelledObj: {label: string}) {
//   console.log(labelledObj)
// } 

// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);

// printLabel({ size: 10, label: "Size 10 Object" });

// interface LabelledValue {
//   label: string
// }
type LabelledValue =  {
  label: string
}
function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label)
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

interface SquareConfig {
  color?: string,
  width?: number
}
function createSquare(config: SquareConfig): {color: string, area: number} {
  let newSquare = {
    color: 'white',
    area: 100
  }
  if(config.color) {
    newSquare.color = config.color
  }
  if(config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
}
interface Point {
  readonly x: number;
  y: number;
}
let p1: Point = { x: 10, y: 20 };
p1.x = 5

let arr1: ReadonlyArray<number> = [1,2,3,4]
arr1.push(5)
let arr3: number[] = arr1 // 报错 不能这样赋值 但是可以用类型断言重写
arr3 = arr1 as number[]

interface searchFunc {
  (source: string, subString: string): boolean
}
let mySearch: searchFunc = function(src, sub) {
  let result = src.search(sub)
  return result > -1
}

interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function (start: number) { };
  counter.interval = 123;
  counter.reset = function () { };
  return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

let buildNameFun: (firstName: string, ...restName: string[]) => string = buildName

function buildName(x: string, ...y: string[]) {
  return x + y.join(' ')
}

let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);

