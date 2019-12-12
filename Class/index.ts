export = {}

/**
 * 类
 */

// 1.如何定义类
/**
 * "strictPropertyInitialization": true / 启用类属性初始化的严格检查/
 * name!:string
 */
class Person {
  name!: string;
  getName(): void {
    console.log(this.name)
  }
}
let man = new Person();
man.name = 'yang';
man.getName();


// 2.存取器
/**
 * 在 TypeScript 中，我们可以通过存取器来改变一个类中属性的读取和赋值行为
 * 构造函数(主要用于初始化类的成员变量属性/类的对象创建时自动调用执行/没有返回值)
 */
class User {
  myname!: string
  constructor(myname: string) {
    this.name = myname
  }
  get name() {
    return this.myname;
  }
  set name(name) {
    this.name = name;
  }
}
let women = new User('yang');
women.name = 'lei';
console.log(women.name)



// 3.参数属性
class User1 {
  constructor(public myname: string) {

  }
  get name() {
    return this.myname
  }
  set name(name) {
    this.myname = name;
  }
}
let user = new User1('yang');
console.log(user.name);
user.name = 'lei';
console.log(user.name);



// 4.readonly
/**
 * readonly修饰的变量只能在构造函数中初始化
 * 在 TypeScript 中，const 是常量标志符，其值不能被重新分配
 * TypeScript 的类型系统同样也允许将 interface、type、 class 上的属性标识为 readonly
 * readonly 实际上只是在编译阶段进行代码检查。而 const 则会在运行时检查（在支持 const 语法的 JavaScript 运行时环境中）
 */
class Animal {
  public readonly name: string
  constructor(name: string) {
    this.name = name  // 这里可以修改，因为这里的值相当于初始化
  }
  changeName(name: string) {
    // this.name = name // 编译会报错 name是只读属性,不能在外部赋值
  }
}
let dog = new Animal('欢欢');
dog.changeName('豆豆')



// 5.继承
/**
 * 子类继承父类后子类的实例就拥有了父类中的属性和方法，可以增强代码的可复用性
 * 将子类公用的方法抽象出来放在父类中，自己的特殊逻辑放在子类中重写父类的逻辑
 * super可以调用父类上的方法和属性
 */

class People {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getName(): string {
    return this.name
  }
  setName(name: string): void {
    this.name = name;
  }
}

class Student extends People {
  no: number
  constructor(name: string, age: number, no: number) {
    super(name, age);
    this.no = no;
  }
  getNo() {
    return this.no;
  }
}
let s1 = new Student('杨', 18, 1)
console.log(s1);


// 6.类里面的修饰符 (访问修饰符：public公开的 protected受保护的 private私有的)
class Father {
  public name: string //类里面 子类 其它任何地方外边都可以访问
  protected age: number //类里面 子类 都可以访问,其它任何地方不能访问
  private money: number //类里面可以访问， 子类和其它任何地方都不可以访问
  constructor(name: string, age: number, money: number) {
    this.name = name;
    this.age = age;
    this.money = money;
  }
  getName(): string {
    return this.name;
  }
  setName(name: string): void {
    this.name = name;
  }
  getMoney() {
    console.log(this.money)
  }
}

let dad = new Father('hehe', 38, 100);
dad.name;
// dad.age;  // 无法访问
// dad.money;  // 无法访问
dad.getMoney();

class Child extends Father {
  static a: string = '1'
  constructor(name: string, age: number, money: number) {
    super(name, age, money)
  }
  desc() {
    // console.log(`${this.name} ${this.age} ${this.money}`);  // 编译报错 name age可以访问 money不能访问
  }
  getname() {
    console.log(this.name);
  }
}
let child = new Child('杨', 10, 1000);
console.log(child.name);
child.getname();
// console.log(child.age); // 编译报错
// console.log(child.money); // 编译报错


// 7.静态属性 静态方法
class Father1 {
  static className = 'Father';
  static getClassName() {
    return Father1.className;
  }
  public name: string;
  constructor(name: string) { //构造函数
    this.name = name;
  }
}
console.log(Father1.className);
console.log(Father1.getClassName());
class child1 extends Father1 {
  constructor(name: string) {
    super(name)
  }
}
let c1 = new child1('11')
// c1.getClassName()

// 8.装饰器
/**
 * 装饰器是一种特殊类型的声明，它能够被附加到类声明、方法、属性或参数上，可以修改类的行为
 * 常见的装饰器有类装饰器、属性装饰器、方法装饰器和参数装饰器
 * 装饰器的写法分为普通装饰器和装饰器工厂
 */

//  8.1.类装饰器
/**
 * 类装饰器在类声明之前声明，用来监视、修改或替换类定义
 */

namespace a {
  interface Person {
    name: string;
    eat: any
  }
  function enhancer(target: any) {
    target.prototype.name = 'yang';
    target.prototype.eat = function () {
      console.log('eat')
    }
  }
  @enhancer
  class Person {
    constructor() { }
  }
  let p: Person = new Person();
  console.log(p.name);
  p.eat();
}

namespace b {
  interface Person {
    name: string;
    eat: any
  }
  function enhancer(name: string) {
    return function enhancer(target: any) {
      target.prototype.name = name;
      target.prototype.eat = function () {
        console.log('eat');
      }
    }
  }

