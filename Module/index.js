"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
/* 模块VS命名空间 */
// 1.模块
/**
 * 模块是TS中外部模块的简称，侧重于代码和复用
 * 模块在期自身的作用域里执行，而不是在全局作用域里
 * 一个模块里的变量、函数、类等在外部是不可见的，除非你把它导出
 * 如果想要使用一个模块里导出的变量，则需要导入
 */
var a_1 = __importStar(require("./a"));
console.log(a_1.default, a_1.a, a_1.b);
// 2.命名空间 
/**
 * 在代码量较大的情况下，为了避免命名空间冲突，可以将相似的函数、类、接口放置到命名空间内
 * 命名空间可以将代码包裹起来，只对外暴露需要在外部访问的对象，命名空间内通过export向外导出
 * 命名空间是内部模块，主要用于组织代码，避免命名冲突
 */
var b_1 = require("./b");
var dog_of_zoo = new b_1.zoo.Dog();
dog_of_zoo.eat();
module.exports = {};
