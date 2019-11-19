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
    this.name = name
  }
  changeName(name: string) {
    // this.name = name // 编译会报错
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
  setName(name: string):void {
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


// 6.类里面的修饰符
class Father {
  public name: string //类里面 子类 其它任何地方外边都可以访问
  protected age: number //类里面 子类 都可以访问,其它任何地方不能访问
  private money: number //类里面可以访问， 子类和其它任何地方都不可以访问
  constructor(name: string, age: number, money: number) {
    this.name = name;
    this.age = age;
    this.money = money;
  }
  getName(): string{
    return this.name;
  }
  setName(name: string): void{
    this.name = name;
  }
}

class Child extends Father {
  constructor(name: string,age: number,money: number) {
    super(name, age, money)
  }
  desc() {
    // console.log(`${this.name} ${this.age} ${this.money}`);  // 编译报错
  }
}
let child = new Child('杨',10,1000);
console.log(child.name);
// console.log(child.age); // 编译报错
// console.log(child.money); // 编译报错


// 7.静态属性 静态方法
class Father1 {
  static className='Father';
  static getClassName() {
    return Father1.className;
  }
  public name: string;
  constructor(name:string) { //构造函数
    this.name=name;
  }
}
console.log(Father1.className);
console.log(Father1.getClassName());
class child1 extends Father1 {
  constructor(name:string) {
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
    function enhancer (target: any) {
      target.prototype.name = 'yang';
      target.prototype.eat = function () {
        console.log('eat')
      }
    }
    @enhancer
    class Person {
      constructor() {}
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
    return class{
      name: string = 'yang';
      eat() {
        console.log('吃饭')
      }
    }
  }
  @enhancer
  class Person {
    constructor() {}
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
      if(delete target[propertyKey]) {
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
      descriptor.value = function(...args: any[]) {
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
        return args.reduce((accu: number, item: number) => accu + item ,0);
      }
    }
    let p: Person = new Person();
    for(let attr in p) {
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
  