  @enhancer('yang')
  class Person {
    constructor() { }
  }
  let p: Person = new Person();
  console.log(p.name);
  p.eat();
}

namespace c {
  interface Person {
    name: string;
    eat: any
  }
  function enhancer(target: any) {
    return class {
      name: string = 'yang';
      eat() {
        console.log('吃饭')
      }
    }
  }
  @enhancer
  class Person {
    constructor() { }
  }
  let p: Person = new Person();
  console.log(p.name);
  p.eat();
}

//  8.2属性装饰器
/**
 * 属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数
 * 属性装饰器用来装饰属性:第一个参数对于静态成员来说是类的构造函数，对于实例成员是类的原型对象; 第二个参数是属性的名称
 * 方法装饰器用来装饰方法:第一个参数对于静态成员来说是类的构造函数，对于实例成员是类的原型对象; 第二个参数是方法的名称; 第三个参数是方法描述符
 */

namespace d {
  function upperCase(target: any, propertyKey: string) {
    let value = target[propertyKey];
    const getter = function () {
      return value;
    }
    // 用来替换的setter
    const setter = function (newVal: string) {
      value = newVal.toUpperCase();
    }
    // 替换属性，先删除原先的属性，再重新定义属性
    if (delete target[propertyKey]) {
      Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
      })
    }
  }
  function noEnumerable(target: any, property: string, descriptor: PropertyDescriptor) {
    console.log('target.getName', target.getName);
    console.log('target.getAge', target.getAge);
    descriptor.enumerable = true;
  }
  function toNumber(target: any, methodName: string, descriptor: PropertyDescriptor) {
    let oldMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      args = args.map(item => parseFloat(item));
      return oldMethod.apply(this, args);
    }
  }
  class Person {
    @upperCase
    name: string = 'yang'
    public static age: number = 10
    @noEnumerable
    getName() {
      console.log(this.name)
    }
    @toNumber
    sum(...args: any[]) {
      return args.reduce((accu: number, item: number) => accu + item, 0);
    }
  }
  let p: Person = new Person();
  for (let attr in p) {
    console.log('attr=' + attr)
  }
  p.name = 'yy';
  p.getName();
  console.log(p.sum('1', '2', '3'));
}
//  8.3参数装饰器 
/**
 * 会在运行时当作函数被调用，可以使用参数装饰器为类的原型增加一些元数据
 * 第1个参数对于静态成员是类的构造函数，对于实例成员是类的原型对象
 * 第2个参数的名称
 * 第3个参数在函数列表中的索引
 */
namespace d {
  interface Person {
    age: number;
  }
  function addAge(target: any, methodName: string, paramsIndex: number) {
    console.log(target);
    console.log(methodName);
    console.log(paramsIndex);
    target.age = 10;
  }
  class Person {
    login(username: string, @addAge password: string) {
      console.log(this.age, username, password);
    }
  }
  let p = new Person();
  p.login('zhufeng', '123456')
}




// 9.抽象类 abstract 
/**
 *
 * 抽象类一般是用来封装一些公用的，给子类用的方法、属性
 * 抽象描述一种抽象的概念，无法被实例化，只能被继承
 * 无法创建抽象类的实例
 * 抽象方法不能在抽象类中实现，只能在抽象类的具体子类中实现，而且必须实现
 * 
 *
 */
abstract class Copy {
  name!: string;
  // abstract text() {  // 方法“text”不能具有实现，因为它标记为抽象。
  //   console.log(this.name)
  // }
  abstract text(): void;
}
// let copyone = new Copy(); // 无法创建抽象的实例

class Childcopy extends Copy {
  text() {
    console.log('复制')
  }
}
let copytwo = new Childcopy();
copytwo.text();




// 10.抽象类abstract vs 接口interface
/**
 * 不同类之间公有的属性或方法，可以抽象成一个接口（Interfaces）
 * 而抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现
 * 抽象类本质是一个无法被实例化的类，其中能够实现方法和初始化属性，而接口仅能够用于描述,既不提供方法的实现，也不为属性进行初始化
 * 一个类可以继承一个类或抽象类，但可以实现（implements）多个接口
 * 抽象类也可以实现接口
 */

// 10.1抽象类封装公共的属性和方法
abstract class Animal1 {
  name!: string;
  abstract speak(): void;
}

// 接口里的方法都是抽象类,类可以实现多个接口
interface Flying {
  fly(): void;
}
interface Eating {
  eat(): void;
}

class Cat extends Animal1 implements Flying, Eating{
  speak() {
    console.log('喵')
  }
  fly() {
    console.log('我会飞')
  }
  eat() {
    console.log('我能吃')
  }
}
let cat = new Cat();
cat.speak(); 
cat.name = 'hh'

class Dog extends Animal {
  speak() {
    console.log('旺')
  }
}

// 10.2重写override 重载overload
/**
 * 重写是指子类重写继承自父类中的方法
 * 重载是指为同一个函数提供多个类型定义
 */
function double(val: number): number; // 函数的声明
function double(val: string): string; // 函数的声明
function double(val: any): any{ // 函数的实现，紧跟在声明后面
  if(typeof val === "string") {
    return `string->${val}`
  }else if(typeof val === "number") {
    return val + val;
  }
}
console.log(double(1));
console.log(double('a'));


