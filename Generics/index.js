"use strict";
// 12.1 泛型函数
function createArray(length, value) {
    var array = [];
    for (var i = 0; i < length; i++) {
        array[i] = value;
    }
    return array;
}
var arr1 = createArray(5, '1');
console.log(arr1);
// 12.2 类数组
/**
 * 类数组（Array-like Object）类似数组，不是数组类型，比如 arguments
 */
function sum() {
    var args = arguments;
    for (var i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}
// sum(1, 2, 3);
var root = document.getElementById('root');
var children = root.children;
children.length;
var nodeList = root.childNodes;
nodeList.length;
// 12.3 泛型类 用到了泛型的类
var MyArray = /** @class */ (function () {
    function MyArray() {
        this.list = [];
    }
    MyArray.prototype.add = function (element) {
        this.list.push(element);
    };
    MyArray.prototype.getMax = function () {
        var maxValue = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            var element = this.list[i];
            if (element > maxValue) {
                maxValue = element;
            }
        }
        return maxValue;
    };
    return MyArray;
}());
var arr2 = new MyArray();
arr2.add(1);
arr2.add(2);
arr2.add(3);
var ret = arr2.getMax();
console.log(ret);
var add = function (a, b) {
    return a;
};
add(1, 2);
// 12.5 多个类型参数
/**
 * 泛型可以有多个
 */
//  不借助中间变量，交换两个变量的值
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
var ret1 = swap([1, "a"]); // 交换位置
ret1[0].toLowerCase();
ret1[1].toFixed(2);
// 12.6 默认泛型类型
// 如果不传类型的话，默认是number类型
function createArray3(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
var result = createArray3(3, 'a');
console.log(result);
//可以让泛型继承一个接口
function logger2(val) {
    console.log(val.length);
}
logger2("yang");
var cart = {
    list: [1, 2, 3]
};
var cart1 = { list: ['1'] };
var cart2 = [1];
module.exports = {};
// 12.10 泛型接口 vs 泛型类型别名
/**
 * 接口创建了一个新的名字，它可以在其他任意地方被调用。而类型别名并不创建新的名字，例如报错信息就不会使用别名
 * 类型别名不能被 extends和 implements,这时我们应该尽量使用接口代替类型别名
 * 当我们需要使用联合类型或者元组类型的时候，类型别名会更合适
 */ 
