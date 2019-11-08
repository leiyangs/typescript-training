"use strict";
/**
 * 类
 */
// 1.如何定义类
/**
 * "strictPropertyInitialization": true / 启用类属性初始化的严格检查/
 * name!:string
 */
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.getName = function () {
        console.log(this.name);
    };
    return Person;
}());
var man = new Person();
man.name = 'yang';
man.getName();
// 2.存取器
/**
 * 在 TypeScript 中，我们可以通过存取器来改变一个类中属性的读取和赋值行为
 * 构造函数(主要用于初始化类的成员变量属性/类的对象创建时自动调用执行/没有返回值)
 */
var User = /** @class */ (function () {
    function User(myname) {
        this.name = myname;
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this.myname;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
var women = new User('yang');
women.name = 'lei';
console.log(women.name);
// 3.参数属性
var User1 = /** @class */ (function () {
    function User1(myname) {
        this.myname = myname;
    }
    Object.defineProperty(User1.prototype, "name", {
        get: function () {
            return this.myname;
        },
        set: function (name) {
            this.myname = name;
        },
        enumerable: true,
        configurable: true
    });
    return User1;
}());
var user = new User1('yang');
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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.changeName = function (name) {
        // this.name = name // 编译会报错
    };
    return Animal;
}());
var dog = new Animal('欢欢');
dog.changeName('豆豆');
module.exports = {};
// 5.继承
