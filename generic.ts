// function join(first: number | string, second: number | string) {
//   return `${first}${second}`
// }
// console.log(join(1, 'huahuahu'))

// 要保证first和second同一类型怎么办
function join<Q extends number | string>(first: Q, second: Q) {
  return `${first}${second}`
}
console.log(join<number>(1, 2))

function join1<T>(params: Array<T>) {
  return params
}
console.log(join1<string>(['123', '321']))

function join2<T>(params: T[]) {
  return params
}
console.log(join1<string>(['123', '321']))

function join3<T, Q>(first: T, second: Q) {
  return `${first}${second}`
}
console.log(join3<string, number>('21', 321))

// 写一下 边写边看就不会困了
// 类的泛型
class SelectGirl<T> {
  constructor(private girl: T[]) { }
  getGirl(index: number): T {
    return this.girl[index]
  }
}

const selectGirl = new SelectGirl<string>(['小红', '小花', '小草'])
console.log(selectGirl.getGirl(1))

// 泛型中的继承
// 使用场景 不知道以后要用什么类型 但是里面一定有一个name属性
interface Girl {
  name: string
}
class SelectGirl2<T extends Girl> {
  constructor(private girl: T[]) { }
  getGirl(index: number): string {
    return this.girl[index].name
  }
}

const selectGirl2 = new SelectGirl2<Girl>([
  { 
    name: 'xiaohua',
    // age: 20
  }
])
console.log(selectGirl2.getGirl(0))

