"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
// 5.继承
/**
 * 子类继承父类后子类的实例就拥有了父类中的属性和方法，可以增强代码的可复用性
 * 将子类公用的方法抽象出来放在父类中，自己的特殊逻辑放在子类中重写父类的逻辑
 * super可以调用父类上的方法和属性
 */
var People = /** @class */ (function () {
    function People(name, age) {
        this.name = name;
        this.age = age;
    }
    People.prototype.getName = function () {
        return this.name;
    };
    People.prototype.setName = function (name) {
        this.name = name;
    };
    return People;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, no) {
        var _this = _super.call(this, name, age) || this;
        _this.no = no;
        return _this;
    }
    Student.prototype.getNo = function () {
        return this.no;
    };
    return Student;
}(People));
var s1 = new Student('杨', 18, 1);
console.log(s1);
// 6.类里面的修饰符
var Father = /** @class */ (function () {
    function Father(name, age, money) {
        this.name = name;
        this.age = age;
        this.money = money;
    }
    Father.prototype.getName = function () {
        return this.name;
    };
    Father.prototype.setName = function (name) {
        this.name = name;
    };
    return Father;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(name, age, money) {
        return _super.call(this, name, age, money) || this;
    }
    Child.prototype.desc = function () {
        // console.log(`${this.name} ${this.age} ${this.money}`);  // 编译报错
    };
    return Child;
}(Father));
var child = new Child('杨', 10, 1000);
console.log(child.name);
// console.log(child.age); // 编译报错
// console.log(child.money); // 编译报错
// 7.静态属性 静态方法
var Father1 = /** @class */ (function () {
    function Father1(name) {
        this.name = name;
    }
    Father1.getClassName = function () {
        return Father1.className;
    };
    Father1.className = 'Father';
    return Father1;
}());
console.log(Father1.className);
console.log(Father1.getClassName());
var child1 = /** @class */ (function (_super) {
    __extends(child1, _super);
    function child1(name) {
        return _super.call(this, name) || this;
    }
    return child1;
}(Father1));
var c1 = new child1('11');
// c1.getClassName()
// 8.装饰器
/**
 * 装饰器是一种特殊类型的声明，它能够被附加到类声明、方法、属性或参数上，可以修改类的行为
 * 常见的装饰器有类装饰器、属性装饰器、方法装饰器和参数装饰器
 * 装饰器的写法分为普通装饰器和装饰器工厂
 */
//8.1.类装饰器
/**
 * 类装饰器在类声明之前声明，用来监视、修改或替换类定义
 */
var a;
(function (a) {
    function enhancer(target) {
        target.prototype.name = 'yang';
        target.prototype.eat = function () {
            console.log('eat');
        };
    }
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person = __decorate([
            enhancer
        ], Person);
        return Person;
    }());
    var p = new Person();
    console.log(p.name);
    p.eat();
})(a || (a = {}));
var b;
(function (b) {
    function enhancer(name) {
        return function enhancer(target) {
            target.prototype.name = name;
            target.prototype.eat = function () {
                console.log('eat');
            };
        };
    }
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person = __decorate([
            enhancer('yang')
        ], Person);
        return Person;
    }());
    var p = new Person();
    console.log(p.name);
    p.eat();
})(b || (b = {}));
module.exports = {};
