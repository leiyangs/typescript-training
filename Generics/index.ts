// 12 泛型(用的地方很多)
/**
 * 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性
 * 泛型T作用域只限于函数内部使用
 */
export = {}
// 12.1 泛型函数
function createArray<T>(length:number, value: T): T[]{
  let array: T[] = [];
  for (let i = 0; i < length; i++) {
    array[i] = value;
  }
  return array
}
let arr1 = createArray<string>(5, '1');
console.log(arr1)


// 12.2 类数组
/**
 * 类数组（Array-like Object）类似数组，不是数组类型，比如 arguments
 */
function sum() {
  let args: IArguments = arguments;
  for (let i = 0; i < args.length; i++) {
      console.log(args[i]);
  }
}
// sum(1, 2, 3);
let root = document.getElementById('root');
let children: HTMLCollection = (root as HTMLElement).children;
children.length;
let nodeList: NodeList = (root as HTMLElement).childNodes;
nodeList.length;


// 12.3 泛型类 用到了泛型的类
class MyArray<T> {
  private list: T[] = [];
  add(element: T) {
    this.list.push(element);
  }
  getMax(): T {
    let maxValue = this.list[0];
    for (let i = 0; i < this.list.length; i++) {
      const element = this.list[i];
      if(element > maxValue) {
        maxValue = element;
      }
    }
    return maxValue;
  }
}
let arr2 = new MyArray();
arr2.add(1); arr2.add(2); arr2.add(3);
let ret = arr2.getMax();
console.log(ret);


// 12.4 泛型接口
/**
 * 泛型接口可以用来约束函数
 */
interface Calculate {
  <T>(a: T, b: T): T
}
let add: Calculate = function<T> (a:T, b:T) {
  return a;
}
add<number>(1,2);


// 12.5 多个类型参数
/**
 * 泛型可以有多个
 */

//  不借助中间变量，交换两个变量的值
function swap<A, B>(tuple: [A, B]): [B, A] {
  return [tuple[1], tuple[0]]
}
let ret1 = swap([1, "a"]); // 交换位置
ret1[0].toLowerCase();
ret1[1].toFixed(2);


// 12.6 默认泛型类型
// 如果不传类型的话，默认是number类型
function createArray3<T=number>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}
let result = createArray3(3, 'a');
console.log(result);


// 12.7 泛型约束
/**
 * 在函数中使用泛型的时候，由于预先并不知道泛型的类型，所以不能随意访问相应类型的属性或方法。
 */
/* function logger<T>(val: T) {
  console.log(val.length); // 直接访问会报错
} */
interface LengthWise {
  length: number
}
//可以让泛型继承一个接口
function logger2<T extends LengthWise>(val: T) {
  console.log(val.length);
}
logger2("yang");
// logger2(1); // 类型“1”的参数不能赋给类型“LengthWise”的参数。


// 12.8 泛型接口 
/**
 * 定义接口的时候也可以指定泛型
 */
interface Cart<T> {
  list: T[]
}
let cart: Cart<number> = {
  list: [1,2,3]
}


// 12.9  泛型类型别名
/**
 * 泛型类型别名可以表达更复杂的类型
 */
// 通过type可以定义别名或者小名
type Cart2<T> = {list: T[]} | T[];
let cart1:Cart2<string> = {list: ['1']};
let cart2:Cart2<number> = [1];


// 12.10 泛型接口 vs 泛型类型别名
/**
 * 接口创建了一个新的名字，它可以在其他任意地方被调用。而类型别名并不创建新的名字，例如报错信息就不会使用别名
 * 类型别名不能被 extends和 implements,这时我们应该尽量使用接口代替类型别名
 * 当我们需要使用联合类型或者元组类型的时候，类型别名会更合适
 */ 