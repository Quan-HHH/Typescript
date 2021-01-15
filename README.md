# Typescript
ts学习

## 基础类型
- 布尔值
```js
let isDone: boolean = false
```

- 数字
```js
let num: number = 1
```

- 字符串
```js
let str: string = '123'
let str2: string = `${str}456`
```

- 数组
```js
let arr: number[] = [1, 2, 3]
let arr2: Array<numbet> = [1, 2, 3]  // 数组泛型
```

- 元组
表示已知数量和类型的数组
```js
// 第一个必须是number 第二个必须是string 后面的是number ｜ string
let tuple: [number, string] = [1, 'str']
```

- 枚举
默认从0开始为元素编号, 也可以手动编号, 手动编号如果是从第一个开始编 则后面的根据第一个元素编号递增 
如果不是从第一个开始编 前面的依旧是从0开始 自手动编号元素起 按手动编号递增
如以下编号为 0 3 4
```js
enum Color {
  Red,
  Green = 3,
  Yellow
}
Color.Red // 0
// 知道枚举类型的值的时候 可以通过下标反查
Color[3] // Green
```

- 任意值
不通过类型检查 直接通过编译阶段的检查
```js
let notSure: any = 1
notSure = 'str'
notSure = false
```

- 空值 void 只能给他赋予undefined 或者 null

- undefined / null
默认情况下 null和undefined是所有类型的子类型 也就是说可以为任何类型赋值为null或undefined
tsconfig设置strictNullChecks 则undefined只能赋给undefined null只能赋给null
```js
let u: number = undefined
```

- never 永远不存在的值的类型


## 类型断言
- 尖括号语法
```js
let someValue: any = 'this is a string'
let strLength: number = (<string>someValue).length
```

- as语法
```js
let someValue: any = 'this is a string'
let strLength: number = (someValue as string).length
```

## 接口
```js
interface LabelledValue {
  label: string
}
function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label)
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
```

- 可选属性
对可能存在的属性进行预定义
```js
interface LabelledValue {
  color?: string,
  area?: number
}
```

- 只读属性
```js
interface LabelledValue {
  readonly color: string,
}
```

- ReadonlyArray<T> 与Array<T>类似 只是去掉了所有的可变方法
 - readonly 和 const 
    属性用readonly 变量用const

- 接口除了描述普通对象 还可以描述**函数类型**
```js
interface searchFunc {
  (source: string, subString: string): boolean
}
let mySearch: searchFunc = function(src, sub) {
  let result = src.search(sub)
  return result > -1
}
```

- 可索引的类型
```js 
// 当用number去索引StringArray时会得到string类型的返回值
interface stringArray {
  [index: number]: string
}
```

## 类 实现接口 implements
```js
class Clock implements ClockInterface
```
## 接口继承类 extends 但是不包括其实现

## 函数
### 重载
- javaScript里函数根据传入不同的参数而返回不同类型的数据是很常见的