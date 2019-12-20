// 11. 接口
/**
 * 接口一方面可以在面向对象编程中表示为行为的抽象，另外可以用来描述对象的形状
 * 接口就是把一些类中共有的属性和方法抽象出来,可以用来约束实现此接口的类
 * 一个类可以继承另一个类并实现多个接口
 * 接口像插件一样是用来增强类的，而抽象类是具体类的抽象概念
 * 一个类可以实现多个接口，一个接口也可以被多个类实现，但一个类的可以有多个子类，但只能有一个父类
 */
export = {}
// 11.1 接口来表示对象的形状
interface Speakable {
  name?: string;
  speak(): void
}
let speaker: Speakable = {
  speak() {}
}

interface Recttangle {  //描述矩形
  width: number;
  height: number
}
let r: Recttangle = {
  width: 10,
  height: 10
}

// 11.2 用来描述行为的对象
interface AnimalLike {
  eat(): void;
  move(): void
}
// 接口可以继承
interface PersonLike extends AnimalLike {
  speak(): void
}
// 一个类要实现一个接口，必须实现接口中所有方法
class Bird implements AnimalLike {
  eat() {}
  move() {}
}

// 11.3 任意属性
//无法预先知道有哪些新的属性的时候,可以使用 `[propName:string]:any`,propName名字是任意的
interface Person1 {
  readonly id: number;
  name: string;
  [propName: string]: any
}

let p1:Person1 = {
  id:1,
  name:'zhufeng',
  age:10,
  gender: 0
}

// 11.4 readonly
// p1.id = "11" // Cannot assign to 'id' because it is a read-only property.

// 11.4 如何用接口规范或定义函数
interface Discount {
  (price: number): number  // 定义:参数类型 返回值类型
}

let discount: Discount = function (price: number): number {
  return price * .8
}


// 11.5 可索引接口
interface UserInterface {
  [index:number]: string
}
let arr: UserInterface = ["1","2","3"]
console.log(arr)


// 11.6 类接口 对类的约束

// 11.7 构造函数的类型
class Animal3{
  constructor(public name:string){
  }
}
interface WithNameClass{
  new(name:string):Animal3
}
function createAnimal(clazz:WithNameClass,name:string){
   return new clazz(name);
}
let a1 = createAnimal(Animal3,'zhufeng');
console.log(a1.name);