export = {};

/**
 * 结构类型系统
 */

// 1. 接口的兼容性
/**
 * 如果传入的变量和声明的类型不匹配，TS就会进行兼容性检查
 * 原理是Duck-Check,就是说只要目标类型中声明的属性变量在源类型中都存在就是兼容的
 */
interface Animal {
  name: string;
  age: number;
}

interface Person {
  name: string;
  age: number;
  gender: number;
}
// 要判断目标类型`Person`是否能够兼容输入的源类型`Animal`
function getAnimalName(animal: Animal) {
  return animal.name;
}
let p: Person = {
  name: "yang",
  age: 18,
  gender: 1
};

//只有在传参的时候两个变量之间才会进行兼容性的比较，赋值的时候并不会比较,会直接报错  传入的参数包含的属性只能多不能少(Person中属性要比Animal中多)
getAnimalName(p);
// let a: Animal = {
//   name: 'zhufeng',
//   age: 10,
//   gender: 0  // 报错
// }

// 2. 基本类型的兼容性检查

//基本数据类型也有兼容性判断
let num: string | number;
let str: string = "yang";
num = str;

//只要有toString()方法就可以赋给字符串变量 有toString方法说明符合num2要求
let num2: {
  toString(): string;
};
let str2: string = "yang";
num2 = str2;

// 3. 类的兼容性
/**
 * 在TS中是结构类型系统，只会对比结构而不在意类型
 */
class Animal {
  name!: string;
}
class Bird extends Animal {
  swing!: string;
}
let a: Animal;
a = new Bird();
let b: Bird;
//并不是父类兼容子类，子类不兼容父类 只关心里边的属性是不是能覆盖
// b = new Animal(); // 报错Property 'swing' is missing in type 'Animal' but required in type 'Bird'

class Animal1 {
  name!: string;
}
//如果父类和子类结构一样，也可以的
class Bird1 extends Animal1 {}

let a1: Animal1;
a1 = new Bird1();

let b1: Bird1;
b1 = new Animal1();

//甚至没有关系的两个类的实例也是可以的
class Animal2 {
  name!: string;
}
class Bird2 {
  name!: string;
}
let a2: Animal2;
a2 = new Bird2();
let b2: Bird2;
b2 = new Animal2();

// 4. 函数的兼容性
/**
 * 比较函数的时候是要先比较函数的参数，再比较函数的返回值
 */

//  4.1 比较参数
type sumFunction = (a: number, b: number) => number;
let sum: sumFunction;
function fun1(a: number, b: number): number {
  return a + b;
}
sum = fun1;

//  4.2 比较返回值
function fun2(a: number): number {
  return a;
}
sum = fun2;



// 5.函数参数的协变
/**
 * 目标如果能够兼容源就是可以的
 */

//目标如果能够兼容源就是可以的
type LogFunc = (a: number | string) => void;
let log: LogFunc;
function log1(a: number | string | boolean) {
  console.log(a)
}
log = log1;


// 6.泛型的兼容性
/**
 * 泛型在判断兼容性的时候会先判断具体的类型,然后再进行兼容性判断
 */

