export {}  // 可以防止变量名冲突(与其他文件变量名相同会报错)

/**
 * 数据类型
 */

// 布尔类型(boolean) #
let married: boolean = false;

// 数字类型(number) #
let num: number = 10;

// 字符串类型(string) #
let str: string = 'yang';

// 数组类型(array)
let arr1: number[] = [1, 2, 3];
let arr2: Array<string> = ['1', '2', '3'];
let arr3: object[] = [{a:1,b:2,c:3}];

// 元组类型(tuple) #
// 在 TypeScript 的基础类型中，元组（ Tuple ）表示一个已知数量和类型的数组, 每一项可以是不同的类型，有长度预定，数组没有。
let tuple: [number, string] = [10, 'yang'];
tuple[0].toFixed(2);
tuple[1].length;

// 枚举类型(enum) #
// 事先考虑某一个变量的所有的可能的值，尽量用自然语言中的单词表示它的每一个值
  // - 普通枚举 #
  enum Gender {
    girl,
    boy
  }
  let boy: Gender = Gender.boy;
  console.log('我是'+boy)
  enum Week {
    monday = 1,
    tuesday = 2
  }
  console.log(`今天是星期${Week.monday}`)
  // - 常数枚举 #
  // 常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员。
  // 假如包含了计算成员，则会在编译阶段报错
  const enum Color {
    RED,
    YELLOW,
    BLUE
  }
  console.log(Color.RED, Color.YELLOW, Color.BLUE);  // 编译结果 console.log(0 /* RED */, 1 /* YELLOW */, 2 /* BLUE */);
  // console.log(Color) // 会报错 "const" 枚举仅可在属性、索引访问表达式、导入声明的右侧、导出分配或类型查询中使用。

// 任意类型(any) #
/**
 *  1.any就是可以赋值给任意类型
    2.第三方库没有提供类型文件时可以使用any
    3.类型转换遇到困难时
    4.数据结构太复杂难以定义
  */
let root:(HTMLElement|null) = document.getElementById("root"); // 联合类型
root!.style.color = "blue";  // 加!忽略警告，标识root肯定有值

let root1: any = document.getElementById("root"); // 可以赋值为任何类型
root1.style.background = "red";
root1 = '1';
root1 = 10;

// null 和 undefined #
/**
 * 1.null 和 undefined 是其它类型的子类型，可以赋值给其它类型，如数字类型，此时，赋值后的类型会变成 null 或 undefined 
 * 2.strictNullChecks 参数用于新的严格空检查模式,在严格空检查模式下， null 和 undefined 值都不属于任何一个类型，它们只能赋值给自己这种类型或者 any, 在tscconfig中配置
 */

 let sum: number;
 sum = 2;
 sum = undefined;
 sum = null;

 let number: number|undefined|null;
 number = undefined;

//  void 类型
/**
 * void 表示没有任何类型 当一个函数没有返回值时，TS 会认为它的返回值是 void 类型。
 */
function javascrpit(name: string): void {
  console.log(name)
  // return name; // 有返回值会报错
  return ; // 可以return空 undefined null
}
javascrpit('yang')

// never类型  never是其它类型(null undefined)的子类型，代表不会出现的值
function infiniteLoop():never {
  while(true) {

  }
}

function fn(x:number | string) {
  if(typeof x == 'number') {

  }else if(typeof x == 'string') {

  }else {
    console.log('never')
  }
}

// 类型推论
/**
 *  是指编程语言中能够自动推导出值的类型的能力，它是一些强静态类型语言中出现的特性
    定义时未赋值就会推论成any类型
    如果定义的时候就赋值就能利用到类型推论
 */
let username;
username = 10;
username = 'zhufeng';
username = null;

// 包装对象（Wrapper Object）
/**
 *  JavaScript 的类型分为两种：原始数据类型（Primitive data types）和对象类型（Object types）。
    所有的原始数据类型都没有属性（property）
    原始数据类型(布尔值/数值/字符串/null/undefined/Symbol)
 */
let name = 'zhufeng';
console.log(name.toUpperCase());

console.log((new String('zhufeng')).toUpperCase());

// 当调用基本数据类型方法的时候，JavaScript 会在原始数据类型和对象类型之间做一个迅速的强制性切换
// let isOK1: boolean = true; // 编译通过
// let isOK2: boolean = Boolean(1) // 编译通过
// let isOK3: boolean = new Boolean(1); // 编译失败   期望的 isOK 是一个原始数据类型
