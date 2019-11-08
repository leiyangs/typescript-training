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
