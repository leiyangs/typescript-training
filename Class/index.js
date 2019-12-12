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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
        this.name = name; // 这里可以修改，因为这里的值相当于初始化
    }
    Animal.prototype.changeName = function (name) {
        // this.name = name // 编译会报错 name是只读属性,不能在外部赋值
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
// 6.类里面的修饰符 (访问修饰符：public公开的 protected受保护的 private私有的)
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
    Father.prototype.getMoney = function () {
        console.log(this.money);
    };
    return Father;
}());
var dad = new Father('hehe', 38, 100);
dad.name;
// dad.age;  // 无法访问
// dad.money;  // 无法访问
dad.getMoney();
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(name, age, money) {
        return _super.call(this, name, age, money) || this;
    }
    Child.prototype.desc = function () {
        // console.log(`${this.name} ${this.age} ${this.money}`);  // 编译报错 name age可以访问 money不能访问
    };
    Child.prototype.getname = function () {
        console.log(this.name);
    };
    Child.a = '1';
    return Child;
}(Father));
var child = new Child('杨', 10, 1000);
console.log(child.name);
child.getname();
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
//  8.1.类装饰器
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
var c;
(function (c) {
    function enhancer(target) {
        return /** @class */ (function () {
            function class_1() {
                this.name = 'yang';
            }
            class_1.prototype.eat = function () {
                console.log('吃饭');
            };
            return class_1;
        }());
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
})(c || (c = {}));
//  8.2属性装饰器
/**
 * 属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数
 * 属性装饰器用来装饰属性:第一个参数对于静态成员来说是类的构造函数，对于实例成员是类的原型对象; 第二个参数是属性的名称
 * 方法装饰器用来装饰方法:第一个参数对于静态成员来说是类的构造函数，对于实例成员是类的原型对象; 第二个参数是方法的名称; 第三个参数是方法描述符
 */
var d;
(function (d) {
    function upperCase(target, propertyKey) {
        var value = target[propertyKey];
        var getter = function () {
            return value;
        };
        // 用来替换的setter
        var setter = function (newVal) {
            value = newVal.toUpperCase();
        };
        // 替换属性，先删除原先的属性，再重新定义属性
        if (delete target[propertyKey]) {
            Object.defineProperty(target, propertyKey, {
                get: getter,
                set: setter,
                enumerable: true,
                configurable: true
            });
        }
    }
    function noEnumerable(target, property, descriptor) {
        console.log('target.getName', target.getName);
        console.log('target.getAge', target.getAge);
        descriptor.enumerable = true;
    }
    function toNumber(target, methodName, descriptor) {
        var oldMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            args = args.map(function (item) { return parseFloat(item); });
            return oldMethod.apply(this, args);
        };
    }
    var Person = /** @class */ (function () {
        function Person() {
            this.name = 'yang';
        }
        Person.prototype.getName = function () {
            console.log(this.name);
        };
        Person.prototype.sum = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return args.reduce(function (accu, item) { return accu + item; }, 0);
        };
        Person.age = 10;
        __decorate([
            upperCase
        ], Person.prototype, "name", void 0);
        __decorate([
            noEnumerable
        ], Person.prototype, "getName", null);
        __decorate([
            toNumber
        ], Person.prototype, "sum", null);
        return Person;
    }());
    var p = new Person();
    for (var attr in p) {
        console.log('attr=' + attr);
    }
    p.name = 'yy';
    p.getName();
    console.log(p.sum('1', '2', '3'));
})(d || (d = {}));
//  8.3参数装饰器 
/**
 * 会在运行时当作函数被调用，可以使用参数装饰器为类的原型增加一些元数据
 * 第1个参数对于静态成员是类的构造函数，对于实例成员是类的原型对象
 * 第2个参数的名称
 * 第3个参数在函数列表中的索引
 */
(function (d) {
    function addAge(target, methodName, paramsIndex) {
        console.log(target);
        console.log(methodName);
        console.log(paramsIndex);
        target.age = 10;
    }
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person.prototype.login = function (username, password) {
            console.log(this.age, username, password);
        };
        __decorate([
            __param(1, addAge)
        ], Person.prototype, "login", null);
        return Person;
    }());
    var p = new Person();
    p.login('zhufeng', '123456');
})(d || (d = {}));
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
var Copy = /** @class */ (function () {
    function Copy() {
    }
    return Copy;
}());
// let copyone = new Copy(); // 无法创建抽象的实例
var Childcopy = /** @class */ (function (_super) {
    __extends(Childcopy, _super);
    function Childcopy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Childcopy.prototype.text = function () {
        console.log('复制');
    };
    return Childcopy;
}(Copy));
var copytwo = new Childcopy();
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
var Animal1 = /** @class */ (function () {
    function Animal1() {
    }
    return Animal1;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.speak = function () {
        console.log('喵');
    };
    Cat.prototype.fly = function () {
        console.log('我会飞');
    };
    Cat.prototype.eat = function () {
        console.log('我能吃');
    };
    return Cat;
}(Animal1));
var cat = new Cat();
cat.speak();
cat.name = 'hh';
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.speak = function () {
        console.log('旺');
    };
    return Dog;
}(Animal));
function double(val) {
    if (typeof val === "string") {
        return "string->" + val;
    }
    else if (typeof val === "number") {
        return val + val;
    }
}
console.log(double(1));
console.log(double('a'));
module.exports = {};
